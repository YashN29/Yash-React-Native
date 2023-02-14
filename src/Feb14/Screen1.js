import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const Screen1= ()=> {
  return (
    <View style={screen1_style.mainContainer}>
      <LottieView source={require('../../icons/loader.json')} autoPlay loop/>
    </View>
  )
}

const screen1_style = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'black'
  }
})

export default Screen1;