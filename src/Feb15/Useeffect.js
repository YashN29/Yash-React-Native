import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'


const Useeffect = () => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000);
    });

  return (
    <View style={UseEffect_CSS.mainContainer}>

      <Text style={UseEffect_CSS.result}>{count} Seconds</Text>

    </View>
  )
}

const UseEffect_CSS = StyleSheet.create({

    mainContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        marginVertical:100
    },
    result:{
        fontSize:40,
        fontWeight:'bold',
        color:'black'
    },
})

export default Useeffect