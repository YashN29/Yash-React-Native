import { wrap } from "lodash";
import React from "react";
import {
     View, 
     StyleSheet, 
     Text, 
     Button,
     SafeAreaView,
     Image, 
     Alert,
     ActivityIndicator} from "react-native";

const Feb2 =()=>
{
    return(
        <View style={styles.safeAreaview}>

            <View style={styles.view_top}>

                    <View>

                    <Text style={styles.text1}>Welcome to,{'\n'}Creole studios!</Text>
                    </View>

                    <View>
                        <Image style={styles.logo}
                        source={require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/logo.png')}
                        />
                    </View>
            </View>
            
            <View style={styles.view_bottom}>

                <ActivityIndicator color="yellow" size="large"/>
                <Button style={styles.button}
                onPress={()=> Alert.alert('You have clicked the Button!')}
                title="Submit"/>

            </View>

        </View>      
    );
};

 
 const styles = StyleSheet.create({

    safeAreaview: {
        flex: 1,
        backgroundColor:'white'
    },
    view_bottom: {
        marginTop: 40,
        padding:20,
       //backgroundColor:'white',
        
    },
    button: {
        borderRadius:100,
        elevation:10,
        alignSelf:'flex-end',
        color:'#069CEE',
    },
    view_top: {
        flexDirection:'row',
        backgroundColor: '#069cee',
        height: 200,
        justifyContent:'flex-start', 
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    text1:{
        margin : 18,
        fontWeight: 'bold',
        color: 'white',
        alignSelf:'flex-start',
        fontSize: 30
    },
    logo:{
        width: 150,
        height: 150,
        marginLeft: 15,
        marginTop: 10,
        alignSelf: 'flex-end'
    }
});

export default Feb2;