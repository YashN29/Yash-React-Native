import React from "react";
import {View} from 'react-native';
import Feb7 from "./src/Feb7/Feb7";
import Dashboard_UI from "./src/Feb7/Dashboard_UI";

const App =() => {

    return (
        <View style ={{flex:1}}>
            {<Feb7/>}
        </View>
    );
};

export default App;
