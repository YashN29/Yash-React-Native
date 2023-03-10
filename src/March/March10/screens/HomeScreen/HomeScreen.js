import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.btn_view}>
        <TouchableOpacity style={styles.button} onPress={null}>
          <Text style={styles.text_inside_btn}>Get Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
