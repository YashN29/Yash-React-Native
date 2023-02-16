import { View, Text } from 'react-native'
import React,{memo} from 'react'

const CustomText= props =>{

  console.log("Rendered!");

  return (
    <View style={{alignItems:'center'}}>
      <Text
       style={{
        color: `${props.color}`,
        fontWeight: `${props.weight}`,
        fontSize: Number(`${props.size}`)
      }}
        >{props.name}</Text>
    </View>
  )
}

export default memo(CustomText);