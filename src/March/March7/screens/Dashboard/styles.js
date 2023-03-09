import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor: '#1D2038',
        alignItems: 'flex-start',
    },
    btn_view: {
        width: '60%',
        alignSelf:'center',
        marginTop: 50,
        marginHorizontal: 15,
        flexDirection: 'column',
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
})

export default styles;