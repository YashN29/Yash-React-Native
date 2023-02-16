import { View, Text,StyleSheet, TouchableOpacity, Date } from 'react-native';
import React ,{useReducer,useEffect} from 'react';

const initialState = 0;

const reducer =(state, action)=>{
  console.log(state,action);
    if(action.type === "INCREMENT"){
      return state + 1;
    }
    if(action.type === "DECREMENT"){
      if(state >0){
        return state - 1;
      }
    }
    if(action.type === "RESET"){
      return initialState;
    }
        return state;
}


const Usereducer = () => {

  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <View style={{alignItems:'center' ,marginTop:80}}>

        <Text style={{fontSize:45,color:'black'}}>{state} Seconds</Text>

        <View style={UseReducer_CSS.middelContainer}>

            <TouchableOpacity style={UseReducer_CSS.touchableopacity} 
                              onPress={()=> dispatch({type:'INCREMENT'})}>
            <Text style={UseReducer_CSS.textInsideTouchable}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={UseReducer_CSS.touchableopacity} 
                              onPress={()=> dispatch({type:'DECREMENT'})}>
            <Text style={UseReducer_CSS.textInsideTouchable}>Decrement</Text>
            </TouchableOpacity>

            <TouchableOpacity style={UseReducer_CSS.touchableopacity} 
                              onPress={()=> dispatch({type:'RESET'})}>
            <Text style={UseReducer_CSS.textInsideTouchable}>Reset</Text>
            </TouchableOpacity>

        </View>

    </View>
  )
}

const UseReducer_CSS = StyleSheet.create({
    middelContainer:{
        flexDirection:'column',
        width:330,
        alignItems:'center',
        marginTop:80,
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

export default Usereducer