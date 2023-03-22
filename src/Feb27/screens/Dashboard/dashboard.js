import {View, Text, FlatList, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {deleteData} from '../../Store/action';

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();

  const details = useSelector(store => store.data);
  console.log(details);

  const removeData = index => {
    dispatch(deleteData(index));
    console.log(index);
  };

  const getData = index => {
    navigation.navigate('UpdateData', {index: `${index}`});
  };

  const comp = ({item, index}) => {
    return (
      <View style={styles.flatListView}>
        <TouchableOpacity
          style={styles.dataView}
          onPress={() => getData(index)}>
          <Text style={styles.text}>Name : {item.name}</Text>
          <Text style={styles.text}>Email : {item.email}</Text>
          <Text style={styles.text}>Password : {item.password}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => removeData(index)}
          style={styles.eyeImage}>
          <Image
            resizeMode="contain"
            style={{height: 30, width: 30}}
            source={require('../../../../icons/delete.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const onpress = () => {
    navigation.navigate('RegisterData');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topView}>
        <Text style={styles.topText}>Registered Users</Text>
      </View>
      <FlatList data={details} renderItem={comp} />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.btn_view} onPress={onpress}>
          <Text style={styles.text_inside_btn}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
