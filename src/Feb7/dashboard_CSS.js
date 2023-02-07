import React from "react";
import { StyleSheet,StatusBar } from "react-native";

const dashboard_CSS = StyleSheet.create({

    main_view:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },
    top_logo:{
        tintColor:'red',
        marginLeft:21,
        marginTop:57,
        background:'#FF6464'
    },
    mid_view:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:54,
    },
    button: {
        backgroundColor:'#F1F1F1',
        width:157,
        height:157,
        flexDirection:'column',
        borderRadius:10,
        elevation:6,
        padding: 10,
      },
      text1_inside_btn:{
        color:'#FF6464',
        fontSize:64,
        fontWeight:'bold'
    },
    text2_inside_btn:{
        color:'#545974'
    },
    search:{
        alignSelf:'center',
        width:335,
        height:50,
        color:'#545974',
        borderWidth:3,
        borderColor:'#FF6464',
        marginTop:30,
        paddingLeft:15,
        borderRadius:10,
    },
    text:{
        color:'#545974',
        fontWeight:'bold',
        fontSize:20,
        paddingLeft:15
    
    },
    item:{
        flexDirection:'row',
        width:"100%",
        padding:20,
        padding:15,
        alignItems:'center',
        borderRadius:20,
        backgroundColor: 'white',
        borderColor:'#F1F1F1',
        marginVertical:10,
        borderWidth: 3
    },
    flatlist_view:{
        marginTop:10
    },
    item_image:{
        tintColor:'white',
        width:30,
        height:30,
    },
    flatImageView:{
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#FF6464'
    },
    
})

export default dashboard_CSS;