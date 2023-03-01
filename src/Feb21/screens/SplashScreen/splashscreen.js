import { View} from 'react-native';
import React,{useEffect} from 'react';
import LottieView from 'lottie-react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SplashScreen = ({navigation}) => {

  setTimeout(() => {
    navigation.navigate('Login')
  }, 1500);


//   const getData = ()=>{
//       try {
//         AsyncStorage.getItem('Email')
//           .then(value =>{
//               if(value != null){
//                   navigation.navigate('Dashboard')
//               }else{
//                   navigation.navigate('Register')
//               }
//           })
//       } catch (error) {
//           console.log(error);
//       }
//   }
//   useEffect(() => {
//     setTimeout(() => {
//       getData();
//     }, 2000);

// }, [])

        
  return (
    <View style={styles.mainContainer}>
      
      <LottieView source={require('../../../../icons/splashIcon.json')} autoPlay loop/>

    </View>
  )
}

export default SplashScreen;


















// const details = useSelector((store) => store.loginDetails)
//   console.log(details)

// useEffect(() => {

//   setTimeout(() => {
//     if((details.Email !== "yash@gmail.com") || 
//     (details.Password !== "123456"))
//     {
//       navigation.navigate("Register")
//     }
//     else{
//       navigation.navigate("Dashboard")
//     }
//   }, 1500);

// }, [])