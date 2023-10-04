import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const Home = (props) => {
    return (
        <View
            style={StyleSheet.container}
        >
            <Text
                style={styles.texto}
                onPress={()=>props.navigation.navigate('Mangas Screen')}
            >
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    texto: {
        fontSize: 32
    }
})

export default Home