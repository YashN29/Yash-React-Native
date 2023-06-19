import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerCustomComponent from '../custom/PlayerCustomComponent'

const playerCard = () => {

    const renderCompo = ()=>{
        return(
            <>
        <View style={styles.cardView}>
            <View style={styles.topView}>
                <View style={{alignSelf:'center',width:'50%',height:'100%',padding:20}}>
                    <Text style={styles.playerName}>nintendo.. (T1)</Text>
                </View>
                <View style={styles.iconView}>
                    <Icon name='pencil' size={20} color={'white'} style={{alignSelf:'center'}} />
                    <Icon name='card-outline' size={20} color={'white'} style={{alignSelf:'center'}} />
                    <Icon name='copy-outline' size={20} color={'white'} style={{alignSelf:'center'}} />
                    <Icon name='share-social-outline' size={20} color={'white'} style={{alignSelf:'center'}} />
                </View>
            </View>
            <View style={styles.bottomView}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'40%',height:'70%',paddingTop:30,paddingHorizontal:25,flexDirection:'row',justifyContent:'space-around'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:16,fontWeight:'400'}}>IND</Text>
                            <Text style={{color:'white',fontSize:20,fontWeight:'900',marginTop:5}}>6</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:16,fontWeight:'400'}}>AUS</Text>
                            <Text style={{color:'white',fontSize:20,fontWeight:'900',marginTop:5}}>5</Text>
                        </View>
                    </View>
                    <View style={{width:'60%',height:'70%',paddingTop:45,paddingHorizontal:20,flexDirection:'row',justifyContent:'space-around'}}>
                        <PlayerCustomComponent isVisible={true}/>
                        <PlayerCustomComponent isVisible={true}/>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:50}}>
                    <Text style={{fontSize:16,color:'#F7F7FA',fontWeight:'400'}}>WK <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>1</Text></Text>
                    <Text style={{fontSize:16,color:'#F7F7FA',fontWeight:'400'}}>BAT <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>1</Text></Text>
                    <Text style={{fontSize:16,color:'#F7F7FA',fontWeight:'400'}}>AR <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>1</Text></Text>
                    <Text style={{fontSize:16,color:'#F7F7FA',fontWeight:'400'}}>BOWL <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>1</Text></Text>
                </View>
            </View>
        </View>
            </>
        )
    }


  return (
    <>
        <FlatList style={{marginHorizontal:15}} renderItem={renderCompo} data={[1,1,1,1,1,1]}/> 
    </>
  )
}

const styles = StyleSheet.create({
    cardView:{
        flexDirection:'column',
        width:'100%',
        height:222,
        marginTop:25,
        alignSelf:'center',
    },
    topView:{
        height:60,
        backgroundColor:'#31794F',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bottomView:{
        height:180,
        backgroundColor:'#48AD71',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'space-between',
        flexDirection:'column',
    },
    playerName:{
        color:'white',
        fontSize:16
    },
    iconView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'50%',
        height:'100%',
    }
})

export default playerCard;