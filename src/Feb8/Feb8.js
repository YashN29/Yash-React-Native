import React,{useRef} from "react";
import {Alert, Animated, Button, View, Text} from 'react-native';
import Feb8_CSS from "./Feb8_CSS";

const Feb8 = () =>{

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = ()=>{
        Animated.timing(fadeAnim, {
            toValue:1,
            duration:2500,
            useNativeDriver:true
        }).start();
    }

    const fadeOut =()=>{
        Animated.timing(fadeAnim, {
            toValue:0,
            duration:1500,
            useNativeDriver:true
        }).start();
    }

    // const button1 = ()=>{
    //     Alert.alert('Exit?','Are you sure you want to exit?', [
    //         {
    //             text: 'Cancel',
    //             onPress: ()=> console.log('Cancel Pressed!'),
    //             style: 'cancel'
    //         },
    //         {
    //             text :'OK',
    //             onPress:()=> console.log("Ok Pressed!")
    //         }
    //     ],
    //     {
    //         cancelable: true,
    //         onDismiss: ()=> Alert.alert('This alert was dismissed by tapping outside of the alert dialog.')
    //     })
    // }
    // const button2 = ()=>{
    //     Alert.alert('Exit?','Are you sure you want to exit?',
    //     [
    //         {
    //             text:'Ask me later',
    //             onPress: ()=> console.log('Ask me later pressed!')
    //         },
    //         {
    //             text: 'Cancel',
    //             onPress: ()=> console.log('Cancel Pressed!'),
    //             style: 'cancel'
    //         },
    //         {
    //             text :'OK',
    //             onPress:()=> console.log("Ok Pressed!")
    //         }
    //     ])
    // }


    return(
            <View style={Feb8_CSS.container}>
                <Animated.View style={[Feb8_CSS.faddingContainer,{opacity:fadeAnim}]}>
                        <Text style={Feb8_CSS.text}>Welcome!</Text>
                </Animated.View>

                <View style={Feb8_CSS.button_view}>
                    <Button title="View" onPress={fadeIn}/>
                    <Button title="Dissappear" onPress={fadeOut}/>
                </View>
            </View>

        // <View style={Feb8_CSS.mainContainer}>
        //     <Button title="Button-1" onPress={button1}/>

        //     <Button title="Button-2" onPress={button2}/>
        // </View>
    )
}

export default Feb8;