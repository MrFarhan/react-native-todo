import React, {useEffect, useState} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Style';
import auth from '@react-native-firebase/auth';
import VectorIcons from '../../constants/vectorIcon';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker';

const Signup = ({navigation}) => {
  const {MaterialCommunityIcons} = VectorIcons;

  const [initializing, setInitializing] = useState(true);
  const [userData, setUserData] = useState({});

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [chosenOption, setChosenOption] = useState(''); //will store our current user options
  const options = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];
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
    console.log('Targets are', userData, date, chosenOption);
  };

  const ChangeHandler = (targetName, targetValue) => {
    setUserData(prev => ({...prev, [targetName]: targetValue}));
  };

  return (
    <SafeAreaView>
      {/* <KeyboardAvoidingView style={{flex: 1}}> */}
        {/* <ScrollView style={{flex: 1}}> */}
          <View style={styles.loginMainContainer}>
            <View style={styles.loginTopBanner}>
              <Text style={styles.welcomeText}>Welcome</Text>
            </View>
            <View style={styles.loginContentContainer}>
              <Text style={styles.signupText}>Signup</Text>
              <TextInput
                placeholder="First name"
                style={[styles.basicInputStyle]}
                onChangeText={value => ChangeHandler('firstName', value)}
                maxLength={30}
              />
              <TextInput
                placeholder="Last name"
                style={[styles.basicInputStyle]}
                onChangeText={value => ChangeHandler('lastName', value)}
                maxLength={30}
              />
              <TextInput
                placeholder="Email"
                style={[styles.basicInputStyle]}
                onChangeText={value => ChangeHandler('email', value)}
                maxLength={35}
              />
              <View>
                <TextInput
                  placeholder="Password"
                  style={[styles.basicInputStyle, styles.password]}
                  secureTextEntry={showPassword}
                  onChangeText={value => ChangeHandler('password', value)}
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
              <View>
                <TextInput
                  placeholder="Confirm Password"
                  style={[styles.basicInputStyle, styles.password]}
                  secureTextEntry={showConfirmPassword}
                  onChangeText={value =>
                    ChangeHandler('confirmPassword', value)
                  }
                  maxLength={20}
                />
                <MaterialCommunityIcons
                  name={showConfirmPassword ? 'eye-off' : 'eye'}
                  color={'#6d63ff'}
                  size={22}
                  style={styles.passwordIcon}
                  onPress={() => setShowConfirmPassword(prev => !prev)}
                />
              </View>
              <View>
                {/* <Text style={{paddingBottom:10}}>Gender</Text> */}
                <RadioForm
                  radio_props={options}
                  initial={0} //initial value of this group
                  onPress={value => {
                    setChosenOption(value);
                  }}
                  style={{flexDirection: 'row', justifyContent: 'space-evenly'}} //if the user changes options, set the new value
                />
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingTop: 5,
                }}>
                <Button title="Date of birth" onPress={() => setOpen(true)} />
                <Text>{date?.toISOString()?.split('T')[0]}</Text>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.loginButtonsGroup}
                onPress={HandleSubmit}>
                <Text style={styles.loginButton}>Signup</Text>
              </TouchableOpacity>
              <View
                style={styles.bottomButtonsGroup}
                onStartShouldSetResponder={() => navigation.navigate('Login')}>
                <Text style={styles.createAnAccount}>
                  Already have an account ?
                </Text>

                <Text style={styles.signup}>Sign in</Text>
              </View>
            </View>
          </View>
        {/* </ScrollView> */}
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

export default Signup;
