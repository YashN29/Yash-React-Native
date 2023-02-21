import React,{useState,useEffect} from "react";
import {View,Text,Image,TouchableHighlight, TextInput, FlatList, TouchableOpacity, Alert, BackHandler} from 'react-native';
import dashboard_CSS from "./dashboard_CSS";

const DATA = [
    {
        title:"Facebook",
        image:require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/Facebook.png')
    },
    {
        title:"Amazon",
        image:require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/amazon.png')
    },
    {
        title:"Apple",
        image:require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/apple.png')
    },
    {
        title:"Netflix",
        image:require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/netflix.png')
    },
    {
        title:"Hotstar"
    },
  ];

const Item = ({item})=>{
return(<View style={dashboard_CSS.item}>
    <View style={dashboard_CSS.flatImageView}>
          
          <Image style={dashboard_CSS.item_image}
                source={(item.image)}></Image>

    </View>
     
            <Text style={dashboard_CSS.text}>{item.title}</Text>
    
        </View>)
    
}

const Dashboard_UI =({route,navigation})=>{

    useEffect(()=>{
        const back =()=>{
            Alert.alert('Exit App?','Are you sure you want to exit?',
            [
                {
                    text: 'Cancel',
                    onPress:()=> null,
                    style:'cancel'
                },
                {
                    text:'Yes',
                    onPress:()=> BackHandler.exitApp()
                }
            ]);
            return true;
        };
            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                back,
            );
            return ()=> backHandler.remove();
    },[]);
    


    const [count, setCount] = useState(0);
    const onPress = () => setCount(null);

    const {myName} = route.params;

    return(

        <View style={dashboard_CSS.main_view}>

            <TouchableOpacity>
                <Image style={dashboard_CSS.top_logo}
                source={require('../../icons/top_vector.png')}></Image>
            </TouchableOpacity>

            {/* <Text style={dashboard_CSS.welcomeText}>Welcome, {myName} </Text> */}
            
            <View style={dashboard_CSS.mid_view}>

                <TouchableHighlight style={{borderRadius:10}} onPress={onPress}>
                    
                    <View style={dashboard_CSS.button}>
                            <Text style={dashboard_CSS.text1_inside_btn}>5</Text>
                            <Text style={dashboard_CSS.text2_inside_btn}>Passwords{'\n'}Stored</Text>
                    </View>

                </TouchableHighlight>


                    
                <TouchableHighlight style={{borderRadius:10}} onPress={onPress}>

                    <View style={dashboard_CSS.button}>
                        <Text style={dashboard_CSS.text1_inside_btn}>0</Text>
                        <Text style={dashboard_CSS.text2_inside_btn}>Passwords{'\n'}Compromised</Text>
                    </View>

                </TouchableHighlight>


            </View>

            <TextInput
                    inlineImageLeft="search_icon"
                    inlineImagePadding={2}
                    placeholder="Search Websites.."
                    placeholderTextColor='#BABABA'
                    style={dashboard_CSS.search}
                    selectionColor='#545974'/>
                    

            <View style={dashboard_CSS.flatlist_view}>
            <FlatList
            
                showsVerticalScrollIndicator={false}
                style={{marginHorizontal:15}}
                data={DATA}
                renderItem={Item} 
                />
            </View>

        </View>
    )
}

export default Dashboard_UI;

