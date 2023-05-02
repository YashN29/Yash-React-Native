import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Animated,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import axios from 'axios';
import {useRef} from 'react';

const MainScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [users, setUsers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);

  const SPACING = 20;
  const AVATAR_SIZE = 70;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const getUsers = () => {
    axios
      .get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
      .then(response => {
        //setUsers(response.data.results);
        setUsers([...users, ...response.data.results]);
        //console.log(response.data.results);
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
    console.log('loading...', currentPage);
  };

  const component = ({item, index}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 2),
    ];
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });
    return (
      <Animated.View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          paddingHorizontal: 16,
          paddingVertical: 16,
          marginBottom: SPACING,
          elevation: 6,
          padding: SPACING,
          transform: [{scale}],
          opacity,
        }}>
        <Image
          style={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: 30,
            marginRight: SPACING / 2,
          }}
          source={{uri: item.picture.large}}
        />
        <View style={styles.itemStyle}>
          <Text
            style={
              styles.textName
            }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text>{item.email}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      keyExtractor={item => item.email}
      data={users}
      contentContainerStyle={{
        padding: SPACING,
        paddingTop: StatusBar.currentHeight || 42,
      }}
      renderItem={component}
      ListFooterComponent={renderLoader}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0}
      showsVerticalScrollIndicator={true}
    />
  );
};

export default MainScreen;
