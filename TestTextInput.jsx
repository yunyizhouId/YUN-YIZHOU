import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
//import CustomTextInput from './CustomTextInput';
import { Input } from 'react-native-elements';
import Logo from './Logo';
const TestTextInput = (props) => {
  const [inputMail, setInputMail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [loginft, setLoginft] = useState(false);
  const changeMail = (text) => {
    setInputMail(text);
    setLoginft(text && inputPassword);
  };
  const changePassword = (text) => {
    setInputPassword(text);
    setLoginft(text && inputMail);
  };

  return (
    <SafeAreaView>
      <View style={{ marginStart: 110, marginBottom: 10, marginTop: 35 }}>
        <Logo />
      </View>
      <View style={styles.root}>
        <Input
          label="ユーザー名"
          placeholder="Email"
          keyboardType={'email-address'}
          value={inputMail}
          onChangeText={(text) => changeMail(text)}
        />

        <Input
          label="パスワード"
          placeholder="Pwd"
          secureTextEntry={true}
          value={inputPassword}
          onChangeText={(text) => changePassword(text)}
        />
      </View>
      {/* ここのボタンのデザインは何をやっても表示されない... */}
      <View style={styles.button}>
        <Button
          title="ログイン"
          color="white"
          onPress={() => {
            props.navigation.navigate('Home');
            setInputPassword('');
            setInputMail('');
            setLoginft(false);
          }}
          disabled={!loginft}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '90%',
    marginTop: '30%',
    marginHorizontal: '5%',
    height: 46,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: '70%',
    height: 50,
    width: 200,
    padding: 10,
    backgroundColor: '#1e90ff',
    margin: 3,
    borderRadius: 50,
    marginLeft: 80,
  },
});

export default TestTextInput;
