import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import RegisteredHome from './RegisteredHome';

const Stack = createStackNavigator();

export default function Account() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Connexion" component={Login} />
      <Stack.Screen name="Inscription" component={Register} />
    </Stack.Navigator>
  );
}
