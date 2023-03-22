import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React,{useState} from 'react';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const handleValidEmail = val => {
    if (val.length === 0) {
      setEmailValidError('email address must be enter!');
    } else if (reg.test(val) === false) {
      setEmailValidError('enter valid email!');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  const registerUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Profile');
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.mainConatiner}>
      <ScrollView>
        <View style={styles.topView}>
          <Text style={styles.loginText}>Register</Text>
          <Text style={styles.textLoginDesp}>Please Register to continue.</Text>
        </View>
        <View style={styles.middelView}>
          <Text style={styles.TextName}>EMAIL</Text>
          <TextInput
            value={email}
            style={styles.Input_email}
            placeholder="E-mail"
            placeholderTextColor="#B9C5D1"
            selectionColor="#545974"
            onChangeText={actualEmail => {
              setEmail(actualEmail);
              handleValidEmail(actualEmail);
            }}
          />
          {emailValidError ? (
            <Text
              style={{color: 'red', alignSelf: 'flex-end', marginRight: 15}}>
              {emailValidError}
            </Text>
          ) : null}

          <Text style={styles.TextEmail}>PASSWORD</Text>
          <TextInput
            value={password}
            style={styles.Input_email}
            placeholder="Password"
            placeholderTextColor="#B9C5D1"
            selectionColor="#545974"
            onChangeText={actualPassword => {
              setPassword(actualPassword);
            }}
          />
        </View>

        <View style={styles.btn_view}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => registerUser()}>
            <Text style={styles.text_inside_btn}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
