import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Demo2 = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text

  const [lineCount, setLineCount] = useState(0);
  const [visible, setVisible] = useState();
  const [lengthMore, setLengthMore] = useState(false);

  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
    setVisible(!visible);
    console.log('VISIBLE', visible);
    console.log('Pressed!', textShown);
  };

  // useEffect(() => {
  //   if (visible) {
  //     setValue(
  //       text.slice(43, text.length).concat(text.padEnd(text.length + 3, '...')),
  //     );
  //   } else {
  //     setVisible(false);
  //   }
  // }, [visible]);

  const onTextLayout = useCallback(
    e => {
      setLengthMore(e.nativeEvent.lines.length >= 2);
      console.log('================>', e.nativeEvent.lines.length);
      setLineCount(e.nativeEvent.lines.length);
      if (e.nativeEvent.lines.length >= 2) {
        setTextShown(true);
        console.log('sdkjfhkdsfh');
      }
    },
    [lineCount],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 30, height: 200, backgroundColor: 'red'}}>
        <Text>View1</Text>
      </View>
      <TextInput
        value={text}
        style={styles.InputText}
        placeholder="Enter Text"
        placeholderTextColor="grey"
        onChangeText={actualText => setText(actualText)}
      />
      {visible ? (
        <View style={{backgroundColor: 'grey', margin: 10}}>
          <Text
            numberOfLines={undefined}
            onTextLayout={onTextLayout}
            style={styles.showResult}>
            {text}
          </Text>
        </View>
      ) : (
        <View style={{backgroundColor: 'grey', margin: 10}}>
          <Text
            numberOfLines={1}
            onTextLayout={onTextLayout}
            style={styles.showResult}>
            {text}
          </Text>
        </View>
      )}

      {textShown ? (
        <TouchableOpacity
          onPress={toggleNumberOfLines}
          style={styles.TextButton}>
          <Text>{!textShown ? 'Read less...' : 'Read more...'}</Text>
        </TouchableOpacity>
      ) : null}
      <View style={{margin: 30, height: 200, backgroundColor: 'green'}}>
        <Text>View2</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  InputText: {
    alignSelf: 'center',
    width: '95%',
    height: 50,
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    elevation: 6,
    fontSize: 16,
    fontWeight: '600',
    padding: 8,
    backgroundColor: '#f7f7fa',
  },
  showTextButton: {
    alignSelf: 'center',
    marginTop: 20,
  },
  TextButton: {
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: '600',
    color: '#069cee',
  },
  showResult: {
    textAlignVertical: 'center',
    fontSize: 50,
    flexWrap: 'wrap',
    margin: 10,
  },
});

export default Demo2;
