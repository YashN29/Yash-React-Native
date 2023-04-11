import {Provider} from 'react-redux';
import Demo from './screens/Demo';
import store from './Store/store';
const Index = () => {
  return (
    <Provider store={store}>
      <Demo />
    </Provider>
  );
};
export default Index;
