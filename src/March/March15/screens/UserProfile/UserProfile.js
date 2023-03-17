import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import LottieView from 'lottie-react-native';

const UserProfile = ({route}) => {
  const userdata = route.params.userdata;
  console.log(userdata);

  // useEffect(() => {
  //   fetch(`http://www.krdagujarat.in/api/customer/user_details/${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setuserData(data),
  //       console.log(data),
  //       setloading(false);
  //     });
  // }, []);
  return (
    <View style={styles.mainContainer}>
      {/* <LottieView
        style={{width: 50, alignSelf: 'center'}}
        source={require('../../../../../icons/loading.json')}
        autoPlay
        loop
      /> */}

      <Image
        style={styles.profileImage}
        source={{
          uri: `http://krdagujarat.in/uploads/user_thumb/${userdata.data.image}`,
        }}
      />

      <Text style={styles.userName}>
        Name:{' '}
        {userdata.data.first_name +
          ' ' +
          userdata.data.middle_name +
          ' ' +
          userdata.data.last_name}
      </Text>
      <Text style={styles.userName}>Email: {userdata.data.email}</Text>
      <Text style={styles.userName}>Category: {userdata.data.category}</Text>
    </View>
  );
};

export default UserProfile;
