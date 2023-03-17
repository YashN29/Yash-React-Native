import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import LottieView from 'lottie-react-native';

const Dashboard = ({navigation}) => {
  const [data, setData] = useState({});
  const [loading, setloading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://www.krdagujarat.in/api/customer/user_list', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data.data), setloading(false);
        //console.log(data.data);
      });
  }, [currentPage]);

  const GetUserData = index => {
    setloading(true);
    fetch(`http://www.krdagujarat.in/api/customer/user_details/${index + 1}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(userdata => {
        console.log(userdata),
          navigation.navigate('Profile', {userdata: userdata}),
          setloading(false);
      });
  };

  const loadMoreItem = () => {
    setcurrentPage(currentPage + 1);
    console, loadMoreItem('loading...');
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
              uri: `http://krdagujarat.in/uploads/user_thumb/${item.image}`,
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
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Doctor's list</Text>
      {loading ? (
        <LottieView
          source={require('../../../../../icons/loading.json')}
          autoPlay
          loop
        />
      ) : (
        <FlatList
          data={data}
          renderItem={Compo}
          ListFooterComponent={Compo}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      )}
    </View>
  );
};

export default Dashboard;
