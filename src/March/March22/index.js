import { View, Text } from 'react-native'
import React from 'react'
import MainScreen from './screens/MainScreen/MainScreen';
import SecondScreen from './screens/SecondScreen/SecondScreen';


const Index = () => {
  return (
    <View style={{flex:1}}>
      <MainScreen/>
    </View>
  )
}

export default Index;