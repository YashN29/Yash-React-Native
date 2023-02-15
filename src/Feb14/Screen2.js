import { View, Text ,StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Screen2= ()=> {
  return (
    <View style={styles.Screen2mainContainer}>
      <LottieView source={require('../../icons/waiting.json')} autoPlay loop/>
    </View>
  )
}

const styles = StyleSheet.create({
  
  Screen2mainContainer:{
    flex:1,
    backgroundColor:'black'
  }
})

export default Screen2;