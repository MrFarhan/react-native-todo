import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  welcomeText: {
    alignItems: 'center',
    flexDirection: 'row',
    color: 'white',
    fontSize: 30,
  },
  loginMainContainer: {
    // flex: 1,
    height: '100%',
    backgroundColor: '#6d63ff',
  },
  loginTopBanner: {
    // backgroundColor: '#6d63ff',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 0.5,
  },
  loginContentContainer: {
    borderTopRightRadius: 15,
    borderColor: 'black',
    borderRadius: 25,
    backgroundColor: 'white',
    height: '100%',
    padding: 30,
    // flex: 0.5,
  },
  loginTect: {
    padding: 20,
    fontSize: 30,
  },
  email: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  password: {
    padding: 10,
    borderBottomWidth: 1,
  },
  loginButtonsGroup: {
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 20,
    borderWidth: 1,
    width: '65%',
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  loginButton: {
    color: 'white',
    fontSize: 20,
  },
  bottomButtonsGroup: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'80%',
    alignSelf:"center",
  },
  createAnAccount:{
    fontSize:15
  },
  signup:{
    fontSize:20
  }
});
