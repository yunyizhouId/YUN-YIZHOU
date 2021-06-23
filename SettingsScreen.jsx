import React, { useState } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  Linking,
  TouchableOpacity,
} from 'react-native';

const SettingsScreen = (props) => {
  const createTwoButtonAlert = () =>
    Alert.alert('ログアウト', '本当にログアウトしますか？', [
      {
        text: 'キャンセル',
        onPress: () => console.log('Cancel Pressed'),
      },
      { text: 'はい', onPress: () => props.navigation.navigate('Login') },
    ]);

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <StatusBar style="auto" />
      <Header>
        <Body>
          <Title>マイページ</Title>
        </Body>
      </Header>
      <SafeAreaView style={styles.button}>
        {/* ここはButtonタブでは文字が表示させれないのはなぜでしょう。 */}
        <TouchableOpacity title="ログアウト" onPress={createTwoButtonAlert}>
          <Text style={{ fontSize: 20 }}>ログアウト</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView >
  );
};
const styles = StyleSheet.create({
  button: {
    height: 60,
    width: '100 %',
    padding: 10,
    backgroundColor: '#d3d3d3',
    margin: 3,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
