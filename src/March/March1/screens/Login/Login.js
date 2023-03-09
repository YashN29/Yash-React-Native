import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
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

  const loginUser = () => {
    if (email === '' || password === '') {
      ToastAndroid.show('Please enter some value!', ToastAndroid.SHORT);
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Signed in successfully!');
          ToastAndroid.show('Login Successfully!', ToastAndroid.SHORT);
          navigation.navigate('Profile');
          setEmail('');
          setPassword('');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          ToastAndroid.show('Invalid credentials!', ToastAndroid.SHORT);
          console.log(error);
        });
    }
  };

  const registerUser = () => {
    navigation.navigate('Register');
  };
  const signUpwithFacebook = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '512466752037-ed0ivmvuc17hks36coq8tcsec1p2lk4h.apps.googleusercontent.com',
    });
  }, []);
  const signUpwithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      console.log(idToken);
      navigation.navigate('Dashboard');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        Alert.alert(error.toString());
        console.log('===>', error);
      }
    }
  };

  return (
    <View style={styles.mainConatiner}>
      <ScrollView>
        <View style={styles.topView}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.textLoginDesp}>Please Sign in to continue.</Text>
        </View>
        <View style={styles.middelView}>
          <Text style={styles.TextName}>EMAIL</Text>
          <TextInput
            value={email}
            onChangeText={actualEmail => {
              setEmail(actualEmail);
              handleValidEmail(actualEmail);
            }}
            style={styles.Input_email}
            placeholder="E-mail"
            placeholderTextColor="#B9C5D1"
            selectionColor="#545974"
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
            onChangeText={actualPassword => {
              setPassword(actualPassword);
            }}
            style={styles.Input_email}
            placeholder="Password"
            placeholderTextColor="#B9C5D1"
            selectionColor="#545974"
          />
        </View>

        <View style={styles.btn_view}>
          <TouchableOpacity style={styles.button} onPress={loginUser}>
            <Text style={styles.text_inside_btn}>Login</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignSelf: 'center',
          }}>
          <View style={styles.btn_view}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                signUpwithFacebook().then(() => navigation.navigate('Profile'))
              }>
              <Text style={styles.text_inside_btn}>Login With Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btn_view}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => signUpwithGoogle()}>
              <Text style={styles.text_inside_btn}>Sign in With Google</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.text_bottom}>Don't have an account?</Text>

        <TouchableOpacity onPress={registerUser}>
          <Text style={styles.text_login}>REGISTER</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;
