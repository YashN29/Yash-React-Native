import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  junction: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 0.33,
    justifyContent: 'flex-end',
  },
  middle: {
    flex: 0.33,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    flex: 0.33,
  },
  signalOne: {
    width: '20%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  signalTwo: {
    width: '20%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  signalThree: {
    width: '20%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  signalFour: {
    width: '20%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  timer: {
    width: '100%',
  },
  timerButton: {
    margin: 20,
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'blue',
    flex: 1,
    height:50,
    marginRight: 10,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
});
export default styles;