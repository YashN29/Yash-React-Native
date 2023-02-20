
import { Provider } from "react-redux";
import Home from "./Screens/Home";
import store from './store';

export default function Apply() {
    return(
        <Provider store={store}>

            <Home/>
            
        </Provider>
    );
}