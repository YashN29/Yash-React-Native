import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Alert,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const Status = ({navigation, route}) => {
  const splashData = route.params.user;
  const [data, setData] = useState(splashData);
  if (data) {
    //console.log(data);
  } else {
    const loginData = route.params.userInfo;
    setData(loginData);
    console.log('User:-', data);
  }

  useEffect(() => {
    const back = () => {
      Alert.alert('Logout!', 'Are you sure you want to exit?', [
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

  const signOutser = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
      });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.profileImage} source={{uri: data.photoURL}} />
      <Text style={styles.userName}>Name: {data.displayName}</Text>
      <Text style={styles.userName}>Email: {data.email}</Text>
      <View style={styles.btn_view}>
        <TouchableOpacity style={styles.button} onPress={() => signOutser()}>
          <Text style={styles.text_inside_btn}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
