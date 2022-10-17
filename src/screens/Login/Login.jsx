import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Style';

const Login = () => {
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
            keyboardType="numeric"
            style={styles.email}
          />
          <TextInput
            placeholder="Password"
            keyboardType="numeric"
            style={styles.password}
          />
          <TouchableOpacity style={styles.loginButtonsGroup}>
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
