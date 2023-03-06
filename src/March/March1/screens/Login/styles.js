import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1D2038',
    alignItems: 'flex-start',
  },
  topView: {
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 20,
  },
  loginText: {
    color: '#F7F7FA',
    fontSize: 40,
    fontWeight: 'bold',
  },
  textLoginDesp: {
    fontSize: 16,
    color: '#B9C5D1',
    marginTop: 6,
  },
  middelView:{
    flexDirection:'column',
    alignItems:'flex-start',
    marginTop:50,
    marginHorizontal:15,
    width:'95%'
  },
  TextName: {
    height: 10,
    fontSize: 10,
    color: '#F7F7FA',
    lineHeight: 12,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginHorizontal:8
  },
  TextEmail: {
    height: 10,
    fontSize: 10,
    color: '#F7F7FA',
    lineHeight: 12,
    marginHorizontal:8,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop:20
  },
  Input_email: {
    alignSelf: 'center',
    height: 50,
    width:'98%',
    color: '#F7F7FA',
    paddingLeft:10,
    backgroundColor: 'OD2231',
    borderWidth: 2,
    borderColor: '#00E0C6',
    borderRadius: 10,
    marginTop:8
  },
  btn_view: {
    width: '60%',
    alignSelf:'center',
    marginTop: 50,
    marginHorizontal: 15,
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00E0C6',
    height: 50,
    borderRadius: 30,
    elevation: 6,
    padding: 10,
  },
  text_inside_btn: {
    color: '#252525',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  googleButton:{
    width: '60%', 
    height: 60,
    alignSelf:'center',
    marginTop:30,
  }
});

export default styles;
