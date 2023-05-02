import {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
const Test = () => {
  const [text, setText] = useState('');
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 3); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={text}
        style={styles.InputText}
        placeholder="Enter Text"
        placeholderTextColor="grey"
        onChangeText={actualText => setText(actualText)}
      />
      <Text
        style={{margin: 20, fontSize: 50}}
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 3}>
        {text}
      </Text>

      {lengthMore ? (
        <Text onPress={toggleNumberOfLines} style={styles.TextButton}>
          {textShown ? 'Read less...' : 'Read more...'}
        </Text>
      ) : null}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bodyText: {
    flex: 1,
    margin: 20,
    fontSize: 50,
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  linkText: {
    color: '#2196f3',
  },
  TextButton: {
    textDecorationLine: 'underline',
    fontSize: 20,
    margin: 20,
    fontWeight: '600',
    color: '#069cee',
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
});
export default Test;
