import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import Dashboard from '../screens/Dashboard/dashboard';
import Icon  from 'react-native-vector-icons/Ionicons';
import DashboardDrawer from './DashboardDrawer';
import 'react-native-gesture-handler'

const DashboardNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon: ({focused,size})=>{
            let iconName;
            if(route.name === "Dashboard"){
                iconName = focused ? "home": "home-outline"
            }else if(route.name === "Profile"){
                iconName = focused ? "person": "person-outline"
            }
            return <Icon name={iconName} size={size} color={"white"}/> 
        },
        tabBarLabelStyle:{
            color:'white'
        },
        tabBarStyle:{
            backgroundColor:'#252525',
            position:'absolute',
            height:55,
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
        }
      })
        
      }>
        <Tab.Screen name="Dashboard"
      component={DashboardDrawer}
      options={{headerShown:false}}/>

      <Tab.Screen name="Profile"
      component={Profile}/>

    </Tab.Navigator>
  );
};

export default DashboardNavigation;
