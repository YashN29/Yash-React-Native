import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';

const Authenticate = ({navigation, route}) => {
  const [otp, setOtp] = useState('');

  const phonenumber = route.params[0];
  const confirmation = route.params[1];
  console.log(confirmation);

  const verifyOtp = async otp => {
    try {
      await confirmation.confirm(otp);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.log(confirmation);
      alert('Invalid code');
    }
  };
  return (
    <View style={styles.mainContainer}>
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
          value={otp}
          style={styles.inputOtp}
          placeholder="Enter the 6-digit OTP"
          placeholderTextColor="#B9C5D1"
          selectionColor="#545974"
          keyboardType="phone-pad"
          onChangeText={actualOtp => {
            setOtp(actualOtp);
          }}
          maxLength={6}
        />
      </View>
      <View style={styles.btn_view}>
        <TouchableOpacity style={styles.button} onPress={verifyOtp}>
          <Text style={styles.text_inside_btn}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authenticate;
