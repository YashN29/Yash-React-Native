import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/dashboard';
import RegisterData from '../screens/RegisterData/registerData';
import UpdateData from '../screens/UpdateData/updateData';


const Navigate = () => {

    const Stack = createNativeStackNavigator();
  
    return (
  
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Dashboard">
  
              <Stack.Screen name="Dashboard"
                            component={Dashboard}
                            options={{headerShown:false}}/>
  
              <Stack.Screen name="RegisterData"
                            component={RegisterData}
                            options={{headerShown:false}}/>
  
              <Stack.Screen name="UpdateData"
                            component={UpdateData}
                            />
  
          </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigate;