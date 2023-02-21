import React,{useRef, useState} from "react";
import {View,Text,TextInput,Image, TouchableHighlight, TouchableOpacity, ScrollView, ToastAndroid} from 'react-native';
import styles from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Store/action";

const Register=({navigation})=>{

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    useSelector((store) => {store});

    const handelRegister =()=>{
        
        if(email == "" || password == ""){
            ToastAndroid.show('Invalid Credentials!',ToastAndroid.SHORT);
           
        }else{
            dispatch(register(
                {email: email,
                password: password,}));
            navigation.navigate("Dashboard");
            setEmail("")
            setPassword("")
            
              
            
        }
    }
      

     const [visible, setvisible] = useState(true)

    return(
        <View style={styles.mainContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>

            <View>
                
                <TouchableOpacity onPress={null}>
                    <Image style={styles.top_logo}
                    source={require('../../../../icons/top_vector.png')}></Image>
                </TouchableOpacity>
                
                <Text style={styles.Register}>LOGIN</Text>
                
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
                    
                    <TouchableHighlight style={{borderRadius:10}} onPress={handelRegister}>

                    <View style={styles.button}>
                        <Text style={styles.text_inside_btn}>Login</Text>
                    </View>

                    </TouchableHighlight>

                </View>
                
            </View>

            </ScrollView>
           
           
            
        </View>
    )
}



export default Register;