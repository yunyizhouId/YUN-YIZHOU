import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

const DetailsScreen = (props) => {
  return (
    <SafeAreaView>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>ニュース詳細</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.font}>{`
  株式会社ハイシンクジャパン
　創立20周年記念式典開催`}</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/jhc_news001.jpg')}
        />
        <Text>2019-10-25</Text>
        <Text style={styles.font2}>
          {`
    株式会社ハイシンクジャパン創立20周年記念式典をザ・プリンスパークタワー東京で開催しました。
    
    今回のテーマは「感謝、自信、希望」であり、主要顧客やグループ会社代表、社員代表など約200人が参加しました。`}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  font: {
    fontSize: 24,
  },
  font2: {
    fontSize: 20,
    width: '90 %',
  },
  tinyLogo: {
    marginTop: 10,
    width: 350,
    height: 180,
  },
});
export default DetailsScreen;
