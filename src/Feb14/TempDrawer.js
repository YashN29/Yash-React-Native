import React from "react";
import {View,Text, Linking} from "react-native";
import 'react-native-gesture-handler'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";


const Drawer = createDrawerNavigator();
 

const TempDrawer = ()=>{
    return(

        <View style={{flex:1}}>
            <Drawer.Navigator>
                <Drawer.Screen name="screen1" component={Screen1}/>
                <Drawer.Screen name="screen2" component={Screen2}/>
            </Drawer.Navigator>
        </View>
    )
}

export default TempDrawer;
