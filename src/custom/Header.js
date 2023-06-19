import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerView}>
    <View style={styles.closeIconView}>
        <Icon name='close' size={40} color={'white'} style={{alignSelf:'center'}} />
    </View>
    <View style={{justifyContent:'space-evenly',flexDirection:'column',width:'45%',paddingVertical:15,paddingHorizontal:5}}>
        <Text style={{color:'white',fontWeight:'500',fontSize:18}}>Nintendo (T1)</Text>
        <Text style={{color:'white',fontWeight:'500',fontSize:16}}>552 pts</Text>
    </View>
    <View style={{justifyContent:'space-around',flexDirection:'row',width:'40%',paddingVertical:15,paddingHorizontal:5}}>
        <Icon name='pencil' size={25} color={'white'} style={{alignSelf:'center'}} />
        <Icon name='share-social-outline' size={25} color={'white'} style={{alignSelf:'center'}} />
        <Icon name='card-outline' size={25} color={'white'} style={{alignSelf:'center'}} />
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    headerView:{
        width:'100%',
        height:100,
        backgroundColor:'#0F265C',
        flexDirection:'row'
    },
    closeIconView:{
        justifyContent:'center',
        width:'15%',
    },
})

export default Header;