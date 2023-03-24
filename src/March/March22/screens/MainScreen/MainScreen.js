import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const MainScreen = () => {
  const [color, setColor] = useState({
    signal1: '',
    signal2: '',
    signal3: '',
    signal4: '',
  });

  Icon.loadFont();

  const bool = useRef(true);

  const [second, setSecond] = useState('1');

  const [visible, setvisible] = useState(true);

  const start = () => {
    if (bool.current) {
      console.log('Stopped!');
    } else {
      while (second > 0) {
        changeSignal1(), console.log(second);
        break;
      }
    }
  };

  const changeSignal1 = () => {
    setColor({
      signal1: 'green',
      signal2: '',
      signal3: '',
      signal4: '',
    });
    setTimeout(() => {
      changeSignal4();
    }, second * 1000);
  };

  const changeSignal2 = () => {
    setColor({
      signal1: '',
      signal2: 'green',
      signal3: '',
      signal4: '',
    });
    setTimeout(() => {
      changeSignal1();
    }, second * 1000);
  };

  const changeSignal3 = () => {
    setColor({
      signal1: '',
      signal2: '',
      signal3: 'green',
      signal4: '',
    });
    setTimeout(() => {
      changeSignal2();
    }, second * 1000);
  };

  const changeSignal4 = () => {
    setColor({
      signal1: '',
      signal2: '',
      signal3: '',
      signal4: 'green',
    });
    setTimeout(() => {
      changeSignal3();
    }, second * 1000);
  };

  const onClick = () => {
    bool.current = false;
    start();
    setvisible(true);
  };

  const pauseSec = () => {
    setSecond('0');
    bool.current = true;
    setvisible(false);
  };
  if (color.signal1 == 'green') {
    console.log('signal1', second);
  }
  if (color.signal2 == 'green') {
    console.log('signal2', second);
  }
  if (color.signal3 == 'green') {
    console.log('signal3', second);
  }
  if (color.signal4 == 'green') {
    console.log('signal4', second);
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topView}>
        <Text
          style={[
            styles.textView1,
            {backgroundColor: color.signal1 == 'green' ? 'green' : 'red'},
          ]}>
          1
        </Text>
        <Text
          style={[
            styles.textView2,
            {backgroundColor: color.signal2 == 'green' ? 'green' : 'red'},
          ]}>
          2
        </Text>
      </View>
      <View style={styles.middleView}>
        <Text
          style={[
            styles.textView4,
            {backgroundColor: color.signal4 == 'green' ? 'green' : 'red'},
          ]}>
          4
        </Text>
        <Text
          style={[
            styles.textView3,
            {backgroundColor: color.signal3 == 'green' ? 'green' : 'red'},
          ]}>
          3
        </Text>
      </View>

      {visible ? (
        <TouchableOpacity onPress={pauseSec}>
          <Text style={{alignSelf: 'center', textDecorationLine: 'underline'}}>
            Click to set seconds
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <TextInput
            style={Platform.OS == 'ios' ? styles.inputIOS : styles.inputAndroid}
            value={second}
            onChangeText={t => setSecond(t)}
            keyboardType="number-pad"
          />

          <View style={styles.btn_view}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onClick();
              }}>
              <Icon size={30} name="time" />
              <Text style={styles.text_inside_btn}>Set Seconds</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
