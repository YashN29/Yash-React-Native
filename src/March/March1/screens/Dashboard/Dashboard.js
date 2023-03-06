import { View, Text, useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import { TabView, SceneMap } from 'react-native-tab-view';
import Chats from '../Screen1/Chats';
import Status from '../Screen2/Status';

const FirstRoute=()=>(
  <Chats/>
);

const SecondRoute = ()=>(
  <Status/>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Dashboard = () => {

  const layout = useWindowDimensions();

  const [index, setindex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <TabView
    navigationState={{index, routes}}
    renderScene={renderScene}
    onIndexChange={setindex}
    initialLayout={{width: layout.width}}/>
  );
}

export default Dashboard;