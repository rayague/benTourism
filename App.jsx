import React, {useContext, useState, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Infos from './screens/Infos';
import Account from './screens/Account';
import RegisteredHome from './screens/RegisteredHome';
import Login from './screens/Login';
import Register from './screens/Register';
import 'react-native-gesture-handler';

// Créer le AuthContext et l'exporter
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = () => {
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

// Common screen options
const screenOptions = {
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: true,
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
  tabBarStyle: {
    bottom: 0,
    elevation: 1,
    height: 60,
    backgroundColor: '#4CAF50',
    borderWidth: 0,
  },
};

// Drawer Navigator pour les utilisateurs non authentifiés
const Drawer = createDrawerNavigator();
const AppDrawer = () => (
  <Drawer.Navigator initialRouteName="Acceuil" screenOptions={screenOptions}>
    <Drawer.Screen name="Acceuil" component={Home} />
    <Drawer.Screen name="Infos" component={Infos} />
    {/* <Drawer.Screen name="Mon compte" component={Account} /> */}
    <Drawer.Screen name="Connexion" component={Login} />
    <Drawer.Screen name="Inscription" component={Register} />
  </Drawer.Navigator>
);

// Tab Navigator pour les utilisateurs authentifiés
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
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

const MainNavigator = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <AppDrawer />}
    </NavigationContainer>
  );
};

// Composant App avec AuthProvider
const App = () => (
  <AuthProvider>
    <MainNavigator />
  </AuthProvider>
);

export default App;
