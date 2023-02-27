import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ToastAndroid
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux'
import { deleteData, fetch} from '../../Store/action';
import UpdateData from '../UpdateData/updateData';



const Dashboard = ({navigation}) => {

  const dispatch = useDispatch();

  const details = useSelector((store)=> store.data);
  console.log(details)

  const removeData = index =>{
      dispatch(deleteData(index));
      console.log(index);
  }

  const getData = index => {
    console.log(index)
    navigation.navigate('UpdateData')
  }

  const comp = ({item, index}) => {
    return (
      <View style={styles.flatListView}>
        <TouchableOpacity style={styles.dataView} onPress={()=>getData(index)}>
        <Text style={styles.text}>Name = {item.name}</Text>
        <Text style={styles.text}>Email = {item.email}</Text>
        <Text style={styles.text}>Password = {item.password}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>removeData(index)} 
                    style={styles.eyeImage}>
            <Image resizeMode="contain" style={{height:30,width:30}} source={require('../../../../icons/delete.png')}/>
                                     
        </TouchableOpacity>
      </View>
    );
  };

  const onpress =()=>{
      navigation.navigate('RegisterData');
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList data={details} renderItem={comp} />

            <TouchableOpacity style={styles.btn_view} onPress={onpress}>
                <View style={styles.button}>
                        <Text style={styles.text_inside_btn}>+</Text>
                </View>
            </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
