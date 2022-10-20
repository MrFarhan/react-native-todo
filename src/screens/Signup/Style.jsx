import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginMainContainer: {
    height: '100%',
    backgroundColor: '#4b0deb',
    paddingBottom:40,
    width:'100%'
  },
  loginTopBanner: {
    height: '25%',
    padding: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontFamily: 'FuzzyBubbles-Bold',
    color: 'white',
    fontSize: 35,
  },
  loginContentContainer: {
    borderTopRightRadius: 15,
    borderColor: 'black',
    borderRadius: 25,
    backgroundColor: 'white',
    height: '100%',
    padding: 30,
    // marginBottom:100
  },
  signupText: {
    fontFamily: 'FuzzyBubbles-Bold',
    paddingBottom: 20,
    fontSize: 30,
  },
  basicInputStyle: {
    fontFamily: 'FuzzyBubbles-Bold',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  loginButtonsGroup: {
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 20,
    borderWidth: 1,
    width: '65%',
    textAlign: 'center',
    padding: 13,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  loginButton: {
    fontFamily: 'FuzzyBubbles-Bold',
    color: 'white',
    fontSize: 20,
  },
  bottomButtonsGroup: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  createAnAccount: {
    fontFamily: 'FuzzyBubbles-Bold',
    fontSize: 15,
    alignSelf: 'center',
  },
  signup: {
    fontFamily: 'FuzzyBubbles-Bold',
    fontSize: 20,
  },
  password: {
    position: 'relative',
  },
  passwordIcon: {
    position: 'absolute',
    right: 0,
    bottom:0,
    top:0
  },
});
