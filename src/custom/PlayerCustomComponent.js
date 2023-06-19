import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PlayerCustomComponent = ({isVisible=false}) => {
  return (
    <>
     <View style={styles.imageView}>
        <Image source={{uri:'https://picsum.photos/seed/picsum/200/300'}} style={styles.playerImage}/>
        {isVisible ?  null: (<>
            <Text style={styles.playerPrice}>12 Cr</Text>
        </>)}
        
    </View>
        
   </>
  )
}

const styles = StyleSheet.create({
    playerImage:{
        alignSelf:'center',
        width:'80%',
        height:'80%',
        position:'absolute',
    },
    imageView:{
        width:60,
        height:93,
        alignSelf:'center',
        flexDirection:'column',
        alignItems:'center'
    },
    playerPrice:{
        color:'white',
        fontWeight:'400',
        marginTop:5,
        width:50,
        fontWeight:'600',
        bottom:0,
        textAlign:'center',
        position:'absolute'
    }
})

export default PlayerCustomComponent;