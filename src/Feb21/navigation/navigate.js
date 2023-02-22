import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register/register';
import Dashboard from '../screens/Dashboard/dashboard';
import SplashScreen from '../screens/SplashScreen/splashscreen';



const Navigate = () => {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splashscreen">

            <Stack.Screen name="Splashscreen"
                          component={SplashScreen}
                          options={{headerShown:false}}/>

            <Stack.Screen name="Register"
                          component={Register}
                          options={{headerShown:false}}/>

            <Stack.Screen name="Dashboard"
                          component={Dashboard}
                          options={({route})=>({title:"Welcome, "+route.params.myName,
                          headerStyle:{
                            backgroundColor:'#FF6464',
                        },
                        headerTintColor:'white',
                        }),{headerBackVisible:false}}
                          />

        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;