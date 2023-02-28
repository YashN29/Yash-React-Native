import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../../Store/action';
import LottieView from 'lottie-react-native';

const RegisterData = ({navigation}) => {

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  const [password, setPassword] = useState('');

  const [visible, setvisible] = useState(true);

  const details = useSelector(store => store);
  console.log(details);

  const handleValidEmail = val =>{
    if(val.length === 0){
      setEmailValidError('email address must be enter!');
    }else if (reg.test(val) === false){
      setEmailValidError('enter valid email!')
    }else if(reg.test(val) === true){
      setEmailValidError('');
    }
  };

  const handleRegister = () => {
    if (name == '' || email == '' || password == '') {
      ToastAndroid.show('Please Enter Some Value!', ToastAndroid.SHORT);
    }
    else{
      if(reg.test(email) === false){
        ToastAndroid.show('enter valid email!',ToastAndroid.SHORT);
      }
      else if(email.match(re)){
        dispatch(add({name: name, email: email, password: password}));
      navigation.navigate('Dashboard');
      setName('');
      setEmail('');
      setPassword('');
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <LottieView
        style={{width: 200, alignSelf: 'center'}}
        source={require('../../../../icons/registration.json')}
        autoPlay
        loop
      />
      <Text style={styles.email}>NAME</Text>
      <TextInput
        value={name}
        style={styles.Input_email}
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
        onChangeText={actualEmail => {setEmail(actualEmail)
        handleValidEmail(actualEmail)}} 
        placeholderTextColor="grey"
        selectionColor="#545974"
      />
      {emailValidError ? <Text style={{color:'red',alignSelf:'flex-end',marginRight:15}}>{emailValidError}</Text> : null}

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
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.text_inside_btn}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterData;
