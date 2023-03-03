import {
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import database from '@react-native-firebase/database';
import LottieView from 'lottie-react-native';

const Profile = ({navigation, route}) => {
  const userData = route.params;
  console.log(userData);
  const userName = userData[0].name;
  const userEmail = userData[0].email;

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
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

  const handelUpdate = () => {
    database()
      .ref('/Users/' + userName )
      .update({
        name: name,
        email: email,
      })
      .then(() => console.log('Data Updated!'));
  };

  const handleLogout = ()=>{
    database()
      .ref('/Users/' + userName )
      .remove();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainConatainer}>

      <LottieView style={styles.lottieView} source={require('../../../../icons/profile.json')} autoPlay loop/>
      <Text style={styles.name}>NAME</Text>

      <TextInput
        value={name}
        style={styles.Input_name}
        placeholder="Enter Your Name"
        placeholderTextColor="grey"
        selectionColor="#545974"
        onChangeText={actualName => setName(actualName)}
      />

      <Text style={styles.email}>EMAIL</Text>

      <TextInput
        value={email}
        style={styles.Input_email}
        placeholder="Enter Your E-mail"
        onChangeText={actualEmail => {
          setEmail(actualEmail), handleValidEmail(actualEmail);
        }}
        placeholderTextColor="grey"
        selectionColor="#545974"
      />
      {emailValidError ? (
        <Text style={{color: 'red', alignSelf: 'flex-end', marginRight: 15}}>
          {emailValidError}
        </Text>
      ) : null}

      <View style={styles.mainButtonView}>
        <View style={styles.btn_view}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handelUpdate()}>
            <Text style={styles.text_inside_btn}>Update</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btn_view}>
          <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
            <Text style={styles.text_inside_btn}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
