import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#069CEE'
    },
    btn_view:{
        alignSelf:'flex-end',
        width:50,
        height:50,
        margin:10
    },
    button: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#FF6464',
        borderRadius:60,
        elevation:6,
        padding: 10,
      },
    text_inside_btn:{
        color:'white',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20
    },
    dataView:{
        margin:5,
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        margin:8
    },
    flatListView:{
        flexDirection:'row',
        alignSelf:'center',
        marginHorizontal:20,
        width:'95%',
        margin:15,
        justifyContent:'space-between',
        borderColor:'#F1F1F1',
        borderRadius:10,
        borderWidth:2,
    },
    eyeImage:{
        alignSelf:'center',
        marginRight:20,
    },

})

export default styles;