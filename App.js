import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
//import HomeNavigator from './src/navigators/HomeNavigator';
//import RootNavigator from './src/navigators/RootNavigator';
import ContentNavigator from './src/navigators/ContentNavigator';
import TestTextInput from './components/TestTextInput';
export default function App() {
  return (
    <NavigationContainer>
      <ContentNavigator />
    </NavigationContainer>
  );
}
