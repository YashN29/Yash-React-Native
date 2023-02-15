import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useState} from 'react'

const Usestate=()=> {

    const [count, setCount] = useState(0)

    const press = ()=>{
        if(count>0){
            setCount(count-10)
        }else{
            ToastAndroid.show('Already Cleared!',ToastAndroid.SHORT);
        }
    }

  return (
    <View style = {UseState_CSS.mainContainer}>
        
        <Text style={UseState_CSS.result}>{count}</Text>

            <View style={UseState_CSS.middelContainer}>

                <TouchableOpacity style={UseState_CSS.touchableopacity} onPress={()=> setCount(count+10)}>
                <Text style={UseState_CSS.textInsideTouchable}>+10</Text>
                </TouchableOpacity>

                <TouchableOpacity style={UseState_CSS.touchableopacity} onPress={()=> setCount(0)}>
                <Text style={UseState_CSS.textInsideTouchable}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity style={UseState_CSS.touchableopacity} onPress={press}>
                <Text style={UseState_CSS.textInsideTouchable}>-10</Text>
                </TouchableOpacity>
            </View>
        

    </View>
  )
}

const UseState_CSS = StyleSheet.create({

    mainContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        marginVertical:100
    },
    middelContainer:{
        flexDirection:'column',
        width:330,
        alignItems:'center',
        marginTop:80,
    },
    result:{
        fontSize:50,
        fontWeight:'bold',
        color:'black'
    },
    plus10:{
        width:300,
        height:50,
    },
    touchableopacity:{
        backgroundColor:'black',
        width:200,
        height:40,
        marginTop:20,
        borderRadius:20,
        justifyContent:'center'
    },
    textInsideTouchable:{
        color:'white',
        alignSelf:'center',
        justifyContent:'center',
        fontSize:20
    }
})

export default Usestate;