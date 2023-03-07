import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        alignItems:'flex-start',
    },
    btn_view: {
        width: '90%',
        alignSelf:'center',
        position:'absolute',
        bottom:50,
        marginTop: 50,
        marginHorizontal: 15,
        flexDirection: 'column',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00E0C6',
        height: 45,
        borderRadius: 30,
        elevation: 6,
        padding: 10,
      },
      text_inside_btn: {
        color: '#F7F7FA',
        alignSelf: 'center',
        fontWeight: 'bold',
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
        fontSize:20,
        backgroundColor:'#F7F7FA',
        color:'#252525',
        marginTop:30,
        alignSelf:'center',
        padding:10,
        borderRadius:10
      }
})

export default styles;