import Navigation from './src/navigation/Stack';
// import Home from './src/screens/Home';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <Navigation />
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Home"
    //     activeColor="#f0edf6"
    //     inactiveColor="#3e2465"
    //     barStyle={{backgroundColor: '#694fad'}}>
    //     <Tab.Screen name="Home" component={Home} />
    //     {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default App;
