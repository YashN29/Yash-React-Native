import { wrap } from "lodash";
import React from "react";
import {
     View, 
     StyleSheet, 
     Text, 
     Button,
     SafeAreaView,
     TouchableOpacity,
     Image, 
     Alert,
     ActivityIndicator} from "react-native";

const Feb2 =()=>
{
    return(
        <View style={styles.safeAreaview}>

            <View style={styles.view_top}>

                    {/* <View> */}

                    <Text style={styles.text1}>Welcome to,{'\n'}Creole studios!</Text>
                    {/* </View> */}

                    <View accessible={true}>
                    <TouchableOpacity>
                        
                        <Image 
                        // style={styles.logo}
                        //     //tintColor="blue"
                        //     fadeDuration={5000}
                        //     accessibilityLabel="Hii"
                        //     alt="Hiii"
                        //     //blurRadius={5}
                        //     source={require('/Users/creoleimac02/Desktop/Yash_ReactNative/AwesomeProject/logo.png')}
                            
                            
                            />
                            
                    </TouchableOpacity>
                            
                        
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
        alignItems:'center',
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
        borderColor:'red',
        marginTop: 10,
        alignSelf: 'flex-end'
    }
});

export default Feb2;