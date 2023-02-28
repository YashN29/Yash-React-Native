import {Provider} from 'react-redux';
import MainScreen from './screens/MainScreen';
import store from './Store/store';

export default function RunApp(){
    return(
        <Provider store={store}>
            <MainScreen/>
        </Provider>
    );
};