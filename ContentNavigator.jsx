import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './../screens/HomeScreen';
import DetailsScreen from './../screens/DetailsScreen';
import RootNavigator from './RootNavigator';
import TestTextInput from '../../components/TestTextInput';
import WelcomeScreen from './../screens/WelcomeScreen';
const Stack = createStackNavigator();

const ContentNavigator = (props) => {
  return (
    <Stack.Navigator initialRouteName={'WelcomeScreen'}>
      <Stack.Screen
        name="Login"
        component={TestTextInput}
        options={({ route, navigation }) => ({
          title: 'ログイン',
          headerShown: false,
        })}
      />
      {/* <Stack.Screen
        name="Login"
        component={TestTextInput}
        // options={{
        //   title: 'Home',
        //   headerTitle: () => <Text style={styles.headerTitle}>ホーム</Text>,
        // }}
      /> */}
      <Stack.Screen
        name="Home"
        component={RootNavigator}
        options={({ route, navigation }) => ({
          title: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route, navigation }) => ({
          title: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={({ route, navigation }) => ({
          title: '',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
export default ContentNavigator;
