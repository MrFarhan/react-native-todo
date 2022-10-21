import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topBanner: {
    backgroundColor: '#6d63ff',
    height: 280,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    borderRadius: 2,
  },
  loginGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    zIndex: 1,
  },
  dotsMenu: {
    paddingTop: 80,
    color: 'white',
    position: 'relative',
  },
  menuContent: {
    padding: 20,
    backgroundColor: 'white',
    position: 'absolute',
    right: 30,
    top: 120,
    borderRadius: 10,
  },
  menuItem: {
    padding: 10,
  },
  userName: {
    padding: 10,
    paddingTop: 80,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 7,
    width: '85%',
    backgroundColor: 'white',
  },
  subParagraphs: {
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    paddingTop: 0,
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  addButton: {
    fontSize: 70,
    fontWeight: 700,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'pink',
    height: 40,
    margin: 12,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtonGroup:{
    flexDirection:'row',
  }
});
