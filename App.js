import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from './views/Home.jsx';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header.jsx';
import Mangas from './views/Mangas.jsx';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

      {/* <View style={styles.container}>
        <Home />
        <StatusBar style="auto" hidden={true}/>
      </View> */}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        title: 'My App',
        header:()=><Header/>
      }}>
        <Tab.Screen name='Home Screen' component={Home} options={{
          tabBarIcon:()=><Image style={{ width:20, height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}/>
        }}/>
        <Tab.Screen name='Mangas Screen' component={Mangas} options={{
          tabBarIcon:()=><Image style={{ width:20, height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/512/2702/2702134.png'}}/>
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
