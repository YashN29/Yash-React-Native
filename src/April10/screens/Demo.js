import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, reset} from '../Store/action';

const Demo = () => {
  const dispatch = useDispatch();

  const count = useSelector(store => store.count.count);

  const incrementCount = () => {
    dispatch(increment());
  };
  const decrementCount = () => {
    dispatch(decrement());
  };
  const resetCount = () => {
    dispatch(reset());
  };
  return (
    <View style={Home_CSS.mainContainer}>
      <Text style={Home_CSS.showResulr}>{count}</Text>

      <TouchableOpacity style={Home_CSS.increment_btn} onPress={incrementCount}>
        <Text style={Home_CSS.text}>+1$</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Home_CSS.increment_btn} onPress={decrementCount}>
        <Text style={Home_CSS.text}>-1$</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Home_CSS.decrement_btn} onPress={resetCount}>
        <Text style={Home_CSS.textReset}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const Home_CSS = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F7F7FA',
    justifyContent: 'space-evenly',
  },
  showResulr: {
    fontSize: 45,
    color: 'black',
  },
  increment_btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#069CEE',
    borderRadius: 10,
    justifyContent: 'center',
  },
  decrement_btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  textReset: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Demo;
