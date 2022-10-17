import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
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

const Login = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const state = useSelector(state => state);
  let dispatch = useDispatch();

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

  const HandleSubmit = () => {
    if (email?.trim() && password?.trim()) {
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
        })
        .catch(err => {
          console.log("erro ",err)
          console.warn('error while logging in please try again later');
        });
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.loginMainContainer}>
        <View style={styles.loginTopBanner}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.loginContentContainer}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            placeholder="Email"
            style={styles.email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            style={styles.password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.loginButtonsGroup}
            onPress={HandleSubmit}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
          <View
            style={styles.bottomButtonsGroup}
            onStartShouldSetResponder={() => navigation.navigate('Signup')}>
            <Text style={styles.createAnAccount}>Don't have an account ?</Text>
            <Text style={styles.signup}>Signup</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
