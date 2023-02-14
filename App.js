import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View ,Image} from 'react-native';
import HomeScreen from './src/Feb13/HomeScreen';
import TempDrawer from './src/Feb14/TempDrawer';

import Profile from './src/Feb13/Profile';

import Setting from './src/Feb13/Setting';


const Test = ()=>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={{marginTop:20,
            tabBarStyle:{
                position:'absolute',
                height:65,
                elevation:8,
                borderTopRightRadius:25,
                borderTopLeftRadius:25,
            },
            //headerShown:false
            }}>

<Tab.Screen name='Home' component={HomeScreen} options={{
    tabBarBadge:3,
    tabBarActiveTintColor:'#069CEE',
    tabBarIcon: ({focused})=>(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/home.png')}
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#069CEE' : 'black'
                    }}/>
        </View>
    )
}}/>

<Tab.Screen name='Profile' component={Profile} options={{
    tabBarActiveTintColor:'#4DC4B3',
    tabBarIcon: ({focused})=>(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/user.png')}
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#4DC4B3' : 'black'
                    }}/>
        </View>
    )
}}/>

<Tab.Screen name='Settings' component={Setting} options={{
    tabBarActiveTintColor:'#B6F7FC',
    tabBarIcon: ({focused})=>(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/setting.png')}
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#B6F7FC' : 'black'
                    }}/>
        </View>
    )
}}/>

</Tab.Navigator>
    )
}


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      
        <Stack.Navigator initialRouteName='Test' >
            <Stack.Screen name="Test" component={Test} options={{headerShown: false}}/>
           <Stack.Screen
            name="Draw"
            component={TempDrawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      
    </NavigationContainer>

    // <NavigationContainer>

    //     <Stack.Navigator initialRouteName="RegisterScreen">

    //         <Stack.Screen name="RegisterScreen"
    //                       component={Feb7}
    //                       options={{headerShown:false}}/>

    //         <Stack.Screen name="Dashboard"
    //                       component={Dashboard_UI}
    //                       options={({route})=>({title:"Welcome, "+route.params.myName,
    //                       headerStyle:{
    //                         backgroundColor:'#FF6464',
    //                     },
    //                     headerTintColor:'white',
    //                     }),{headerBackVisible:false}}
    //                       />

    //     </Stack.Navigator>

    // </NavigationContainer>
  );
};

export default App;
