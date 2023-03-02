import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainConatainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems:'flex-start'
  },
  profileShowView:{
    width:'95%',
    backgroundColor:'#F7F7FA',
    marginTop:50,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:10,
    borderWidth:2,
    borderColor:'#252525'
  },
  text:{
    fontSize:16,
    padding:10,
    color:'#252525'
  },
  buttonView: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    marginBottom: 80,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6464',
    borderRadius: 10,
    height: 40,
    elevation: 6,
    padding: 10,
  },
  textInsideButton: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;
