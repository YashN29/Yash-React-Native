import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import LottieView from 'lottie-react-native';

const Dashboard = () => {
    const [data, setData] = useState({});

      const GetResource = () => {
        fetch('http://www.krdagujarat.in/api/customer/user_list', {
            method: 'POST',
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
          })
            .then(response => response.json())
            .then(data => {
              setData(data.data);
              console.log(data.data);
            });
    };
    const Compo = ({item}) => {
        return (
          <View style={styles.item}>
            <Image style={styles.profileImage} source={{uri:`http://krdagujarat.in/uploads/user_thumb/${item.image}`}}/>
            <View style={styles.dataItemView}>
            <Text style={styles.itemTxt}>Name: {item.first_name+" "+item.middle_name+" "+item.last_name}</Text>
            <Text style={styles.itemTxt}>E-mail: {item.email}</Text>
            <Text style={styles.itemTxt}>Category: {item.category}</Text>
            </View>
          </View>
        );
      };

  return (
    <View style={styles.mainContainer}>
        <FlatList data={data} renderItem={Compo}/>
        <View style={styles.btn_view}>
          <TouchableOpacity style={styles.button} onPress={GetResource}>
            <Text style={styles.text_inside_btn}>Fetch API</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default Dashboard;