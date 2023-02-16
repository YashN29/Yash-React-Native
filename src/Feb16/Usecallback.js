import { View, Text, Button } from 'react-native';
import React,{useCallback, useState} from 'react';
import CustomText from './CustomText';

const Usecallback = () => {

   
    const [count, setCount] = useState(0)

    const democallback = useCallback(()=>{
        console.log("Hello")
    },['Yash'])

  return (
    <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>

      <Text style={{fontSize:30,marginTop:50,color:'black'}}>Count Value is {count}</Text>

     <Button title='Click me' onPress={()=> setCount(count+1)}/>

     <CustomText  name="Yash" size="50" democallback={democallback} />

    </View>
  )
}

export default Usecallback; 