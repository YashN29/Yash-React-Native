
import {Provider} from 'react-redux';
import Navigate from "./navigation/navigate";
import store from "./Store/store";

export default function Index() {
    return(
        <Provider store={store}>

            <Navigate/>
            
        </Provider>
    );
}