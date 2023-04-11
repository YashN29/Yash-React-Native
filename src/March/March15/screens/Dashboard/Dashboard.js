import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GET_ALL_AD,
  GET_ALL_USER,
  GET_USER_DETAILS,
  GET_USER_PROFILE,
} from '../../API/api';
import styles from './styles';

const Dashboard = ({navigation}) => {
  const [data, setData] = useState({});
  const [loading, setloading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const [adData, setAdData] = useState([]);

  useEffect(() => {
    callAdApi();
  }, []);

  useEffect(() => {
    fetch(GET_ALL_USER, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data.data), setloading(false);
      });
  }, [currentPage]);

  const callAdApi = async () => {
    await fetch(GET_ALL_AD, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setAdData(data);
        console.log('Advertisement===', adData);
        console.log('AD_1 ==> ', selectedAd);
        console.log('AD_2 ==> ', selectedAd2);
      });
  };
  const GetUserData = index => {
    setCount(count + 1);
    setloading(true);
    console.log(index + 1);
    fetch(`${GET_USER_DETAILS}${index + 1}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(userdata => {
        navigation.navigate('Profile', {
          userdata: userdata,
          counter: count,
          ADdata: adData,
        }),
          setloading(false);
      });
  };
  const renderLoader = () => {
    return (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  };
  const loadMoreItem = () => {
    setcurrentPage(currentPage + 1);
  };
  const Compo = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => GetUserData(index)}>
          <Image
            style={styles.profileImage}
            source={{
              uri: `${GET_USER_PROFILE}${item.image}`,
            }}
          />
          <View style={styles.dataItemView}>
            <Text style={styles.itemTxt}>
              Name:{' '}
              {item.first_name + ' ' + item.middle_name + ' ' + item.last_name}
            </Text>
            <Text style={styles.itemTxt}>E-mail: {item.email}</Text>
            <Text style={styles.itemTxt}>Category: {item.category}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>Doctor's list</Text>
      {loading ? (
        <LottieView
          autoSize
          style={{alignSelf: 'center', width: 40}}
          source={require('../../../../../icons/loading.json')}
          autoPlay
        />
      ) : (
        <>
          <FlatList
            data={data}
            renderItem={Compo}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
            showsVerticalScrollIndicator={true}
            ListFooterComponent={renderLoader}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Dashboard;
