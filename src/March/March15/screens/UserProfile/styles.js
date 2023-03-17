import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        alignItems:'flex-start',
    },
    profileImage:{
        width:120,
        height:120,
        borderRadius:60,
        backgroundColor:'#F7F7FA',
        margin:30
      },
      userName:{
        width:'90%',
        fontSize:16,
        backgroundColor:'#F7F7FA',
        color:'#252525',
        marginTop:20,
        alignSelf:'center',
        padding:10,
        borderRadius:10
      }
 })

 export default styles;