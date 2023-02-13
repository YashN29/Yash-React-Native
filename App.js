import 'react-native-gesture-handler';
import React from "react";
import {View} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feb7 from "./src/Feb7/Feb7";
import Dashboard_UI from "./src/Feb7/Dashboard_UI";
import Feb13 from "./src/Feb13/Feb13";

const App =() => {


    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>

            <View style={{flex:1}}>{<Feb13/>}</View>

            {/* <Stack.Navigator initialRouteName="RegisterScreen">

                <Stack.Screen name="RegisterScreen" 
                              component={Feb7} 
                              options={{headerShown:false}}/>

                <Stack.Screen name="Dashboard" 
                              component={Dashboard_UI}
                              options={({route})=>({title:"Welcome, "+route.params.myName,
                              headerStyle:{
                                backgroundColor:'#FF6464',
                            },
                            headerTintColor:'white',
                            }),{headerBackVisible:false}}
                              />
                              
            </Stack.Navigator> */}

        </NavigationContainer>
    );
};

export default App;
