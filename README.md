# Ticket Watcher

This project opens a visible browser, reloads a target ticket page at a respectful interval, and alerts you when the purchase button text changes away from a sold-out state.

## What it does

- opens a persistent Playwright browser profile
- watches one target button
- reloads the page on a fixed interval
- detects when the button text changes away from the sold-out text
- plays an alert sound, brings the page forward, highlights the element, and saves a screenshot
- auto-restarts after browser/page crashes

It does not auto-click or auto-submit forms.

## Setup

```powershell
npm install
npx playwright install chromium
```

## Usage

```powershell
$env:TARGET_URL="https://example.com/ticket"
$env:BUTTON_SELECTOR=".product-buy-wrapper .product-buy > div"
$env:SOLD_OUT_TEXT="Sold out"
$env:RELOAD_INTERVAL_MS="5000"
$env:RESTART_DELAY_MS="5000"
npm run watch-ticket
```

## Environment variables

- `TARGET_URL`: required target page URL
- `BUTTON_SELECTOR`: selector for the purchase button text element
- `SOLD_OUT_TEXT`: baseline text that means the button is still unavailable
- `RELOAD_INTERVAL_MS`: page reload interval, minimum `3000`
- `NAVIGATION_TIMEOUT_MS`: navigation timeout, default `45000`
- `RESTART_DELAY_MS`: delay before auto-restart after a crash, default `5000`
- `SCREENSHOT_PATH`: screenshot path for a detected change, default `ticket-ready.png`
- `BROWSER_CHANNEL`: optional browser channel like `msedge`
- `USER_DATA_DIR`: persistent browser profile directory, default `playwright-profile`

## Notes

- The default selector is the one that matched the Bilibili ticket page this project was tested against.
- Login state is stored in `playwright-profile`, so later runs can reuse the same session.
- Cache files and browser profile data are ignored by Git.
