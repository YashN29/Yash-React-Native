import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'#069CEE',alignItems:'center',justifyContent:'center'}}>
      <Button color="black" 
      title='Go to drawer' 
      onPress={()=> navigation.navigate('Draw')}></Button>
    </View>
  )
}