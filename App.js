import React from "react";
import {View} from 'react-native';
import Feb7 from "./src/Feb7/Feb7";
import Dashboard_UI from "./src/Feb7/Dashboard_UI";
import Feb8 from "./src/Feb8/Feb8";
import Feb9 from "./src/Feb9/Feb9";

const App =() => {

    return (
        <View style ={{flex:1}}>
            {<Feb7/>}
        </View>
    );
};

export default App;
