import { View, Text, StyleSheet, TouchableOpacity, Image, PermissionsAndroid, ActivityIndicator, Alert, Share } from 'react-native'
import React,{useState} from 'react'
import RNFS from 'react-native-fs';

const PlayerCard = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.backgroundContainer}>
        <View style={styles.buttonContainer}>
            <View style={{flexDirection:'row', marginTop:20,marginHorizontal:20, justifyContent:'space-between'}}>
                <Text style={{color:'#6AAAC2'}}>Prize Pool</Text>
                <Text style={{color:'#6AAAC2'}}>Entry</Text>
            </View>
            <View style={{flexDirection:'row', paddingHorizontal:20,marginTop:15, justifyContent:'space-between'}}>
                <Text style={{color:'black',fontWeight:'700', fontSize:22}}>₹1.20 Crores</Text>
                <TouchableOpacity style={{backgroundColor:'black',width:120,height:40,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>₹49</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center',width:'88%',backgroundColor:'white',height:8,borderRadius:10,marginTop:10}}/>
            <View style={{height:5}}/>
                <View style={{flexDirection:'row', paddingHorizontal:22, justifyContent:'space-between'}}>
                    <Text style={{color:'#6A1F20',fontWeight:'400'}}>3,02,985 spots left</Text>
                    <Text style={{color:'#6AAAC2'}}>4,00,0000 spots</Text>
                </View>
            <View style={{height:10}}/>
            <View style={{height:1,backgroundColor:'#6AAAC2',width:'100%',alignSelf:'center'}}/>
        <View style={{flexDirection:'row', marginTop:15,marginHorizontal:20, justifyContent:'space-between',alignSelf:'center',width:'90%'}}>
            <View style={{justifyContent:'space-around',flexDirection:'row',width:'65%'}}>
                <View style={{flexDirection:'row'}}>
                    <Image/>
                    <Text style={{color:'black'}}>₹5,00,000</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Image/>
                    <Text style={{color:'black'}}>58%</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Image/>
                    <Text style={{color:'black'}}>₹5,00,000</Text>
                </View>
            </View>
            <View>
                <Text style={{color:'#1A9B4F'}}>Guarenteed</Text>
            </View>
        </View>
      </View>
      <Text style={{color:'white',marginLeft:20,marginTop:10}}>Joined Once</Text>
    </View>
   
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column'
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
        height:250,
        alignSelf:'center',
        borderRadius:20
    }
})

export default PlayerCard;