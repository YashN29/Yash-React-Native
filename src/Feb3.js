import React from "react";
import {Button, View, StyleSheet, Text, FlatList, StatusBar} from "react-native";

const DATA =[
    {title:"1 Creolestudios"},
    {title:"2 Creolestudios"},
    {title:"3 Creolestudios"},
    {title:"4 Creolestudios"},
    {title:"5 Creolestudios"},
    {title:"6 Creolestudios"},
    {title:"7 Creolestudios"},
    {title:"8 Creolestudios"},
    {title:"9 Creolestudios"},
    {title:"10 Creolestudios"},
    {title:"11 Creolestudios"},
    {title:"12 Creolestudios"},
    {title:"13 Creolestudios"},
    {title:"14 Creolestudios"},
    {title:"15 Creolestudios"},
    {title:"16 Creolestudios"},
    {title:"17 Creolestudios"},
    {title:"18 Creolestudios"},
    {title:"19 Creolestudios"},
    {title:"20 Creolestudios"}
];

const Item = ({title})=>(

        <View style={styles.item}>

                <Text style={styles.text}>{title}</Text>

        </View>
);

const Feb3 = ()=>{

    return(


        <View style={styles.flatView}>

            <FlatList
                //progressViewOffset={6}
                //numColumns={2}
                //horizontal
                //inverted
                //initialNumToRender={2}
                initialScrollIndex={5}
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
            />

        </View>
        // <View style={styles.mainView}>

        //         <View style={styles.view_text}>

        //         <Text style={styles.text}>February 3</Text>
                
        //         </View>

        //         <View style={styles.view_button}>

        //         <Button style={styles.button}
        //         color="#009393"
        //         //onPress={(Alert.alert('Feb-3'))}
        //         title='Submit'
        //         elevation='6'
        //         />

        //         </View>

        // </View>

        
        
    );
};
const styles = StyleSheet.create({

        flatView:{
                margin:10,
                flex:1,
                marginTop: StatusBar.currentHeight || 0
        },
        text:{
            color:'white',
            fontWeight:'bold',
            fontSize:20,
            alignSelf:'center',
            fontStyle:'italic'
        },
        item:{
            elevation:8,
            borderRadius:20,
            backgroundColor: '#00E0C6',
            padding: 20,
            height:70,
            marginVertical: 8,
            marginHorizontal:16,
            borderWidth: 3
        }

        // mainView:{
        //     flex: 0,
        //     flexDirection:'column'
            
        // },
        // view_text:{
        //     backgroundColor:'#00E0C6',
        //     borderBottomLeftRadius:20,
        //     borderBottomRightRadius:20
        // },
        // text:{
        //     color:'white',
        //     fontWeight:'bold',
        //     fontStyle:'italic',
        //     fontSize:30,
        //     margin:20,
        //     alignSelf:'center'
        // },
        // button:{
        //     alignSelf:'center',
        //     borderRadius:30,
        // },
        // view_button:{
        //     marginHorizontal:100,
        //     marginTop:600,
        //     width:220,
        //     height:50
        // }

})
export default Feb3;