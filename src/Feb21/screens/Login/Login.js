import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  BackHandler,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../Store/action';
import database from '@react-native-firebase/database';

const Login = ({navigation}) => {
  const [oldEmail, setoldEmail] = useState('');
  const [oldPassword, setoldPassword] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [visible, setvisible] = useState(true);

  const handelLogin = () => {
    if (email == '' || password == '') {
      ToastAndroid.show('Please enter details!', ToastAndroid.SHORT);
    } else {
      database()
        .ref('/Users')
        .once('value')
        .then(snapshot => {
          const data = Object.values(snapshot.val());
          const isUser = data.forEach(x => {
            setoldEmail(x.email);
            setoldPassword(x.password);

            return x.email === email && x.password === password;
          });
          if (oldEmail == email || oldPassword == password) {
            ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
            navigation.navigate('DashboardNavigation');
            setEmail('');
            setPassword('');
          } else {
            ToastAndroid.show('Invalid credentials!', ToastAndroid.SHORT);
          }
        });
    }
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity onPress={null}>
            <Image
              style={styles.top_logo}
              source={require('../../../../icons/top_vector.png')}></Image>
          </TouchableOpacity>

          <Text style={styles.Register}>LOGIN</Text>

          <Text style={styles.email}>EMAIL</Text>

          <TextInput
            value={email}
            style={styles.Input_email}
            placeholder="Enter Your E-mail"
            onChangeText={actualEmail => setEmail(actualEmail)}
            placeholderTextColor="grey"
            selectionColor="#545974"
          />

          <Text style={styles.password}>PASSWORD</Text>

          <View style={styles.passInputView}>
            <TextInput
              value={password}
              name="password"
              autoCorrect={false}
              style={styles.Input_password}
              placeholder="* * * * * * *"
              placeholderTextColor="grey"
              onChangeText={actualPassword => setPassword(actualPassword)}
              selectionColor="#545974"
              secureTextEntry={visible}
            />

            <TouchableOpacity
              onPress={() => {
                setvisible(!visible);
              }}
              style={styles.eyeImage}>
              <Image
                resizeMode="contain"
                style={{height: 24, width: 24}}
                source={require('../../../../icons/vector.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.btn_view}>
            <TouchableHighlight
              style={{borderRadius: 10}}
              onPress={handelLogin}>
              <View style={styles.button}>
                <Text style={styles.text_inside_btn}>Login</Text>
              </View>
            </TouchableHighlight>
          </View>

          <Text style={styles.text_bottom}>Don't have an account?</Text>

          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.text_login}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
