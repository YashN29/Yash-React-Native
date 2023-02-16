import { View, Text, Button, Alert } from 'react-native'
import React,{useRef} from 'react'

const Usereference= ()=> {

const ref = useRef(0);

function handleClick(){
    ref.current = ref.current + 1;
    Alert.alert('You have Clicked' +ref.current+ 'times!')
}

  return (
    <View>
      <Button title='Click me!' onPress={handleClick}/>
      {/* <Text>{ref.current}</Text> */}
    </View>
  )
}

export default Usereference;