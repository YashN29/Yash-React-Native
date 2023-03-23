import React, {useEffect, useState} from 'react';
import {SafeAreaView, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

const SecondScreen = () => {
  Icon.loadFont();
  const signalOrder = ['signalOne', 'signalTwo', 'signalThree', 'signalFour'];
  const [signal, setSignal] = useState(signalOrder[0]);
  const [visible, setVisible] = useState(true);
  const [seconds, setSeconds] = useState('');
  const [sec, setSec] = useState('');

  useEffect(() => {
    if (sec > 0) {
      setTimeout(() => {
        var index = signalOrder.indexOf(signal);
        setSignal(() => {
          if (index == signalOrder.length - 1) {
            return (index = 0), signalOrder[index];
          } else {
            return index, signalOrder[index + 1];
          }
        });
        console.log(signal, sec);
      }, sec * 1000);
    }else{
        null
    }
  });

  const changeTime = () => {
    setVisible(true), setSec(seconds);
  };
  return (
    <SafeAreaView style={styles.junction}>
      <View style={styles.top}>
        <View
          style={[
            styles.signalOne,
            {backgroundColor: signal == 'signalOne' ? 'green' : 'red'},
          ]}
        />
      </View>
      <View style={styles.middle}>
        <View
          style={[
            styles.signalTwo,
            {backgroundColor: signal == 'signalFour' ? 'green' : 'red'},
          ]}
        />
        <View
          style={[
            styles.signalThree,
            {backgroundColor: signal == 'signalTwo' ? 'green' : 'red'},
          ]}
        />
      </View>

      <View style={styles.bottom}>
        <View
          style={[
            styles.signalFour,
            {backgroundColor: signal == 'signalThree' ? 'green' : 'red'},
          ]}
        />
      </View>

      <View style={styles.timer}>
        {visible ? (
          <TouchableOpacity
            style={styles.timerButton}
            onPress={() =>{setSec('0') ,setVisible(false)}}>
            <Icon name={'stopwatch'} size={70} color={'blue'} />
          </TouchableOpacity>
        ) : (
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              value={seconds}
              // placeholder={seconds}
              onChangeText={second => setSeconds(second)}
              keyboardType="number-pad"
            />
            <TouchableOpacity onPress={changeTime}>
              <Icon name={'checkmark-done'} size={40} color={'blue'} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SecondScreen;
