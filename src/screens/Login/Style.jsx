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
    height: '40%',
    padding: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  loginContentContainer: {
    borderTopRightRadius: 15,
    borderColor: 'black',
    borderRadius: 25,
    backgroundColor: 'white',
    height: '100%',
    padding: 30,
  },
  loginText: {
    fontFamily: 'FuzzyBubbles-Bold',
    paddingBottom: 20,
    fontSize: 30,
  },
  email: {
    fontFamily: 'FuzzyBubbles-Bold',

    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  password: {
    fontFamily: 'FuzzyBubbles-Bold',

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
  },
  signup: {
    fontFamily: 'FuzzyBubbles-Bold',

    fontSize: 20,
  },
});
