import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Logo from './../../components/Logo';

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = (props) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style={'auto'} />
      <View style={{ marginStart: 20, marginBottom: 10, marginTop: 8 }}>
        <Logo />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 14 },
          // tabStyle: { width: 100 },
          // style: { backgroundColor: 'powderblue' },
          inactiveTintColor: 'gray',
          activeTintColor: 'dodgerblue',
          indicatorStyle: {
            backgroundColor: 'dodgerblue',
            height: 5,
            borderRadius: 2,
          },
        }}>
        <Tab.Screen
          name="Tab1"
          component={Tab1Screen}
          options={{ tabBarLabel: 'すべて' }}
        />
        <Tab.Screen
          name="Tab2"
          component={Tab2Screen}
          options={{ tabBarLabel: '社内' }}
        />
        <Tab.Screen
          name="Tab3"
          component={Tab2Screen}
          options={{ tabBarLabel: '社外' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ root: { flex: 1 } });

export default HomeNavigator;
