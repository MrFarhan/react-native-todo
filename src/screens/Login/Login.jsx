import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Style';
import auth from '@react-native-firebase/auth';
import {userAction, userDetailsAction} from '../../redux/Actions';
import {useDispatch, useSelector} from 'react-redux';
import {loggeduser} from '../../redux/Reducer';
import VectorIcons from '../../constants/vectorIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const state = useSelector(state => state);
  let dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const {MaterialCommunityIcons} = VectorIcons;

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const isDisable =
    loading || !email?.trim()?.length || !password?.trim()?.length;
  const HandleSubmit = () => {
    if (
      email?.trim() &&
      password?.trim() &&
      email.includes('@') &&
      email.includes('.')
    ) {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          setUser(res.user);
          dispatch(
            userDetailsAction({
              email: res?.user?.email,
              isEmailVerified: res.user?.emailVerified,
            }),
          );
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          console.log('erro ', err);
          console.warn('error while logging in please try again later');
        });
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.loginMainContainer}>
        <KeyboardAvoidingView style={{flex:1}}>
          <ScrollView
            contentContainerStyle={{flex: 1}}
            bounces={false}
            automaticallyAdjustKeyboardInsets={true}
            >
            <View style={styles.loginTopBanner}>
              <Text style={styles.welcomeText}>Welcome</Text>
            </View>
            <View style={styles.loginContentContainer}>
              <Text style={styles.loginText}>Login</Text>
              <TextInput
                placeholder="Email"
                style={styles.basicInputStyle}
                onChangeText={setEmail}
              />
              <View>
                <TextInput
                  placeholder="Password"
                  style={[styles.basicInputStyle, styles.password]}
                  secureTextEntry={showPassword}
                  onChangeText={setPassword}
                  maxLength={20}
                />
                <MaterialCommunityIcons
                  name={showPassword ? 'eye-off' : 'eye'}
                  color={'#6d63ff'}
                  size={22}
                  style={styles.passwordIcon}
                  onPress={() => setShowPassword(prev => !prev)}
                />
              </View>
              <TouchableOpacity
                style={[
                  styles.loginButtonsGroup,
                  {backgroundColor: isDisable ? 'gray' : 'blue'},
                ]}
                onPress={HandleSubmit}
                disabled={isDisable}>
                <Text
                  style={[
                    styles.loginButton,
                    {color: isDisable ? '#bcbcbc' : 'white'},
                  ]}>
                  {loading ? 'Login ... ' : 'Login'}
                </Text>
              </TouchableOpacity>
              <View
                style={styles.bottomButtonsGroup}
                onStartShouldSetResponder={() => navigation.navigate('Signup')}>
                <Text style={styles.createAnAccount}>
                  Don't have an account ?
                </Text>
                <Text style={styles.signup}>Signup</Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
