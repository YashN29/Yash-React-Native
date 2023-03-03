import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainConatainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  lottieView:{
    width:250,
    height:250,
    position:'absolute',
    top:0,
    alignSelf:'center'
  },
  name: {
    marginLeft: 20,
    height: 10,
    fontSize: 10,
    color: '#545974',
    lineHeight: 12,
    marginTop: 250,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  Input_name: {
    alignSelf: 'center',
    width: '95%',
    height: 50,
    borderWidth: 2,
    marginTop: 5,
    paddingLeft: 15,
    color: '#545974',
    borderColor: '#F1F1F1',
    borderRadius: 10,
  },
  email: {
    marginLeft: 20,
    height: 10,
    fontSize: 10,
    color: '#545974',
    lineHeight: 12,
    marginTop: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  Input_email: {
    alignSelf: 'center',
    width: '95%',
    height: 50,
    color: '#545974',
    borderWidth: 2,
    marginTop: 5,
    paddingLeft: 15,
    borderColor: '#F1F1F1',
    borderRadius: 10,
  },
  btn_view: {
    justifyContent: 'center',
    width: '100%',
    height: 55,
    alignSelf: 'center',
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6464',
    borderRadius: 10,
    height:45,
    padding: 10,
  },
  text_inside_btn: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:18
  },
  mainButtonView:{
    justifyContent:'space-evenly',
    alignSelf:'center',
    width:'95%'
  }
});

export default styles;
