import React from "react";
import { StyleSheet } from "react-native";

const Feb8_CSS = StyleSheet.create({

    // mainContainer:{
    //     flex:1,
    //     flexDirection:'column',
    //     justifyContent:'space-around',
    //     alignItems:'center'
    // }

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    faddingContainer:{
        padding:20,
        backgroundColor:'green',
        borderRadius:10,
        elevation:6
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
    button_view:{
        flexBasis:100,
        marginTop:50,
        justifyContent:'space-evenly'
    }
})

export default Feb8_CSS;