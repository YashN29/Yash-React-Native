import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './Navigation/navigation';
import {Provider} from 'react-redux';
import store from './Store/store';

const Index = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigation/>
      </View>
    </Provider>
  );
};

export default Index;
