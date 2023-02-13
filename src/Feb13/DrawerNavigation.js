import 'react-native-gesture-handler';
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from '../Feb13/HomeScreen';
import Profile from '../Feb13/Profile';
import Setting from '../Feb13/Setting';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ()=>{
    return(
        <Drawer.Navigator>

            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="Settings" component={Setting}/>
            
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;
