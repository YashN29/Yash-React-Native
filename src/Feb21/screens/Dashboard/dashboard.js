import React,{useState,useEffect} from "react";
import {View,Text, TouchableOpacity, Alert, BackHandler, ToastAndroid} from 'react-native';
import styles from "./styles";
import { logout } from "../../Store/action";
import { useDispatch } from "react-redux";

const Dashboard =({navigation})=>{
    const dispatch = useDispatch();

    const handelLogout =()=>{ 
        navigation.navigate("Register");
        dispatch(logout(
            {email: '',
            password: ''}
            ));
        }
    

    useEffect(()=>{
        const back =()=>{
            Alert.alert('Logout!','Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress:()=> null,
                    style:'cancel'
                },
                {
                    text:'Yes',
                    onPress:()=> BackHandler.exitApp()
                }
            ]);
            return true;
        };
            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                back,
            );
            return ()=> backHandler.remove();
    },[]);
    

    return(

        <View style={styles.main_view}>

            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{borderRadius:10}} onPress={handelLogout}>

                <View style={styles.button_logout}>
                    <Text style={styles.text_inside_btn}>Logout</Text>
                </View>

                </TouchableOpacity>
            </View>
    
        </View>
    )
}

export default Dashboard;




{/* <Text style={styles.welcomeText}>Welcome, {myName} </Text> */}