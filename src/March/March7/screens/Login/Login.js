import {View, Text, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [phonenumber, setphonenumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const signIn = async () => {
    if(phonenumber === "" || phonenumber === null){
      ToastAndroid.show('Please enter valid phone number!')
    }else{
    const confirmation = await auth().signInWithPhoneNumber(
      '+91' + phonenumber,
    );
    setConfirm(confirmation);
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      console.log('Success!');
      navigation.navigate('Dashboard');
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  if (!confirm) {
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
            style={styles.inputPhone}
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
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.text_inside_btn}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.mainConatiner}>
      <LottieView
        style={{width: 200, height: 200, alignSelf: 'center'}}
        source={require('../../../../../icons/otp.json')}
        autoPlay
        loop
      />

      <View style={styles.topView}>
        <Text style={styles.loginText}>Verify +91-{phonenumber}</Text>
        <Text style={styles.textLoginDesp}>
          Enter the OTP to verify your phonenumber.
        </Text>
      </View>
      <View style={styles.middelView}>
        <Text style={styles.TextOtp}>OTP</Text>
        <TextInput
          value={code}
          style={styles.inputOtp}
          placeholder="Enter the 6-digit OTP"
          placeholderTextColor="#B9C5D1"
          selectionColor="#545974"
          keyboardType="phone-pad"
          onChangeText={actualOtp => {
            setCode(actualOtp);
          }}
          maxLength={6}
        />
      </View>
      <View style={styles.btn_view}>
        <TouchableOpacity style={styles.button} onPress={() => confirmCode()}>
          <Text style={styles.text_inside_btn}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;