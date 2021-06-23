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
const Tab1Screen = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.button}>
          <Text>{`株式会社ハイシンクジャパン
創立20周年記念式典開催`}</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/jhc_news001.jpg')}
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
          <Text>{`マージン率の公開（2019年度
決算後の事業報告に基づく数
字)`}</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/jhc_news004.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.button}>
          <Text>{`TOKYO MX「企業魂」にて当
社が紹介されました`}</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/jhc_news007.jpg')}
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
export default Tab1Screen;
