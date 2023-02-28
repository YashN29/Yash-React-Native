import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'white',
    },
    quoteContainer:{
        flex:1,
        margin:10,
        backgroundColor:'white',
        borderRadius:20,
        justifyContent:'center',
        flexDirection:'column',
        borderWidth:3,
        borderColor:'#FF6464'
    },
    quoteText:{
        fontSize:18,
        fontWeight:'bold',
        padding:8,
        color:'#252525',
        textAlign:'center'
    },
    characterText:{
        fontSize:14,
        padding:8,
        fontWeight:'600',
        color:'#252525',
        textAlign:'center'
    },
    animeText:{
        fontSize:12,
        padding:8,
        fontWeight:'500',
        color:'#252525',
        textAlign:'center'
    },
    buttonView:{
        width:'50%',
        alignSelf:'center',
        justifyContent:'center',
        flexDirection:'column',
        borderRadius:10,
        margin:10
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6464',
        borderRadius: 10,
        height:40,
        elevation: 6,
        padding: 10,
    },
    textInsideButton:{
        color:'white',
        fontWeight:'bold',
        alignSelf:'center'
    }
})

export default styles;