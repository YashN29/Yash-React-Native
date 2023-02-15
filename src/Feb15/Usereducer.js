import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React ,{useReducer,useEffect,useRef} from 'react'

const Usereducer = () => {

    const initialState = {
        time :0,
        isRunning :false
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [isRunning, time] = state;

    

    useEffect(() => {
        if (!state.isRunning) { 
          return; 
        }
        idRef.current = setInterval(() => dispatch({type: 'tick'}), 1000);
        return () => {
          clearInterval(idRef.current);
          idRef.current = 0;
        };
      }, [state.isRunning]);

    const reducer = (state,action)=>{
        switch (action.type) {
            case 'start':
                return {...state, isRunning:true};

                case 'stop':
                    return {...state, isRunning:false};

                    case 'reset':
                        return {isRunning:false, time:0};
            default:
                throw new Error();
        }
    }


  return (
    <View>

        <Text style={{fontSize:45}}>{state.time}</Text>

        <View style={UseReducer_CSS.middelContainer}>

            <TouchableOpacity style={UseReducer_CSS.touchableopacity} onPress={()=> dispatch({type:'start'})}>
            <Text style={UseReducer_CSS.textInsideTouchable}>Start</Text>
            </TouchableOpacity>

            <TouchableOpacity style={UseReducer_CSS.touchableopacity} onPress={()=> dispatch({type:'stop'})}>
            <Text style={UseReducer_CSS.textInsideTouchable}>Stop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={UseReducer_CSS.touchableopacity} onPress={()=> dispatch({type:'reset'})}>
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