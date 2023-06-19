import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CustomProp = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.backgroundContainer}>
    <View style={styles.buttonContainer}>
        <View style={{flexDirection:'row',padding:20, justifyContent:'space-between',marginHorizontal:5}}>
            <Text style={{color:'#000000',fontSize:18,fontWeight:'600'}}>Practice Contest</Text>
            <Text style={{color:'#000000',fontSize:14}}>3 Spots</Text>
        </View>
        <View style={{height:1,backgroundColor:'#6AAAC2',width:'100%',alignSelf:'center'}}/>
        <View style={{flexDirection:'row', padding:18, justifyContent:'space-between',alignSelf:'center',width:'100%',marginHorizontal:5}}>
        <View style={{justifyContent:'space-around',flexDirection:'row',width:'65%'}}>
            <View style={{flexDirection:'row'}}>
                <Image/>
                <Text style={{color:'black'}}>Glory awaits!</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image/>
                <Text style={{color:'black'}}>Single</Text>
            </View>
        </View>
        <View>
            <Text style={{color:'#1A9B4F'}}>Guarenteed</Text>
        </View>
    </View>
    <View style={{height:1,backgroundColor:'#6AAAC2',width:'100%',alignSelf:'center'}}/>
        <View style={{flexDirection:'row', padding:18, justifyContent:'space-between',alignSelf:'center',width:'100%',marginHorizontal:5}}>
            <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                <Text style={{color:'#000000',fontSize:16,fontWeight:'500'}}>nintendo</Text>
                <Text style={{color:'#1A9B4F',fontWeight:'500'}}>In winning zone</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Image/>
                <Text style={{color:'#000000',fontSize:16}}>489</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#000000',fontWeight:'bold',fontSize:16}}>#2</Text>  
            </View>
        </View>
  
  </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',alignSelf:'center',width:'90%',marginVertical:5}}>
            <Text style={{color:'white',marginTop:10}}>Ready to win again?</Text>
            <Text style={{color:'white',marginTop:10}}>Joined Once</Text>
        </View>
  
</View>

</View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        marginTop:100
    },
    buttonContainer:{
        height:220,
        width:'100%',
        height:200,
        backgroundColor:'#E1F3FE',
        borderRadius:20,
        alignSelf:'center',
    },
    backgroundContainer:{
        backgroundColor:'#6AAAC2', 
        width:'92%',
        height:260,
        alignSelf:'center',
        borderRadius:20
    }
})

export default CustomProp;