import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const Login = ({navigation}) => {
  const [exitApp, setexitApp] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [visible, setvisible] = useState(true);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem('Email').then(value => {
        if (value != null) {
          navigation.navigate('Profile');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handelLogin = () => {
    if (email == '' || password == '') {
      ToastAndroid.show('Please enter details!', ToastAndroid.SHORT);
    } else {
      database()
        .ref('/Users/' + name)
        .once('value')
        .then(snapshot => {
          const data = Object.values(snapshot.val());
          const isUser = data.filter(x => {
            //setoldEmail(x.email);
            // setoldPassword(x.password);
            //setName(x.name);
            console.log(x);
            return x.email === email && x.password === password;
          });
          if (isUser.length > 0) {
            ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
            navigation.navigate('Profile', data);
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
    <SafeAreaView style={styles.mainContainer}>
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => handelLogin()}>
              <Text style={styles.text_inside_btn}>Login</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text_bottom}>Don't have an account?</Text>

          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.text_login}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
