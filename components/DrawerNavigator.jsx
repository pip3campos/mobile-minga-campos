import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Image, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import Mangas from '../views/Mangas.jsx';
import MangaDetail from '../views/MangaDetail.jsx'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from '../views/Register.jsx';
import storage from '../utils/asyncStorage.js';
import Home from '../views/Home.jsx';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export default function Navigator() {
    const role = useSelector((store) => store.profile.user.role)

    return (
        <Drawer.Navigator>
            { role >= 0 ? (<Drawer.Screen name='Mangas Screen' component={Mangas} options={{
            drawerIcon:()=><Image style={{ width:25, height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/512/2702/2702134.png'}}/>
            }}/>) : (<Drawer.Screen name='Home Screen' component={Home} options={{
            drawerIcon:()=><Image style={{ width:25, height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}/>
            }}/>)}
            { role >= 0 ? (<Drawer.Screen name="Manga's Detail Screen" component={MangaDetail} options={{
            drawerIcon:()=><Image style={{ width:25, height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/512/2702/2702134.png'}}/>
            }}/>) : (<Drawer.Screen name='Register Screen' component={Register} options={{
            drawerIcon:()=><Image style={{ width:25, height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/128/2910/2910768.png'}}/>
            }}/>)}
            
        </Drawer.Navigator>

    )
}
