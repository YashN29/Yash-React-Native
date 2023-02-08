import React,{useState} from "react";
import {View,Text,TextInput,Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import custom_style from "./custom_style";


const Feb7=()=>{
     const [count, setCount] = useState(0);
     const onpress = () => setCount(null)

     const [visible, setvisible] = useState(true)

    return(
        <View style={custom_style.mainContainer}>
           
           <View>
                
                <Image style={custom_style.top_logo}
                source={require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/top_vector.png')}></Image>
                
                <Text style={custom_style.Register}>REGISTER</Text>
                
                <Text style={custom_style.text2}>Let’s get you setup with a new account!</Text>
                
                <Text style={custom_style.name}>NAME</Text>
                
                <TextInput style={custom_style.Input_name}
                           placeholder="Yash Nayi"
                           placeholderTextColor='#545974'
                           selectionColor='#545974'/>

                <Text style={custom_style.email}>EMAIL</Text>
                
                <TextInput style={custom_style.Input_email}
                           placeholder="yash@gmail.com"
                           placeholderTextColor='#545974'
                           selectionColor='#545974'/>

                <Text style={custom_style.password}>PASSWORD</Text>

                <View style={custom_style.passInputView}>

                <TextInput  name="password"
                            autoCorrect={false}
                            style={custom_style.Input_password}
                            placeholder="* * * * * * *"
                            placeholderTextColor='#545974'
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
                    <Text style={custom_style.text_login}>LOGIN</Text>
            </View>
            
        </View>
    )
}



export default Feb7;