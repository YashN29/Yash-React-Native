import React from "react";
import { StyleSheet,StatusBar } from "react-native";

const dashboard_CSS = StyleSheet.create({

    main_view:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },
    top_logo:{
        width:30,
        height:30,
        marginLeft:21,
        marginTop:27,
        resizeMode:'contain',
        background:'#FF6464'
    },
    welcomeText:{
        fontSize:30,
        color:'#545974',
        marginHorizontal:20,
        marginTop:8,
        fontWeight:'bold'
    },
    mid_view:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:25,
    },
    button: {
        backgroundColor:'#F1F1F1',
        width:150,
        height:150,
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
        width:'95%',
        height:50,
        color:'#545974',
        borderWidth:3,
        borderColor:'#FF6464',
        marginTop:25,
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
        padding:10,
        alignItems:'center',
        borderRadius:20,
        backgroundColor: 'white',
        borderColor:'#F1F1F1',
        marginVertical:8,
        borderWidth: 3
    },
    flatlist_view:{
        flex:1,
        marginTop:10
    },
    item_image:{
        tintColor:'white',
        width:30,
        resizeMode:'contain',
        height:30,
    },
    flatImageView:{
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#545974'
    },
    
})

export default dashboard_CSS;