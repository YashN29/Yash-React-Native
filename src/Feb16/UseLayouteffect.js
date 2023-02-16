import { View, Text } from 'react-native'
import React, {useLayoutEffect,useEffect}from 'react'

const UseLayouteffect = () => {

    useEffect(()=>{
        console.log("First useEffect");
    },[]);

    useEffect(()=>{
        console.log("Second useEffect");
    },[]);
 
    useLayoutEffect(()=>{
        console.log("Third useEffect");
    },[]);


  return (
    <View>
      <Text>UseLayouteffect Demo</Text>
    </View>
  )
}

export default UseLayouteffect