import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import database from '@react-native-firebase/database';

const Profile = ({navigation}) => {
  const handelLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainConatainer}>
      <View style={styles.profileShowView}>
        <Text style={styles.text}>Name: {userName}</Text>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => handelLogout()}>
          <Text style={styles.textInsideButton}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
