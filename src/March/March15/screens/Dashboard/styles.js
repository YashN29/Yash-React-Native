import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
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
    elevation:6,
    borderColor:'#00E0C6'
  },
  itemTxt: {
    fontSize: 13,
    padding: 8,
    alignSelf:'flex-start',
    color: 'black',
    fontWeight: 'bold',
  },
  btn_view: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
    marginHorizontal: 15,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00E0C6',
    height: 50,
    borderRadius: 30,
    padding: 10,
  },
  text_inside_btn: {
    color: '#252525',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#252525',
    alignSelf:'center',
    justifyContent:'flex-start'
  },
  dataItemView:{
    width:260,
    justifyContent:'center',
    flexDirection:'column',
  }
});
export default styles;
