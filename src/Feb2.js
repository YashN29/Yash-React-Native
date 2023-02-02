import React from "react";
import {
     ActivityIndicator, 
     View, 
     StyleSheet, 
     Text, 
     Button, 
     Alert,
    SafeAreaView } from "react-native";

const Separator =()=><View />

const Feb2 =()=>{

    return(
        <SafeAreaView style={styles.safeareaview}>
            
                <View >
                    {/* <ActivityIndicator style={styles.activityIndicator}/> */}
                    <Text style={styles.text1}>Welcome to,</Text>
                    <Text style={styles.text2}>Creole studios!</Text>
                    
                </View>

                <Separator style={styles.separator} />

                <View style={styles.buttonseparate}>

                    {/* <Button
                    title="Button 1"
                    color='#069CEE'
                    //onPress={()=> Alert.alert('You have clicked button 1') }
                    /> */}
                    <Button 
                    title="Button 2"
                    color='#069CEE'
                    //onPress={()=> Alert.alert('You have Clicked button 2')}
                    />

                </View>
    
    </SafeAreaView>
        
        
        
    );
};

 
 const styles = StyleSheet.create({

    safeareaview: {
        backgroundColor: '#069cee',
        justifyContent: 'center',
        //marginHorizontal: 5,
        borderBottomLeftRadius: 80,
        //marginVertical: 20
    },

    // activityIndicator: {
    //      size:'large' ,
    //     color:'green'
    // },
    
    buttonseparate: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50
    },
    separator: {
        marginVertical: 20,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    text1:{
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 15,
        marginLeft: 15,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25
    },
    text2:{
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 15,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25
    }
 },
 );

export default Feb2;