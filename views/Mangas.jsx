import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Mangas = () => {
    return (
        <View
            style={StyleSheet.container}
        >
            <Text style={StyleSheet.texto}>
                Mangas
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 32
    },
    container: {
        flex: 1
    }
})

export default Mangas