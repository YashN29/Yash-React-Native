import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  profileImage: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  userName: {
    width: '90%',
    fontSize: 16,
    backgroundColor: '#F7F7FA',
    color: '#252525',
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  AdView: {
    flexDirection: 'column',
    flex: 1,
  },
  advertiseImage: {
    width: '90%',
    height: 300,
    alignSelf: 'center',
    marginTop: 10,
    resizeMode: 'contain',
  },
  closeAd: {
    width: 50,
    height: 20,
    margin: 8,
  },
  closeText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 2,
    fontSize: 14,
  },
});

export default styles;
