import React from "react";
import {Alert, Button, View, StyleSheet} from 'react-native';

const Feb8 = () =>{

    const button1 = ()=>{

        Alert.alert('Exit?','Are you sure you want to exit?', [
            {
                text: 'Cancel',
                onPress: ()=> console.log('Cancel Pressed!'),
                style: 'cancel'
            },
            {
                text :'OK',
                onPress:()=> console.log("Ok Pressed!")
            }
        ],
        {
            cancelable: true,
            onDismiss: ()=> Alert.alert('This alert was dismissed by tapping outside of the alert dialog.')
        })
    }

    const button2 = ()=>{

        Alert.alert('Exit?','Are you sure you want to exit?',
        [
            {
                text:'Ask me later',
                onPress: ()=> console.log('Ask me later pressed!')
            },
            {
                text: 'Cancel',
                onPress: ()=> console.log('Cancel Pressed!'),
                style: 'cancel'
            },
            {
                text :'OK',
                onPress:()=> console.log("Ok Pressed!")
            }
        ])
    }


    return(
        <View style={Css.mainContainer}>
            <Button title="Button-1" onPress={button1}/>

            <Button title="Button-2" onPress={button2}/>
        </View>
    )
}

const Css = StyleSheet.create({

    mainContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    }
})

export default Feb8;