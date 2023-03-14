import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React, {useEffect,useState} from 'react';
import styles from './styles';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = () => {
  
  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('Token ->', token);
      });
  }, []);

  const PhoneCall = ()=>{
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${9909833019}';
    } else {
      number = 'tel:${9909833019}';
    }
    Linking.openURL(number);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.btn_view}>
        <TouchableOpacity style={styles.button} onPress={PhoneCall}>
          <Text style={styles.text_inside_btn}>Call Bhavik</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
