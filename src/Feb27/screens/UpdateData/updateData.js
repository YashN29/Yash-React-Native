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
import {update, deleteData} from '../../Store/action';

const UpdateData = ({navigation, route}) => {
  const dispatch = useDispatch();

  const itemIndex = route.params.index;
  console.log(itemIndex);

  const oldName = useSelector(store => store.data[itemIndex].name);
  const oldEmail = useSelector(store => store.data[itemIndex].email);
  const oldPassword = useSelector(store => store.data[itemIndex].password);

  const oldData = useSelector(store => store.data);

  const [name, setName] = useState(oldName);
  const [email, setEmail] = useState(oldEmail);
  const [password, setPassword] = useState(oldPassword);

  const [visible, setvisible] = useState(true);

  const updatedData = () => {
    if (name == '' || email == '' || password == '') {
      ToastAndroid.show('Please Enter Some Value!', ToastAndroid.SHORT);
    } else {
      if (oldName !== name || oldEmail !== email || oldPassword !== password) {
        let x = JSON.parse(JSON.stringify(oldData));
        //let x = (oldData);
        x[itemIndex].name = name;
        x[itemIndex].email = email;
        x[itemIndex].password = password;
        console.log(x);
        dispatch(update(x));

        navigation.navigate('Dashboard');
        console.log('done');
      } else {
        console.log('failed');
        navigation.navigate('Dashboard');
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
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
        <TouchableOpacity style={styles.button} onPress={() => updatedData()}>
          <Text style={styles.text_inside_btn}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateData;
