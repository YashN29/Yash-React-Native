import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const Demo = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"

  const [textInputHeight, setTextInputHeight] = useState(0);

  // const toggleNumberOfLines = () => {
  //   setTextShown(true);
  //   console.log('Pressed!');
  //   console.log(textShown);
  // };

  const onTextLayout = useCallback(
    e => {
      setLengthMore(e.nativeEvent.lines.length >= 2);
      console.log('================>', e.nativeEvent.lines.length);
      console.log(lengthMore);
      if (e.nativeEvent.lines.length >= 2) {
        setTextShown(true);
      }
    },
    [text],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{margin: 30}}></View>
      <TextInput
        value={text}
        style={styles.InputText}
        placeholder="Enter Text"
        placeholderTextColor="grey"
        onChangeText={actualText => setText(actualText)}
      />
      <View style={{margin: 30, flex: 2, backgroundColor: 'red'}}>
        <Text>View1</Text>
      </View>

      <Text
        onTextLayout={onTextLayout}
        numberOfLines={!textShown ? 1 : undefined}
        style={{
          margin: 20,
          padding: 5,
          elevation: 6,
          fontSize: 30,
          backgroundColor: '#f7f7fa',
        }}>
        {text}
      </Text>
      {textShown ? (
        <Text
          onPress={() => setTextShown(true)}
          style={{
            //lineHeight: 21,
            margin: 20,
            fontSize: 20,
            width: 110,
            textDecorationLine: 'underline',
            color: '#069CEE',
          }}>
          {!textShown ? 'Read less...' : 'Read more...'}
        </Text>
      ) : null}

      <View style={{margin: 30, flex: 1, backgroundColor: 'green'}}>
        <Text>View2</Text>
      </View>
    </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   <TextInput
    //     value={text}
    //     style={styles.InputText}
    //     placeholder="Enter Text"
    //     onContentSizeChange={handleContentSizeChange}
    //     placeholderTextColor="grey"
    //     onChangeText={actualText => setText(actualText)}
    //   />
    //   <Text
    //     onTextLayout={onTextLayout}
    //     numberOfLines={textShown ? 1 : undefined}
    //     style={{
    //       //height: 50,
    //       elevation: 6,
    //       textAlignVertical: 'center',
    //       fontSize: 80,
    //       //backgroundColor: '#f7f7fa',
    //       flexWrap: 'wrap',
    //     }}>
    //     {text}
    //   </Text>

    //   {lengthMore > 1 ? (
    //     <Text
    //       onPress={toggleNumberOfLines}
    //       style={{
    //         lineHeight: 21,
    //         margin: 20,
    //         fontSize: 20,
    //         width: 110,
    //         textDecorationLine: 'underline',
    //         color: '#069CEE',
    //       }}>
    //       {textShown ? 'Read less...' : 'Read more...'}
    //     </Text>
    //   ) : null} */}

    /* {text.length > 42 && !visible ? (
            <>
              <Text style={styles.showResult}>{value}</Text>
              <TouchableOpacity
                style={styles.showTextButton}
                onPress={() => showText()}>
                <Text style={styles.TextButton}>Show Full Text</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 1}
              style={styles.showResult}>
              {text}
            </Text>
          )} */
    /* </SafeAreaView>
      </ScrollView> */
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
    fontSize: 50,
    margin: 20,
  },
});

export default Demo;
