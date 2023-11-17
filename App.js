import Navigation from './src/navigation/Stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    // setTimeout(1000, () => SplashScreen.hide());
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
