import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {

  setTimeout(() => {
    navigation.navigate('Login');
  }, 1500);
  return (
    <View style={styles.mainContainer}>
      <LottieView source={require('../../../../../icons/splashIcon.json')} autoPlay loop/>
    </View>
  )
}

export default SplashScreen