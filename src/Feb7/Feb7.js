import { NavigationContainer } from "@react-navigation/native";
import React,{useState} from "react";
import {View,Text,TextInput,Image, TouchableHighlight, TouchableOpacity, ScrollView, Pressable, ToastAndroid} from 'react-native';
import custom_style from "./custom_style";

const Feb7=({navigation})=>{
    
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("") 

     const onpress = () => {
         if(userName.length >= 9 && userEmail.length >= 12){
            navigation.navigate("Dashboard", {myName : `${userName}`});
        }else{
            ToastAndroid.show('Invalid Credentials!',ToastAndroid.SHORT);
        }
         }
         
         
         

     const [visible, setvisible] = useState(true)

    return(
        <View style={custom_style.mainContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>

            <View>
                
                <TouchableOpacity onPress={null}>
                    <Image style={custom_style.top_logo}
                    source={require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/top_vector.png')}></Image>
                </TouchableOpacity>
                
                <Text style={custom_style.Register}>REGISTER</Text>
                
                <Text style={custom_style.text2}>Let’s get you setup with a new account!</Text>
                
                <Text style={custom_style.name}>NAME</Text>
                
                <TextInput style={custom_style.Input_name}
                           placeholder="Enter Your Name"
                           placeholderTextColor='grey'
                           value={userName}
                           onChangeText={(actualData) => setUserName(actualData)}
                           selectionColor='#545974'/>

                <Text style={custom_style.email}>EMAIL</Text>
                
                <TextInput style={custom_style.Input_email}
                           placeholder="Enter Your E-mail"
                           value={userEmail}
                           onChangeText={(actualData)=> setUserEmail(actualData)}
                           placeholderTextColor='grey'
                           selectionColor='#545974'/>

                <Text style={custom_style.password}>PASSWORD</Text>

                <View style={custom_style.passInputView}>

                <TextInput  name="password"
                            autoCorrect={false}
                            style={custom_style.Input_password}
                            placeholder="* * * * * * *"
                            placeholderTextColor='grey'
                            selectionColor='#545974'
                            secureTextEntry={visible}
                            />
                    
                    <TouchableOpacity onPress={()=>{setvisible(!visible)}} 
                    style={custom_style.eyeImage}>
                            <Image resizeMode="contain" style={{height:24,width:24}} source={require('../../icons/vector.png')}/>
                                     
                    </TouchableOpacity>

                </View>

                <View style={custom_style.btn_view}>
                    
                    <TouchableHighlight style={{borderRadius:10}} onPress={onpress}>

                    <View style={custom_style.button}>
                        <Text style={custom_style.text_inside_btn}>REGISTER</Text>
                    </View>

                    </TouchableHighlight>

                </View>
                
                    <Text style={custom_style.text_bottom}>Already have an account?</Text>
                    
                    <TouchableOpacity>
                    <Text style={custom_style.text_login}>LOGIN</Text>
                    </TouchableOpacity>
                    
            </View>

            </ScrollView>
           
           
            
        </View>
    )
}



export default Feb7;