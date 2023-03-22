import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';

const MainScreen = () => {
    const [Signal1, setSignal1] = useState(true);
    const [Signal2, setSignal2] = useState(false);
    const [Signal3, setSignal3] = useState(false);
    const [Signal4, setSignal4] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('signal1');
      setSignal1(true);
      setSignal2(false);
      setSignal3(false);
      setSignal4(false);
    }, 5000);

    setTimeout(() => {
      console.log('signal2');
      setSignal1(false);
      setSignal2(true);
      setSignal3(false);
      setSignal4(false);
    }, 5000);

    setTimeout(() => {
      console.log('signal3');
      setSignal1(false);
      setSignal2(false);
      setSignal3(true);
      setSignal4(false);
    }, 5000);

    setTimeout(() => {
      console.log('signal4');
      setSignal1(false);
      setSignal2(false);
      setSignal3(false);
      setSignal4(true);
    }, 5000);
  },[]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topView}>
        <Text
          style={[
            styles.textView1,
            {backgroundColor: Signal1 ? 'green' : 'red'},
          ]}>
          1
        </Text>
        <Text
          style={[
            styles.textView2,
            {backgroundColor: Signal2 ? 'green' : 'red'},
          ]}>
          2
        </Text>
      </View>
      <View style={styles.middleView}>
        <Text
          style={[
            styles.textView4,
            {backgroundColor: Signal4 ? 'green' : 'red'},
          ]}>
          4
        </Text>
        <Text
          style={[
            styles.textView3,
            {backgroundColor: Signal3 ? 'green' : 'red'},
          ]}>
          3
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
