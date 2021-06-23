import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
export const CATEGORY_INTERNAL = 'internal';
const Tab2Screen = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.button}>
          <Text>{`プライバシーマーク認証更新
のお知らせ`}</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/jhc_news009.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.button}>
          <Text>取締役就任に関するお知らせ</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/jhc_news003.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.button}>
          <Text>{`情報セキュリティマネジメン
ト認証更新(規格改訂含む)
のお知ら`}</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/jhc_news008.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.button}>
          <Text>{`大連華信はPivotalと正式に
「グローバル戦略提携パート
ナー」契約を締結`}</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/jhc_news002.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.button}>
          <Text>{`品質マネジメント認証取得のお
知らせ`}</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/jhc_news003.jpg')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 360,
    height: 110,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    borderWidth: 1,
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 110,
    height: 100,
    marginLeft: 20,
  },
});
export default Tab2Screen;
