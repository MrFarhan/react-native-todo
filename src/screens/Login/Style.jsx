import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: 'FuzzyBubbles-Bold',
    color: 'white',
    fontSize: 35,
  },
  loginMainContainer: {
    height: '100%',
    backgroundColor: '#4b0deb',
  },
  loginTopBanner: {
    height: '45%',
    padding: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  loginContentContainer: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderColor: 'black',
    backgroundColor: 'white',
    flex:1,
    padding: 30,
    paddingBottom:0

  },
  loginText: {
    fontFamily: 'FuzzyBubbles-Bold',
    paddingBottom: 20,
    fontSize: 30,
  },
  password: {
    position: 'relative',
  },
  passwordIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
  },
  basicInputStyle: {
    fontFamily: 'FuzzyBubbles-Bold',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  // password: {
  //   fontFamily: 'FuzzyBubbles-Bold',

  //   padding: 10,
  //   borderBottomWidth: 1,
  // },
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
  disabled: {
    backgroundColor: 'gray',
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
    textAlign: 'center',
    alignSelf: 'center',
  },
  signup: {
    fontFamily: 'FuzzyBubbles-Bold',

    fontSize: 20,
  },
});
