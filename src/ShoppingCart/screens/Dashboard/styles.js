import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flatListItemView: {
    width: '95%',
    alignSelf: 'center',
    height: 120,
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    elevation: 3,
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  contentView: {
    margin: 5,
    width: '95%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textTitle: {
    color: '#252525',
    fontWeight: '700',
    fontSize: 16,
  },
  textPrice: {
    color: 'green',
    fontWeight: 'bold',
  },
  btn_view: {
    marginLeft: 8,
    justifyContent: 'flex-start',
  },
  button: {
    paddingHorizontal: 12,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    height: 30,
  },
  text_inside_btn: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  bottomView: {
    elevation: 3,
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F7F7FA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomText: {
    marginLeft: 20,
    color: '#252525',
    fontWeight: '800',
  },
  bottomText2: {
    marginLeft: 20,
    color: 'green',
    fontWeight: '800',
  },
  viewCartButton: {
    width: '45%',
    height: 40,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'white',
  },
});
