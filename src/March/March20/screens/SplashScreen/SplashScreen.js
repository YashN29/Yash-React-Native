import {View, Text} from 'react-native';
import React,{useEffect} from 'react';
import LottieView from 'lottie-react-native';
import styles from './styles';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 1500);
  }, [])
  
  return (
    <View style={styles.mainContainer}>
      <LottieView source={require('../../../../../icons/gameLoading.json')} autoPlay/>
    </View>
  );
};

export default SplashScreen;
