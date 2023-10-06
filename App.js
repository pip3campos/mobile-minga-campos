import { Provider} from 'react-redux'
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header.jsx';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './views/Register.jsx';
import { store } from './redux/store.js';
import storage from './utils/asyncStorage.js'
import Navigator from './components/DrawerNavigator.jsx'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()


export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </Provider>
  );
}
