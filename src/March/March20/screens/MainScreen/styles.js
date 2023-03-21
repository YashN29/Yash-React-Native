import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#A7D5E5',
  },
  flatListitem: {
    width:'95%',
    alignSelf:'center',
    borderRadius:15,
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop:8,
    elevation:6,
    backgroundColor:'#373B61',
    borderColor: '#EDEFFE',
    borderWidth:1
  },
  itemStyle: {
    paddingHorizontal:5,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textName: {
    width:'100%',
    fontSize: 18,
    fontWeight:'bold',
    color: '#A7D5E5',
    paddingTop:10
  },
  textEmail: {
    width:'100%',
    fontSize: 14,
    marginBottom:10,
    color: '#FCEFE9',
  },
  textpublisher: {
    fontSize: 14,
    marginTop:12,
    fontWeight:'400',
    color:'#EDEFFE'
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  profileImg: {
    width:'100%',
    height: 150,
    alignSelf:'center',
    borderRadius: 10,
    borderColor:'#A7D5E5',
    borderWidth:2
  },
  inputIOS: {
    marginVertical:10,
    borderRadius: 10,
    flex:1,
    marginHorizontal:10,
    height:'90%',
    backgroundColor:'#EDEFFE',
    elevation:6,
    paddingHorizontal: 18,
    borderWidth:2,
    borderColor:'#373B61'
  },
  inputAndroid: {
    marginVertical:10,
    borderRadius: 10,
    flex:1,
    marginHorizontal:10,
    backgroundColor:'#EDEFFE',
    elevation:6,
    paddingHorizontal: 18,
    borderWidth:2,
    borderColor:'#373B61'
  },
  searchView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  }
});

export default styles;
