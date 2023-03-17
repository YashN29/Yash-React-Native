import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import Dashboard from './screens/Dashboard/Dashboard';
import UserProfile from './screens/UserProfile/UserProfile';

const Navigation = () => {
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
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false, headerBackVisible: false}}
        />

        <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{headerShown: true, headerBackVisible: true,}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
