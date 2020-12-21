import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from './src/res/colors';

import {
  Login,
  SignUp,
  RegisterUser,
  Home,
  AddFarmer,
  Farmers,
  FarmerDetail,
  Profile,
} from './src/screens';

const FarmersStackNav = createStackNavigator();
const FarmersStackNavComponent = () => (
  <FarmersStackNav.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: {backgroundColor: colors.orange},
    }}>
    <FarmersStackNav.Screen
      name="Farmers"
      component={Farmers}
      options={{headerShown: false}}
    />

    <FarmersStackNav.Screen
      name="FarmerDetail"
      component={FarmerDetail}
      options={{title: 'Farmer Details'}}
    />
  </FarmersStackNav.Navigator>
);

const HomeStackNav = createStackNavigator();
const HomeStackNavComponent = () => (
  <HomeStackNav.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: {backgroundColor: colors.orange},
    }}>
    <HomeStackNav.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <HomeStackNav.Screen
      name="AddFarmer"
      component={AddFarmer}
      options={{title: 'Add Farmer'}}
    />
  </HomeStackNav.Navigator>
);

const BottomTabs = createBottomTabNavigator();
const AppBottomTabNav = () => (
  <BottomTabs.Navigator
    tabBarOptions={{
      activeTintColor: colors.cream,
      inactiveTintColor: colors.green,
      style: {
        backgroundColor: colors.orange,
      },
    }}>
    <BottomTabs.Screen
      name="Home"
      component={HomeStackNavComponent}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="home-circle" size={size} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Farmers"
      component={FarmersStackNavComponent}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="barn" size={size} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="account-circle" size={size} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackNav = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <AppBottomTabNav />
    </NavigationContainer>
  );
};

export default App;
