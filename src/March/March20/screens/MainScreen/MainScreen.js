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
  SafeAreaView,
  Platform,
  ActionSheetIOS,
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
  Icon.loadFont();
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
    if (Platform.OS == 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Search by Title', 'Search by Publisher'],
          cancelButtonIndex: 0,
          userInterfaceStyle: 'light',
        },
        buttonIndex => {
          if (buttonIndex === 0) {
          } else if (buttonIndex === 1) {
            setSearchBy('title');
          } else if (buttonIndex === 2) {
            setSearchBy('publisher');
          }
        },
      );
    } else {
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
    }
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
    <SafeAreaView style={styles.mainContainer}>
      <SafeAreaView style={styles.searchView}>
        <TextInput
          style={Platform.OS == 'ios' ? styles.inputIOS : styles.inputAndroid}
          placeholder="Search here.."
          placeholderTextColor="#777"
          value={search}
          onChangeText={actualsearch => setsearch(actualsearch)}
        />
        <TouchableOpacity onPress={() => openModal()}>
          <Icon name="funnel-outline" color="#373B61" size={35} />
        </TouchableOpacity>
      </SafeAreaView>
      <FlatList
        data={user.user}
        renderItem={component}
        ListFooterComponent={renderLoader}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={true}
        onEndReached={() => setloading(false)}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
