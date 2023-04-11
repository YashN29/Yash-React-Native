import {Provider} from 'react-redux';
import Navigate from './navigation/Navigate';
import {store} from './store/Store';

const Index = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};
export default Index;
