import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/Checkout/Cart';
import Dashboard from '../screens/Dashboard/Dashboard';

const Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          component={Cart}
          name="CartScreen"
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigate;
