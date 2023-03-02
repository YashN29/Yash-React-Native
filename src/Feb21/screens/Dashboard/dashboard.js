import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import styles from './styles';
import {logout} from '../../Store/action';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({navigation}) => {
  // useEffect(() => {
  //     getData();
  // }, [])

  // const getData = ()=>{
  //     try {
  //        AsyncStorage.getItem('Email')
  //         .then(value =>{
  //             if(value != null){
  //                 setName(value)
  //             }
  //         })
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  //const dispatch = useDispatch();

  // const handelLogout = () => {
  //   navigation.navigate('Login');
    // dispatch(logout(
    //     {email: '',
    //     password: ''}
    //     ));

    //     try{
    //         await AsyncStorage.setItem('Email','');
    //     }catch(error){
    //         console.log(error);
    //     }
  //};

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
    <View style={styles.main_view}>
      <View style={{alignItems: 'center'}}>
      </View>
    </View>
  );
};

export default Dashboard;
