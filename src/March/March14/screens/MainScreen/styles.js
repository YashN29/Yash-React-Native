import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#F7F7FA',
    },
    topView:{
        flex:0.50,
        marginHorizontal:5,
        borderRadius:10,
        backgroundColor:'#069CEE',
        marginTop:10
    },
    text:{
        fontSize:20,
        padding:8,
        color:'#F7F7FA'
    },
    btn_view: {
        width: '90%',
        alignSelf:'center',
        marginTop: 50,
        marginHorizontal: 15,
        flexDirection: 'column',
        position:'absolute',
        bottom:30
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00E0C6',
        height: 50,
        borderRadius: 30,
        elevation: 6,
        padding: 10,
      },
      text_inside_btn: {
        color: '#252525',
        alignSelf: 'center',
        fontWeight: 'bold',
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
})

export default styles;