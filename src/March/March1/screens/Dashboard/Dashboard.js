import { View, Text, useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute=()=>(
  <View/>
);

const SecondRoute = ()=>(
  <View/>
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