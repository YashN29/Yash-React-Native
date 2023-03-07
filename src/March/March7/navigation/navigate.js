import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Login from '../screens/Login/Login';
import Authenticate from '../screens/Authenticate/Authenticate';
import Dashboard from '../screens/Dashboard/Dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Authenticate"
          component={Authenticate}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: true,
          headerBackTitleVisible:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
