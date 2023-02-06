import React, {useState} from "react";
import {View,
        StyleSheet,
        SectionList,
        Modal,
        Alert,
        Button,
        Text,
        KeyboardAvoidingView,
        TextInput,
        Pressable,
        ScrollView,
        StatusBar,
        RefreshControl,
        Switch,
        TouchableNativeFeedback} from "react-native"
import { isEnabled } from "react-native/Libraries/Performance/Systrace";


        const DATA = [
            {
              title: 'Main dishes',
              data: ['Pizza', 'Burger', 'Risotto'],
            },
            {
              title: 'Sides',
              data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
            },
            {
              title: 'Drinks',
              data: ['Water', 'Coke', 'Beer'],
            },
            {
              title: 'Desserts',
              data: ['Cheese Cake', 'Ice Cream','Brownies','Muffins','Cheesecakes','Cookies','Candies','Custards'],
            },
          ];

const Feb6 = ()=>{

        const [isEnabled, setIsEnabled] = useState(false)
        const toggleSwitch = ()=> setIsEnabled(previousState => !previousState)
        

    //  const [refreshing, setrefreshing] = useState(false)

    //  const onRefresh = React.useCallback(()=>{
    //      setrefreshing(true)
    //      setTimeout(()=>{
    //          setrefreshing(false)
    //      },1000)
    //  })
    //const [modalVisible, setModalVisible] = useState(false);
    return(  
        <View style={styles.container}>  

                    <Switch
                    trackColor={{false:'black',true:'grey'}}
                    thumbColor= {isEnabled ? 'black' : '#f7f7f7'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}/>

            <StatusBar
            animated={true}
            backgroundColor='#069CEE'
            translucent={false}
            hidden={false}
            />

            
        <SectionList 
            stickySectionHeadersEnabled={true}
            sections={DATA}
            renderItem={({item}) => (
                <TouchableNativeFeedback>
                        <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                        </View>
                </TouchableNativeFeedback>
                
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
              )} />

        </View>

            // <View style={styles.ScrollViewcontainer}>

            //     <ScrollView style={styles.scroll_view}
                   
            //        refreshControl={
            //         <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            //     }>
                       

            //         <Text style={styles.scrollViewText}>

            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            //         aliquip ex ea commodo consequat. Duis aute irure dolor in
            //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            //         culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            //         aliquip ex ea commodo consequat. Duis aute irure dolor in
            //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            //         culpa qui officia deserunt mollit anim id est laborum.

            //         </Text>

            //     </ScrollView>

            // </View>


            //MODAL

            // <View style={styles.view}>
            //     <Modal 
            //     animationType="slide"
            //     transparent={true}
            //     visible={modalVisible}
            //     onRequestClose={()=>{
            //         Alert.alert('Modal Closed!')
            //         setmodalVisible(!modalVisible)
            //     }}>
            //         <View style={styles.centerdView}>
            //             <View style={styles.modalView}>
            //                 <Text style={styles.modaltext}>Modal Opened!</Text>
            //                 <Pressable style={[styles.button,styles.buttonClose]}
            //                             onPress={()=> setModalVisible(!modalVisible)}>
            //                     <Text>Hide Modal</Text>
            //                 </Pressable>
            //             </View>
            //         </View>
            //     </Modal>

            //     <Pressable style={[styles.button,styles.buttonOpen]}
            //                 onPress={()=> setModalVisible(true)}>
            //             <Text style={styles.text}>Show Modal</Text>
            //     </Pressable>
            // </View>



             //KEYBOARD AVOIDING VIEW

             

        // <KeyboardAvoidingView behavior={"height"}
        //     style={styles.container}>

        //     <View style={styles.innerView}>

        //     <Text style={styles.textHeader}>KeyBoard Avoiding View</Text>

        //     <TextInput placeholder="Username"
        //     style={styles.textInput}></TextInput>

        //     </View>

        //     <View style={styles.btncontainer}>
        //         <Button title="Submit"
        //         onPress={()=>null}
        //         style={styles.button}/>
        //     </View>
        // </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({


    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 10,
      },
      item: {
        backgroundColor: '#069CEE',
        padding: 12,
        shadowColor:'black',
        borderRadius:8,
        marginVertical: 8,
      },
      header: {
        fontWeight:'bold',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        fontSize: 32,
        color:'white',
        elevation:6,
        padding:10,
        backgroundColor: 'black',
      },
      title: {
        fontSize: 20,
        color:'white'
      },

        // ScrollViewcontainer:{
        //     flex:1,
        //     paddingTop: StatusBar.currentHeight,
        //     paddingRight:10,
        //     paddingLeft:10,
        //     paddingBottom:10,
        //      },
        //      header: {
        //         fontSize: 32,
        //         backgroundColor: '#fff'
        //      },
        // scroll_view:{
        //     backgroundColor:'pink',
        //     elevation:6,
        //     borderRadius:10
        // },
        // scrollViewText:{
        //     color:'black',
        //     fontSize:35,
        //     margin:10,
        //     fontWeight:'bold'
        // }



    // view:{
    //     backgroundColor:'grey',
    //     flex:1
    // },

    // centerdView:{
    //     flex:1,
    //     justifyContent:'center',
    //     marginTop:15
    // },
    // modalView:{
    //     margin:20,
    //     backgroundColor:'white',
    //     borderRadius:20,
    //     padding:35,
    //     shadowColor:'#000',
    //     shadowOffset:{
    //         width:200,
    //         height:100
    //     },
    //     shadowOpacity:0.5,
    //     shadowRadius:4,
    //     elevation:5
    // },
    // button:{
    //     borderRadius:20,
    //     padding:10,
    //     elevation:5
    // },
    // buttonOpen:{
    //     backgroundColor:"#069CEE"
    // },
    // buttonClose:{
    //     backgroundColor:"green"
    // },
    // text:{
    //     color:'white',
    //     fontWeight:'bold',
    //     textAlign:'center'
    // },
    // modaltext:{
    //     alignSelf:'center',
    //     textAlign:'center',
    //     marginBottom:15
    // }

    // container:{
    //     flex: 1,
    //     flexDirection:'column'
    // },
    // innerView:{
    //     padding:24,
    //     justifyContent:'space-around',
    //     flex:1
    // },
    // textHeader:{
    //     textAlign:'center',
    //     color:'black',
    //     fontSize:30,
    //     fontWeight:'bold',
    //     fontStyle:'normal'
    // },
    // textInput:{
    //     borderRadius:5,
    //     height:60,
    //     borderColor:"#000000",
    //     marginBottom:300,
    //     borderBottomWidth:2
    // },
    // btncontainer:{
    //     alignSelf:'center',
    //     width:300,
    //     margin:30,
    //     backgroundColor:'white'
    // },
    // button:{
    //     borderRadius:30,
    //     elevation:10,
    //     shadowColor:'black',
    //     backgroundColor:"#069CEE"
    // }
});

export default Feb6;