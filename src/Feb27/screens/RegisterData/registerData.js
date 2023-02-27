import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../../Store/action'

const RegisterData = ({navigation}) => {

  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [visible, setvisible] = useState(true)

  const details = useSelector((store)=> store);
  console.log(details)

  const handleRegister = ()=>{

    if(name == "" || email == "" || password == ""){
      ToastAndroid.show('Please Enter Some Value!',ToastAndroid.SHORT);
    }
    else{
      dispatch(add(
        {name: name,
          email: email,
          password: password}
        ));
      navigation.navigate('Dashboard');
      setName("");
      setEmail("");
      setPassword("");
    }
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
              <TouchableOpacity style={{borderRadius:10}} onPress={handleRegister} >

                <View style={styles.button}>
                  <Text style={styles.text_inside_btn}>Register</Text>
                </View>

              </TouchableOpacity>
          </View>

    </View>
  )
}

export default RegisterData;