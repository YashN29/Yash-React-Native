import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../Store/action';

const UpdateData = ({navigation}) => {

  const dispatch = useDispatch();

  const details = useSelector((store)=> store.data);
  console.log(details)

  const oldName = useSelector((store) => details.name)
  const oldEmail = useSelector((store) => details.email)
  const oldPassword = useSelector((store) => details.password)



  const [name, setName] = useState(oldName);
  const [email, setEmail] = useState(oldEmail);
  const [password, setPassword] = useState(oldPassword);

  const [visible, setvisible] = useState(true)

  const updatedData = () =>{
    dispatch(update(
     {
       name: name,
       email: email,
       password: password
     }
    ));
    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.email}>NAME</Text>
                <TextInput 
                      value={name}
                      style={styles.Input_email}
                      placeholder="Enter Your Name"
                      onChangeText={(actualName)=> (setName(actualName))}
                      placeholderTextColor='grey'
                      selectionColor='#545974'
                      />
     
      <Text style={styles.email}>EMAIL</Text>
              <TextInput 
                    value={email}
                    style={styles.Input_email}
                    placeholder="Enter Your E-mail"
                    onChangeText={(actualEmail)=> (setEmail(actualEmail))}
                    placeholderTextColor='grey'
                    selectionColor='#545974'
                    />

      <Text style={styles.password}>PASSWORD</Text>
          <View style={styles.passInputView}>
            <TextInput  value={password}
                    name="password"
                    autoCorrect={false}
                    style={styles.Input_password}
                    placeholder="* * * * * * *"
                    placeholderTextColor='grey'
                    onChangeText={(actualPassword)=> (setPassword(actualPassword))}
                    selectionColor='#545974'
                    secureTextEntry={visible}
                    /> 
                <TouchableOpacity onPress={()=>{setvisible(!visible)}} 
                    style={styles.eyeImage}>
                  <Image resizeMode="contain" style={{height:24,width:24}} source={require('../../../../icons/vector.png')}/>
                                     
                </TouchableOpacity>
          </View>


          <View style={styles.btn_view}>
              <TouchableOpacity style={{borderRadius:10}} onPress={updatedData} >

                <View style={styles.button}>
                  <Text style={styles.text_inside_btn}>Update</Text>
                </View>

              </TouchableOpacity>
          </View>

    </View>
  )
}

export default UpdateData;