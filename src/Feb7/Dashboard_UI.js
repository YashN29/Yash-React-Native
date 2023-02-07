import React,{useState} from "react";
import {View,Text,Image,TouchableHighlight, TextInput, FlatList} from 'react-native';
import dashboard_CSS from "./dashboard_CSS";

const DATA = [
    {title:"Facebook",image:require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/Facebook.png')},
    {title:"Amazon"},
    {title:"Apple"},
    {title:"Netflix"},
    {title:"Hotstar"},
    {title:"Flipkart"},
    {title:"Facebook"},
    {title:"Amazon"},
    {title:"Apple"},
    {title:"Netflix"},
    {title:"Hotstar"},
    {title:"Flipkart"}
  ];

const Item = ({item})=>{
return(<View style={dashboard_CSS.item}>
    <View style={dashboard_CSS.flatImageView}>
          
          <Image style={dashboard_CSS.item_image}
                source={require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/icons/Facebook.png')}></Image>

    </View>
     
            <Text style={dashboard_CSS.text}>{item.title}</Text>
    
        </View>)
    
}

const Dashboard_UI =()=>{

    const [count, setCount] = useState(0);
    const onPress = () => setCount(null);

    return(

        <View style={dashboard_CSS.main_view}>

            <Image style={dashboard_CSS.top_logo}
            source={require('../../icons/top_vector.png')}></Image>

            
            <View style={dashboard_CSS.mid_view}>

                <TouchableHighlight onPress={onPress}>
                    
                    <View style={dashboard_CSS.button}>
                            <Text style={dashboard_CSS.text1_inside_btn}>5</Text>
                            <Text style={dashboard_CSS.text2_inside_btn}>Passwords{'\n'}Stored</Text>
                    </View>

                </TouchableHighlight>


                    
                <TouchableHighlight onPress={onPress}>

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
                style={{marginHorizontal:15}}
                data={DATA}
                renderItem={Item} 
                />

            </View>

        </View>
    )
}

export default Dashboard_UI;

