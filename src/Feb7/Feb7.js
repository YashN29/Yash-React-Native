import React,{useState} from "react";
import {View,Text,TextInput,Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import custom_style from "./custom_style";

    

const Feb7 =()=>{

    const [count, setCount] = useState(0);
    const onPress = () => setCount(null);

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

                <KeyboardAvoidingView behavior={"padding"}>

                <TextInput inlineImageLeft="vector"
                            inlineImagePadding={2}
                            style={custom_style.Input_password}
                            placeholder="* * * * * * *"
                            placeholderTextColor='#545974'
                            selectionColor='#545974'
                            secureTextEntry={true}
                            />

                </KeyboardAvoidingView>
                
                <View style={custom_style.btn_view}>
                    
                    <TouchableHighlight onPress={onPress}>

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