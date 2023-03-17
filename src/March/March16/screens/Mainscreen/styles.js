import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatListitem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius:30,
    marginRight: 16,
  },
  itemStyle: {
    justifyContent: 'space-around',
  },
  textName: {
    fontSize: 16,
    color:'#252525'
  },
  textEmail: {
    color: '#777',
  },
  loaderStyle:{
      marginVertical:16,
      alignItems:'center'
  }
});
export default styles;
