import React from 'react';
import {View,Text} from 'react-native';
import Feb1 from './src/Feb1';
import Feb2 from './src/Feb2';

const App =() => {

    return (
        <View style ={{flex:0.4}}>
            {<Feb2/>}
        </View>
    );
};

export default App;
