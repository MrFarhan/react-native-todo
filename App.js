import Navigation from './src/navigation/Stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
