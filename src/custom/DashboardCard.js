import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const DashboardCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <View style={{flexDirection:'row', marginTop:20,marginHorizontal:25, justifyContent:'space-between'}}>
            <Text style={{color:'#878787'}}>India vs Australia T20</Text>
            <Text>Bell Icon</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:20,marginHorizontal:25, justifyContent:'space-between'}}>
            <Text style={{color:'black',fontSize:16}}>India</Text>
            <Text style={{color:'black',fontSize:16}}>Australia</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:22,marginHorizontal:25}}>
            <View>
                <Image/>
                <Text style={{color:'black',fontSize:20,fontWeight:'600'}}>IND</Text>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text style={{textAlign:'center',color:'red',fontWeight:'900',fontSize:16}}>5h 20m</Text>
                <Text style={{textAlign:'center'}}>Today, 6:30pm</Text>
            </View>
            <View>
                <Text style={{color:'black',fontSize:20,fontWeight:'600'}}>AUS</Text>
                <Image/>
            </View>
        </View>
        <View style={{height:2,backgroundColor:'white',width:'100%',alignSelf:'center',marginTop:15}}/>
        <View style={{flexDirection:'row', marginTop:15,marginHorizontal:20, justifyContent:'space-between',alignSelf:'center',width:'90%'}}>
            <View style={{flexDirection:'row',width:'65%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#1A9B4F',width:55,height:25,backgroundColor:'white',textAlign:'center',borderRadius:15,textAlignVertical:'center'}}>MEGA</Text>
                    <Text style={{color:'black',textAlign:'center',textAlignVertical:'center',marginLeft:12,fontSize:16,fontWeight:'800'}}>₹5 Lakh</Text>
                </View>
            </View>
            <View>
                <Text>Announcement</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column'
    },
    buttonContainer:{
        height:220,
        width:'92%',
        height:220,
        backgroundColor:'#F3F3F3',
        borderRadius:20,
        alignSelf:'center',
        shadowOpacity:10,
        marginVertical:100,
        alignSelf:'center',
    },
})

export default DashboardCard