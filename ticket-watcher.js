import { chromium } from "playwright";
import { spawn } from "node:child_process";
import path from "node:path";

const config = {
  url: process.env.TARGET_URL ?? "https://example.com/ticket",
  buttonSelector: process.env.BUTTON_SELECTOR ?? ".product-buy-wrapper .product-buy > div",
  soldOutText: process.env.SOLD_OUT_TEXT ?? "已售罄",
  reloadIntervalMs: Number(process.env.RELOAD_INTERVAL_MS ?? 5000),
  navigationTimeoutMs: Number(process.env.NAVIGATION_TIMEOUT_MS ?? 45000),
  restartDelayMs: Number(process.env.RESTART_DELAY_MS ?? 5000),
  screenshotPath: process.env.SCREENSHOT_PATH ?? "ticket-ready.png",
  channel: process.env.BROWSER_CHANNEL ?? "",
  userDataDir: process.env.USER_DATA_DIR ?? path.resolve("playwright-profile")
};

if (!process.env.TARGET_URL) {
  console.error("TARGET_URL is required.");
  process.exit(1);
}

if (config.reloadIntervalMs < 3000) {
  console.error("RELOAD_INTERVAL_MS must be 3000 or higher.");
  process.exit(1);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function openWithFallback(page, action) {
  try {
    await action();
  } catch (error) {
    if (error?.name !== "TimeoutError") {
      throw error;
    }

    console.warn(`Navigation timed out after ${config.navigationTimeoutMs} ms, but the watcher will keep going.`);
  }
}

async function findTargetButton(page) {
  const locator = page.locator(config.buttonSelector).first();
  const count = await locator.count();

  if (count === 0) {
    return null;
  }

  const text = ((await locator.innerText().catch(() => "")) || "").trim();
  const visible = await locator.isVisible().catch(() => false);
  const enabled = await locator.isEnabled().catch(() => false);

  if (!visible || !text) {
    return null;
  }

  return { locator, text, enabled };
}

async function emphasizeReadyState(page, target) {
  await page.bringToFront().catch(() => {});
  await page.evaluate(() => {
    document.title = "[READY] " + document.title.replace(/^\[READY\]\s*/, "");
    window.focus();
  }).catch(() => {});

  if (!target?.locator) {
    return;
  }

  await target.locator.scrollIntoViewIfNeeded().catch(() => {});
  await target.locator.evaluate((node) => {
    node.setAttribute("data-ticket-watch-ready", "1");

    if (!document.getElementById("ticket-watch-ready-style")) {
      const style = document.createElement("style");
      style.id = "ticket-watch-ready-style";
      style.textContent = `
        [data-ticket-watch-ready="1"] {
          outline: 4px solid #ff3b30 !important;
          box-shadow: 0 0 0 6px rgba(255, 59, 48, 0.35) !important;
          animation: ticket-watch-pulse 0.7s infinite alternate !important;
          position: relative !important;
          z-index: 2147483647 !important;
        }

        @keyframes ticket-watch-pulse {
          from { transform: scale(1); }
          to { transform: scale(1.03); }
        }
      `;
      document.head.appendChild(style);
    }
  }).catch(() => {});
}

function playAlertSound() {
  if (process.platform !== "win32") {
    process.stdout.write("\u0007");
    return;
  }

  const script = `
    [console]::Beep(784, 280)
    Start-Sleep -Milliseconds 90
    [console]::Beep(1047, 320)
    Start-Sleep -Milliseconds 90
    [console]::Beep(1319, 420)
    Start-Sleep -Milliseconds 120
    [console]::Beep(1568, 650)
  `;

  spawn("powershell", ["-NoProfile", "-Command", script], {
    detached: true,
    stdio: "ignore"
  }).unref();
}

async function runWatcherSession() {
  const launchOptions = {
    headless: false,
    args: [
      "--disable-background-networking",
      "--disable-default-apps",
      "--no-first-run",
      "--no-default-browser-check"
    ]
  };

  if (config.channel) {
    launchOptions.channel = config.channel;
  }

  const context = await chromium.launchPersistentContext(config.userDataDir, launchOptions);
  const page = context.pages()[0] ?? (await context.newPage());
  page.setDefaultTimeout(config.navigationTimeoutMs);

  let attempt = 0;
  let baselineSeen = false;

  try {
    await openWithFallback(page, () => page.goto(config.url, { waitUntil: "domcontentloaded" }));
    await sleep(3000);

    for (;;) {
      attempt += 1;
      const target = await findTargetButton(page);
      const timestamp = new Date().toLocaleString("ja-JP", { hour12: false });

      if (target) {
        if (target.text.includes(config.soldOutText)) {
          baselineSeen = true;
          console.log(`[${timestamp}] Attempt ${attempt}: target still shows ${target.text}.`);
        } else if (baselineSeen) {
          console.log(`[${timestamp}] Target text changed on attempt ${attempt}: ${target.text}`);
          playAlertSound();
          await emphasizeReadyState(page, target);
          await page.screenshot({ path: config.screenshotPath, fullPage: true });
          console.log(`Saved screenshot to ${config.screenshotPath}.`);
          console.log("Page is open in the browser. Confirm the state and click manually.");
          return;
        } else {
          console.log(`[${timestamp}] Attempt ${attempt}: target found with text ${target.text}, waiting for a sold-out baseline first.`);
        }
      } else {
        console.log(`[${timestamp}] Attempt ${attempt}: target button not found.`);
      }

      await sleep(config.reloadIntervalMs);
      await openWithFallback(page, () => page.reload({ waitUntil: "domcontentloaded" }));
      await sleep(1500);
    }
  } finally {
    await context.close().catch(() => {});
  }
}

async function main() {
  let restartCount = 0;

  for (;;) {
    try {
      if (restartCount > 0) {
        console.log(`Restarting watcher (attempt ${restartCount + 1})...`);
      }

      await runWatcherSession();
      console.log("Watcher finished normally.");
      return;
    } catch (error) {
      restartCount += 1;
      console.error(`Watcher crashed: ${error?.message ?? error}`);
      console.log(`Retrying in ${config.restartDelayMs} ms...`);
      await sleep(config.restartDelayMs);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
