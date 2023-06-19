import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from './Header';
import PlayerCustomComponent from './PlayerCustomComponent'

const PlayerDetail = () => {
  return (
    <View style={styles.mainContainer}>
        <Header/>
        <View style={styles.groundView}>
            <View style={{width:'100%',height:'25%',justifyContent:'center'}}>
               <PlayerCustomComponent/>
            </View>
            <View style={{width:'100%',height:'25%',justifyContent:'space-around' ,flexDirection:'row'}}>
                <PlayerCustomComponent/>
                <PlayerCustomComponent/>
                <PlayerCustomComponent/>
            </View>
            <View style={{width:'100%',height:'25%',justifyContent:'space-evenly' ,flexDirection:'row'}}>
                <PlayerCustomComponent/>
                <PlayerCustomComponent/>
                <PlayerCustomComponent/>
                <PlayerCustomComponent/>
            </View>
            <View style={{width:'100%',height:'25%',justifyContent:'space-around' ,flexDirection:'row'}}>
                <PlayerCustomComponent/>
                <PlayerCustomComponent/>
                <PlayerCustomComponent/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#48AD71'
    },
    groundView:{
        flexDirection:'column',
        justifyContent:'space-between',
        flex:1
    },
})

export default PlayerDetail