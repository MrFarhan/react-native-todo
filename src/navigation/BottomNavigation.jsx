import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import VectorIcons from '../constants/vectorIcon';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import News from '../screens/News/News';

const Tab = createBottomTabNavigator();
const {AntDesign, MaterialIcons, MaterialCommunityIcons} = VectorIcons;
export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'red' : color}}>Home</Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                name="home"
                color={focused ? 'red' : '#6d63ff'}
                size={22}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'red' : color}}>News</Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name="newspaper-variant-outline"
                color={focused ? 'red' : '#6d63ff'}
                size={22}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
