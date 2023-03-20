import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../../Store/userSlice';
import Icon from 'react-native-vector-icons/Ionicons';
const MainScreen = () => {
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(true);
  const [searchBy, setSearchBy] = useState('');
  const user = useSelector(state => state.userSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const renderLoader = () => {
    return (
      <View style={styles.loaderStyle}>
        {loading ? <ActivityIndicator size="large" color="#373B61" /> : null}
      </View>
    );
  };
  const openModal = () => {
    Alert.alert('Search by filter', 'select the option for filter', [
      {
        text: 'Seach by publisher',
        onPress: () => {
          setSearchBy('publisher'),
            ToastAndroid.show('Search by publisher!', ToastAndroid.SHORT);
        },
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Search by name',
        onPress: () => {
          setSearchBy('name'),
            ToastAndroid.show('Search by Name!', ToastAndroid.SHORT);
        },
      },
    ]);
  };
  const component = ({item}) => {
    if (search === '') {
      return (
        <View style={styles.flatListitem}>
          <TouchableOpacity onPress={() => Linking.openURL(item.game_url)}>
            <Image style={styles.profileImg} source={{uri: item.thumbnail}} />
          </TouchableOpacity>
          <View style={styles.itemStyle}>
            <Text style={styles.textName}>{item.title}</Text>
            <Text style={styles.textEmail}>{item.short_description}</Text>
            <Text style={styles.textpublisher}>
              Publisher: {item.publisher}
            </Text>
          </View>
        </View>
      );
    } else if (
      searchBy === 'publisher'
        ? item.publisher.toLowerCase().includes(search.toLowerCase())
        : item.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return (
        <View style={styles.flatListitem}>
          <TouchableOpacity onPress={() => Linking.openURL(item.game_url)}>
            <Image style={styles.profileImg} source={{uri: item.thumbnail}} />
          </TouchableOpacity>
          <View style={styles.itemStyle}>
            <Text style={styles.textName}>{item.title}</Text>
            <Text style={styles.textEmail}>{item.short_description}</Text>
            <Text style={styles.textpublisher}>
              Publisher: {item.publisher}
            </Text>
          </View>
        </View>
      );
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.input}
          placeholder="Search here.."
          placeholderTextColor="#777"
          value={search}
          onChangeText={actualsearch => setsearch(actualsearch)}
        />
        <TouchableOpacity onPress={() => openModal()}>
          <Icon name="funnel-outline" color="#373B61" size={30} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={user.user}
        renderItem={component}
        ListFooterComponent={renderLoader}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={true}
        onEndReached={() => setloading(false)}
      />
    </View>
  );
};

export default MainScreen;
