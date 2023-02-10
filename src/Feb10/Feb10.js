import React, {useEffect} from "react";
import { View,Text,PermissionsAndroid, Animated, StatusBar, SectionList, Easing, TouchableOpacity, Alert, BackHandler, Button, ToastAndroid } from "react-native";
import Feb10_CSS from "./Feb10_CSS";

            //ANDROID_PERMISSIONS
    
            const permission = async()=>{
                try{
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title:'Permission Required!',
                            message:'Creole Studios wants to access your location',
                            buttonNeutral:'Ask me later',
                            buttonNegative:'Cancel',
                            buttonPositive:'OK'
                        })
                        if(granted === PermissionsAndroid.RESULTS.GRANTED){
                            console.log('RIP')
                        }
                        else{
                            console.log('Permission denied!')
                        }
                }catch(err){
                    console.warn(err)
                }
            }

const Feb10=()=>{
    const showToast = ()=>{
        ToastAndroid.show('Welcome to Creole Studios!',ToastAndroid.SHORT)
    }
    const showToastwithGravity = ()=>{
        ToastAndroid.showWithGravity('Hello!',ToastAndroid.SHORT,ToastAndroid.CENTER)
    }
    const showToastWithGravityOffset=()=>{
        ToastAndroid.showWithGravityAndOffset('A wild toast appeared',ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50)
    }
//   useEffect(()=>{
//       const backAction = ()=>{
//           Alert.alert('Hello','Are you sure you want to go back?',[
//               {
//                   text:'Cancel',
//                   onPress:()=> null,
//                   style:'cancel'
//               },
//               {
//                   text:'Yes',
//                   onPress:()=> BackHandler.exitApp()
//               }
//           ])
//           return true;
//       }

//       const backHandler = BackHandler.addEventListener(
//           'hardwareBackPress',
//           backAction
//       )
//       return()=> backHandler.remove();
//   }, [])

    // let opacity = new Animated.Value(0);

    // const animate = easing =>{
    //     opacity.setValue(0);
    //     Animated.timing(opacity, {
    //         toValue:1,
    //         duration:1200,
    //         easing,
    //         useNativeDriver:false
    //     }).start();
    // }

    // const size = opacity.interpolate({
    //     inputRange:[0,1],
    //     outputRange:[0,100]
    // })

    // const animatedStyles = [
    //     Feb10_CSS.box,
    //     {
    //         opacity,
    //         width: size,
    //         height : size,
    //     }
    // ]

    return(
        // <View style={Feb10_CSS.mainContainer}>

        //     <StatusBar hidden={true}/>

        //     <Text style={Feb10_CSS.title}>Press below animation types</Text>

        //     <View style={Feb10_CSS.boxContainer}>
        //         <Animated.View style={animatedStyles}>
        //             <Text style={Feb10_CSS.textInsideView}>Welcome to Creole Studios</Text>
        //         </Animated.View>

        //     </View>

        //     <SectionList style={Feb10_CSS.sectionList}
        //                  stickySectionHeadersEnabled={true}
        //                  sections={SECTIONS}
        //                  renderItem={({item}) => (
        //                      <TouchableOpacity 

        //                      onPress={()=> animate(item.easing)}
        //                      style={Feb10_CSS.listRow}>
        //                          <Text>{item.title}</Text>

        //                      </TouchableOpacity>
        //                  )}
        //                  renderSectionHeader={({section:{title}}) =>(
        //                      <Text style={Feb10_CSS.listHeader}>{title}</Text>
        //                  )}
        //     />
        // </View>


        <View style={Feb10_CSS.container}>
            {/* <Text style={Feb10_CSS.backText}>Click Back Button!</Text> */}

                <Text style={Feb10_CSS.backText}>Try Permission</Text>
                <Button title="Request Permission" onPress={permission}></Button>

                <Button title="Toggle Toast" onPress={showToast}></Button>
                <Button title="Toggle Toast With Gravity" onPress={showToastwithGravity}></Button>
                <Button title="Toggle Toast With Gravity And Offset" onPress={showToastWithGravityOffset}></Button>
            
        </View>

        
    )
}

// const SECTIONS = [
//     {
//         title:'Predefined Animations',
//         data:[
//             {title:'Back',easing: Easing.back(2)},
//             {title:'Bounce',easing: Easing.bounce},
//             {title:'Ease',easing:Easing.ease},
//             {title:'Elastic',easing:Easing.elastic(4)}
//         ]
//     },
//     {
//         title:'Standard Functions',
//         data:[
//             {title:'Linear',easing:Easing.linear},
//             {title:'Quad',easing:Easing.quad},
//             {title:'Cubic',easing:Easing.cubic}
//         ]
//     },
//     {
//         title: 'Additional functions',
//         data: [
//           {title: 'Bezier',easing: Easing.bezier(0, 2, 1, -1)},
//           {title: 'Circle', easing: Easing.circle},
//           {title: 'Sin', easing: Easing.sin},
//           {title: 'Exp', easing: Easing.exp},
//         ]
//       },
//       {
//         title: 'Combinations',
//         data: [
//           {title: 'In + Bounce',easing: Easing.in(Easing.bounce)},
//           {title: 'Out + Exp',easing: Easing.out(Easing.exp)},
//           {title: 'InOut + Elastic',easing: Easing.inOut(Easing.elastic(1))},
//         ]
//       }
// ]

export default Feb10;