import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Login = ({navigation}) => {


   const addUser =()=>{
     navigation.navigate('Dashboard');
   }

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
        <TouchableOpacity style={styles.button} onPress={addUser}>
          <Text style={styles.text_inside_btn}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
