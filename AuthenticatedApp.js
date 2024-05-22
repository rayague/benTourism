// AuthenticatedApp.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Infos from './screens/Infos';
import Account from './screens/Account';
import RegisteredHome from './screens/RegisteredHome';
import Event from './screens/Event';
import Booking from './screens/Booking';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    bottom: 0,
    elevation: 1,
    height: 60,
    backgroundColor: '#4CAF50',
    borderWidth: 0,
  },
  headerStyle: {
    backgroundColor: '#4CAF50',
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
  },
  headerTitleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
};

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Bienvenu" screenOptions={screenOptions}>
      <Tab.Screen
        name="Bienvenu"
        component={RegisteredHome}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color="#ddd"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Découvrir"
        component={Infos}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'search' : 'search-outline'}
              size={24}
              color="#ddd"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mon compte"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color="#ddd"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
