import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const Dashboard = ({navigation}) => {
  const logOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        ToastAndroid.show('Successfully Logout!');
      });
      setTimeout(() => {
        BackHandler.exitApp();
      }, 500);
  };

  useEffect(() => {
    const back = () => {
      Alert.alert('Logout!', 'Are you sure you want to logout?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', back);
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.btn_view}>
        <TouchableOpacity style={styles.button} onPress={logOut}>
          <Text style={styles.text_inside_btn}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
