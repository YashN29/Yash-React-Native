import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import axios from 'axios';
import LottieView from 'lottie-react-native';

const MainScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    getUsers();
  }, [currentPage]);
  const getUsers = () => {
      setloading(true);
    axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`).then(response => {
      //setUsers(response.data.results);
      setUsers([...users, ...response.data.results]);
      //console.log(response.data.results);
      setloading(false);
    });
  };

  const renderLoader = ()=>{
    return(
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#000000"/>
      </View>
    )
  }

  const loadMoreItem = ()=>{
      setcurrentPage(currentPage+1);
      console.log('loading...');
  }

  const component = ({item}) => {
    return (
      <View style={styles.flatListitem}>
        <Image style={styles.profileImg} source={{uri: item.picture.large}} />
        <View style={styles.itemStyle}>
          <Text
            style={
              styles.textName
            }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    // <>
    //   {loading ? (
    //     <LottieView
    //       source={require('../../../../../icons/loading.json')}
    //       autoPlay
    //       loop
    //     />
    //   ) : (
        <FlatList
          data={users}
          renderItem={component}
          keyExtractor={item => item.email}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
          showsVerticalScrollIndicator={true}
        />
    //   )}
    // </>
  );
};

export default MainScreen;
