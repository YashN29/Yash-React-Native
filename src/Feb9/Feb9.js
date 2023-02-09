import React, {useEffect,useRef,useState} from "react";
import {View, Animated, AppState, Text, Keyboard, TextInput, ScrollView} from 'react-native';
import Feb9_CSS from "./Feb9_CSS";


const Feb9 =()=>{

//    const [keyboardStatus, setkeyboardStatus] = useState('');

//    useEffect(()=>{
//        const showSubscription = Keyboard.addListener('keyboardDidShow',()=>{
//            setkeyboardStatus('Keyboard Shown');
//        });
//        const hideSubscription = Keyboard.addListener('keyboardDidHide',()=>{
//            setkeyboardStatus('Keyboard Hidden');
//        });
//        return()=>{
//            showSubscription.remove();
//            hideSubscription.remove();
//        };
//    })
    
    return(
        
        <View style={Feb9_CSS.container}>

            <ScrollView contentContainerStyle={Feb9_CSS.scroll_view}>

                <View style={Feb9_CSS.box}>
                    <Text style={Feb9_CSS.text}>Original Object</Text>
                </View>

                <View style={[Feb9_CSS.box,{transform:[{scale:2}]}]}>
                    <Text style={Feb9_CSS.text}>Scale by 2</Text>
                </View>

                <View style={[Feb9_CSS.box,{transform:[{scaleX:2}]}]}>
                    <Text style={Feb9_CSS.text}>ScaleX by 2</Text>
                </View>

                <View style={[Feb9_CSS.box,{transform:[{scaleY:2}]}]}>
                    <Text style={Feb9_CSS.text}>ScaleY by 2</Text>
                </View>

                <View style={[Feb9_CSS.box,{transform:[{rotate:'45deg'}]}]}>
                    <Text style={Feb9_CSS.text}>Rotate by 45deg</Text>
                </View>

                <View style={[Feb9_CSS.box,
                    {
                        transform:[{rotateX:'45deg'}, {rotateZ:'45deg'}]
                    }]}>
                    <Text style={Feb9_CSS.text}>Rotate XandZ by 45deg</Text>
                </View>

                <View style={[Feb9_CSS.box,
                    {
                        transform:[{rotateY:'45deg'}, {rotateZ:'45deg'}]
                    }]}>
                    <Text style={Feb9_CSS.text}>Rotate YandZ by 45deg</Text>
                </View>

                <View style={[Feb9_CSS.box,
                    {
                        transform: [{skewX: '45deg'}],
                    }]}>
                    <Text style={Feb9_CSS.text}>SkewX by 45 deg</Text>
               </View>
          

            </ScrollView>


        </View>
        
        // <View style={Feb9_CSS.mainView}>
        //     <TextInput style={Feb9_CSS.textInput}
        //                placeholder="Click Here"
        //                onSubmitEditing={Keyboard.dismiss}
        //                placeholderTextColor='black'/>

        //    <Text style={Feb9_CSS.text}>{keyboardStatus}</Text>
        // </View>
        
    )
}

export default Feb9;