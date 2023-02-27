import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
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
})

export default styles;