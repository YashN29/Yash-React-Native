import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Feb13/HomeScreen';
import Profile from '../Feb13/Profile';
import Setting from '../Feb13/Setting';
import { View,Image } from 'react-native';

const Tab = createBottomTabNavigator();

const Feb13 = ()=>{
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

export default Feb13;