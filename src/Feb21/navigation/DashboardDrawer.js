import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard/dashboard';
import Profile from '../screens/Profile/Profile';

const Drawer = createDrawerNavigator();

const DashboardDrawer = () => {
  return (
    <View style={{flex:1}}>
      <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name="Home" component={Dashboard} />
          <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </View>
  )
}

export default DashboardDrawer;