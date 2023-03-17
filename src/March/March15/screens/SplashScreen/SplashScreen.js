import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import styles from './styles';

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('Dashboard');
    }, 1500);
  return (
    <View style={styles.mainContainer}>
      <LottieView source={require('../../../../../icons/splashIcon.json')} autoPlay loop/>
    </View>
  )
}

export default SplashScreen;