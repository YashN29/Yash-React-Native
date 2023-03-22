import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {

  const user = auth().currentUser;
  console.log(user);

  setTimeout(() => {
    if(!user){
      navigation.navigate('Login');
    }else{
      navigation.navigate('Profile',{user : user});
    }
  }, 1500);

  return (
    <View style={styles.mainContainer}>
      <LottieView source={require('../../../../../icons/splashIcon.json')} autoPlay loop/>
    </View>
  )
}

export default SplashScreen;