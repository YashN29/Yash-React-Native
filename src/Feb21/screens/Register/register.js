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

const Register = ({navigation}) => {
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

  // useEffect(() => {
  //     getData();
  // }, [])
  // const getData = ()=>{
  //     try {
  //        AsyncStorage.getItem('Email')
  //         .then(value =>{
  //             if(value != null){
  //                 navigation.navigate('Dashboard')
  //             }else{
  //                 navigation.navigate('Register')
  //             }
  //         })
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  //const dispatch = useDispatch();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setvisible] = useState(true);

  //useSelector(store => store.loginDetails);

  const handelRegister = () => {
    if (email == '' || password == '') {
      ToastAndroid.show('Invalid Credentials!', ToastAndroid.SHORT);
    } else {
      if (reg.test(email) === false) {
        ToastAndroid.show('enter valid email!', ToastAndroid.SHORT);
      } else if (reg.test(email) === true) {
        database()
          .ref('Users/' + name)
          .set({
            name: name,
            email: email,
            password: password,
          })
          .then(() => console.log('Data set.'));
        ToastAndroid.show('Successfully Registered!', ToastAndroid.SHORT);
        navigation.navigate('Login', {userName:`${name}`});
      }

      // dispatch(register({email: email, password: password}));
      // navigation.navigate('Dashboard');
      // setEmail('');
      // setPassword('');

      // try {
      //   await AsyncStorage.setItem('Email', email);
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  // useEffect(() => {
  //   const back = () => {
  //     Alert.alert('Logout!', 'Are you sure you want to logout?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Yes',
  //         onPress: () => BackHandler.exitApp(),
  //       },
  //     ]);
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', back);
  //   return () => backHandler.remove();
  // }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity onPress={null}>
            <Image
              style={styles.top_logo}
              source={require('../../../../icons/top_vector.png')}></Image>
          </TouchableOpacity>

          <Text style={styles.Register}>REGISTER</Text>

          <Text style={styles.name}>NAME</Text>

          <TextInput
            value={name}
            style={styles.Input_name}
            placeholder="Enter Your Name"
            onChangeText={actualName => setName(actualName)}
            placeholderTextColor="grey"
            selectionColor="#545974"
          />

          <Text style={styles.email}>EMAIL</Text>

          <TextInput
            value={email}
            style={styles.Input_email}
            placeholder="Enter Your E-mail"
            onChangeText={actualEmail => {
              setEmail(actualEmail);
              handleValidEmail(actualEmail);
            }}
            placeholderTextColor="grey"
            selectionColor="#545974"
          />
          {emailValidError ? (
            <Text
              style={{color: 'red', alignSelf: 'flex-end', marginRight: 15}}>
              {emailValidError}
            </Text>
          ) : null}

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
              onPress={handelRegister}>
              <View style={styles.button}>
                <Text style={styles.text_inside_btn}>Register</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
