import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DATA} from '../../Data/data';
import {addToCart, deleteItem, removeItem} from '../../store/MyCartSlice';
import {addMyProduct, decreaseQty, increaseQty} from '../../store/ProductSlice';
import {styles} from './styles';

const Dashboard = ({navigation}) => {
  const myProducts = useSelector(state => state.product);
  console.log(myProducts);

  const cartProducts = useSelector(state => state.cart);
  console.log('CART_PRODUCTS', cartProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    if (myProducts.length <= 0) {
      DATA.map(item => {
        dispatch(addMyProduct(item));
      });
    }
  }, []);

  const getTotalPrice = () => {
    let total = 0;
    cartProducts.map(item => {
      total += item.qty * item.price;
    });
    return total;
  };
  const viewCart = () => {
    navigation.navigate('CartScreen');
  };

  const compo = ({item}) => {
    return (
      <View style={styles.flatListItemView}>
        <View style={styles.contentView}>
          <Image style={styles.itemImage} source={{uri: item.thumbnail}} />
          <View style={{justifyContent: 'space-evenly', marginLeft: 10}}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textPublisher}>
              Publisher: {item.publisher}
            </Text>
            <Text style={styles.textPrice}>₹{item.price}/-</Text>
            <View style={styles.buttonsView}>
              {item.qty !== 0 ? null : (
                <View style={styles.btn_view}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      dispatch(addToCart(item));
                      dispatch(increaseQty(item.id));
                    }}>
                    <Text style={styles.text_inside_btn}>Add to cart</Text>
                  </TouchableOpacity>
                </View>
              )}
              {item.qty == 0 ? null : (
                <View style={styles.btn_view}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      dispatch(addToCart(item));
                      dispatch(increaseQty(item.id));
                    }}>
                    <Text style={styles.text_inside_btn}>+</Text>
                  </TouchableOpacity>
                </View>
              )}
              {item.qty == 0 ? null : (
                <Text style={{alignSelf: 'center', marginLeft: 8}}>
                  {item.qty}
                </Text>
              )}
              {item.qty == 0 ? null : (
                <View style={styles.btn_view}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      if (item.qty > 1) {
                        dispatch(removeItem(item));
                        dispatch(decreaseQty(item.id));
                      } else {
                        dispatch(deleteItem(item.id));
                        dispatch(decreaseQty(item.id));
                      }
                    }}>
                    <Text style={styles.text_inside_btn}>-</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ListFooterComponent={<View style={{height: 60}} />}
        data={myProducts}
        renderItem={compo}
      />
      {cartProducts.length > 0 ? (
        <View style={styles.bottomView}>
          <View style={{width: '50%'}}>
            <Text
              style={
                styles.bottomText
              }>{`added items(${cartProducts.length})`}</Text>
            <Text
              style={styles.bottomText2}>{`Total: ₹${getTotalPrice()}/-`}</Text>
          </View>
          <TouchableOpacity
            style={styles.viewCartButton}
            onPress={() => viewCart()}>
            <Text style={{fontWeight: '600', color: 'green'}}>View Cart</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};
export default Dashboard;
