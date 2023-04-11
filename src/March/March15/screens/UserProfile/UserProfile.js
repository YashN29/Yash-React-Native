import React, {useLayoutEffect, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {GET_SELECTED_AD, GET_USER_PROFILE} from '../../API/api';
import styles from './styles';

const UserProfile = ({route}) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [selectedAd2, setselectedAd2] = useState(null);
  const [ModalVisible, setModalVisible] = useState(false);

  const routers = route.params;

  useLayoutEffect(() => {
    if (routers.counter % 3 == 0) {
      getRandomAd();
      console.log(routers.counter);
    }
  }, []);
  const getRandomAd = () => {
    const Ad1_Index =
      routers.ADdata.data[
        Math.floor(Math.random() * routers.ADdata.data.length)
      ].image;
    const Ad2_Index =
      routers.ADdata.data[
        Math.floor(Math.random() * routers.ADdata.data.length)
      ].image;
    setSelectedAd(Ad1_Index);
    setselectedAd2(Ad2_Index);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.mainContainer}>
      {ModalVisible ? (
        <Modal
          animationType="slide"
          visible={ModalVisible}
          onRequestClose={closeModal}>
          <View style={styles.AdView}>
            <TouchableOpacity style={styles.closeAd} onPress={closeModal}>
              <Text style={styles.closeText}>CloseAd</Text>
            </TouchableOpacity>
            <Image
              style={styles.advertiseImage}
              source={{
                uri: `${GET_SELECTED_AD}${selectedAd}`,
              }}
            />
            <Image
              style={styles.advertiseImage}
              source={{
                uri: `${GET_SELECTED_AD}${selectedAd2}`,
              }}
            />
          </View>
        </Modal>
      ) : null}

      <Image
        style={styles.profileImage}
        source={{
          uri: `${GET_USER_PROFILE}${routers.userdata.data.image}`,
        }}
      />

      <Text style={styles.userName}>
        Name:{' '}
        {routers.userdata.data.first_name +
          ' ' +
          routers.userdata.data.middle_name +
          ' ' +
          routers.userdata.data.last_name}
      </Text>
      <Text style={styles.userName}>Email: {routers.userdata.data.email}</Text>
      <Text style={styles.userName}>
        Category: {routers.userdata.data.category}
      </Text>
    </View>
  );
};

export default UserProfile;
