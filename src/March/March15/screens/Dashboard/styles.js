import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F7F7FA',
  },
  item: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 20,
    width: '95%',
    height: 120,
    marginTop:20,
    justifyContent:'space-evenly',
    backgroundColor: '#F7F7FA',
    borderRadius: 10,
    borderWidth:2,
    borderColor:'#00E0C6',
    elevation:6,
  },
  itemTxt: {
    fontSize: 13,
    padding: 8,
    alignSelf:'flex-start',
    color: 'black',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#252525',
    alignSelf:'center',
    justifyContent:'flex-start',
  },
  dataItemView:{
    width:260,
    justifyContent:'center',
    flexDirection:'column',
  },
  text:{
    color:'#F7F7FA',
    backgroundColor:'#00E0C6',
    height:55,
    padding:15,
    fontSize:18,
    fontWeight:'bold',
    //borderBottomLeftRadius:20,
    //borderBottomRightRadius:20
  }
});
export default styles;
