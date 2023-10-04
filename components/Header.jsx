import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            }} style={styles.logo} />
            <StatusBar style= "auto" hidden={true}/>
        </View>
)}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 55,
        paddingHorizontal: 10,
        marginVertical: 20,
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0 0 0 / 0.2)'
    },
    logo: {
        width: 50,
        height: 50
    }
})

export default Header