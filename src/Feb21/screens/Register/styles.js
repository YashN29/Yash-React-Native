import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },
    Register:{
        width:260,
        height:77,
        marginTop:20,
        marginLeft:20,
        fontStyle:'normal',
        alignItems:'center',
        fontWeight:'bold',
        fontSize:55,
        color:'#545974'
    },
    text2:{
        width:250,
        height:18,
        fontSize:14,
        marginLeft:20,
        fontStyle:'normal',
        alignItems:'center',
        color:'#BABABA'
    },
    name:{
        marginLeft:20,
        height:10,
        fontSize:10,
        color:'#545974',
        lineHeight:12,
        marginTop:50,
        fontStyle:'normal',
        fontWeight:'bold'
    },
    top_logo:{
        width:30,
        height:30,
        resizeMode:'contain',
        marginLeft:21,
        marginTop:30,
        background:'#FF6464'
    },
    Input_name:{
        alignSelf:'center',
        width:'95%',
        height:50,
        borderWidth:2,
        marginTop:5,
        paddingLeft:15,
        color:'#545974',
        borderColor:'#F1F1F1',
        borderRadius:10,
    },
    email:{
        marginLeft:20,
        height:10,
        fontSize:10,
        color:'#545974',
        lineHeight:12,
        marginTop:25,
        fontStyle:'normal',
        fontWeight:'bold'
    },
    Input_email:{
        alignSelf:'center',
        width:'95%',
        height:50,
        color:'#545974',
        borderWidth:2,
        marginTop:5,
        paddingLeft:15,
        borderColor:'#F1F1F1',
        borderRadius:10,
    },
    password:{
        marginLeft:20,
        height:10,
        fontSize:10,
        color:'#545974',
        lineHeight:12,
        marginTop:25,
        fontStyle:'normal',
        fontWeight:'bold'
    },
    btn_view:{
        justifyContent:'center',
        width:'95%',
        height:45,
        alignSelf:'center',
        marginTop:30,
        marginHorizontal:20,
        flexDirection:'column',
    },
    button: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#FF6464',
        borderRadius:10,
        elevation:6,
        padding: 10,
      },
    text_inside_btn:{
        color:'white',
        alignSelf:'center',
        fontWeight:'bold'
    },
    text_bottom:{
        color:'#545974',
        alignSelf:'center',
        width:170,
        marginTop:20
    },
    text_login:{
        alignSelf:'center',
        fontWeight:'bold',
        marginTop:5,
        textDecorationLine:'underline',
        color:'#FF6464'
    },
    passInputView:{
        flexDirection:'row',
        alignSelf:'center',
        marginHorizontal:20,
        width:'95%',
        height:50,
        marginTop:5,
        justifyContent:'center',
        borderColor:'#F1F1F1',
        borderRadius:10,
        borderWidth:2,
    },
    eyeImage:{
        alignSelf:'center',
        marginRight:50,
    },
    Input_password:{
        alignSelf:'center',
        width:'98%',
        paddingLeft:50,  
    },
    
})

export default styles;