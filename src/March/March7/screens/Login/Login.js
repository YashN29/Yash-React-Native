import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [phonenumber, setphonenumber] = useState('');

  const getOtp = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        '+91' + phonenumber,
      );
      console.log(confirmation);
      navigation.navigate(
        'Authenticate',
        [`${phonenumber}`,
        `${confirmation}`]
      );
      setphonenumber('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainConatiner}>
      <LottieView
        style={{width: 200, height: 200, alignSelf: 'center'}}
        source={require('../../../../../icons/otp.json')}
        autoPlay
        loop
      />

      <View style={styles.topView}>
        <Text style={styles.loginText}>Verify your phone number</Text>
        <Text style={styles.textLoginDesp}>
          We will send a SMS to verify your phone number.
        </Text>
      </View>
      <View style={styles.middelView}>
        <Text style={styles.TextOtp}>Phone number</Text>
        <TextInput
          value={phonenumber}
          style={styles.inputOtp}
          placeholder="Enter your phone number"
          placeholderTextColor="#B9C5D1"
          selectionColor="#545974"
          keyboardType="phone-pad"
          onChangeText={actualPhoneNumber => {
            setphonenumber(actualPhoneNumber);
          }}
          maxLength={10}
        />
      </View>
      <View style={styles.btn_view}>
        <TouchableOpacity style={styles.button} onPress={getOtp}>
          <Text style={styles.text_inside_btn}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
