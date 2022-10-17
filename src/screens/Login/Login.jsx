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

const Login = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
    if (email.trim() && password.trim()) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          setUser(res.user);
        })
        .catch(res => {});
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
          <View style={styles.bottomButtonsGroup}>
            <TouchableOpacity>
              <Text style={styles.createAnAccount}>Create an account ?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.signup}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
