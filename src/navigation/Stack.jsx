import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = {name: ''};
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user?.email ? (
          <Stack.Group>
            <Stack.Screen
              name="HomeScreen"
              component={BottomNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NewsScreen"
              component={BottomNavigation}
              options={{headerShown: false}}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
