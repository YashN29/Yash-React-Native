import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
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
      <View style={styles.topView}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.textLoginDesp}>Please Sign in to continue.</Text>
      </View>
      <View style={styles.middelView}>
        <Text style={styles.TextName}>EMAIL</Text>
        <TextInput
          style={styles.Input_email}
          placeholder="E-mail"
          placeholderTextColor="#B9C5D1"
          selectionColor="#545974"
        />

        <Text style={styles.TextEmail}>PASSWORD</Text>
        <TextInput
          style={styles.Input_email}
          placeholder="Password"
          placeholderTextColor="#B9C5D1"
          selectionColor="#545974"
        />
      </View>
      <View style={styles.btn_view}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            signUpwithFacebook().then(() => navigation.navigate('Dashboard'))
          }>
          <Text style={styles.text_inside_btn}>Login With Facebook</Text>
        </TouchableOpacity>
      </View>

      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signUpwithGoogle()}
      />
    </View>
  );
};

export default Login;
