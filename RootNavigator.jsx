import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
//import HomeScreen from './../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeNavigator from './HomeNavigator';
import TestTextInput from '../../components/TestTextInput';

const RootNavigator = (props) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        style: {
          backgroundColor: 'dodgerblue',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={() => ({
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => ({
          tabBarLabel: 'マイページ',
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="user" size={size} color={color} />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
