import React, { useState } from "react";
import axios from "axios";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native';
import storage from '../utils/asyncStorage'
import imageBackgroundRegister from '../public/images/register.png'

const Register = (props) => {
    const[email, setEmail] = useState('')
    const[photo, setPhoto] = useState('')
    const[password, setPassword] = useState('')

    async function sendData() {
        const objeto={
            email: email,
            photo: photo,
            password: password,
        }
        console.log(objeto)
        try {
            let respuesta = await axios.post('https://minga-back-x6d3.onrender.com/auth/signup', objeto)
            console.log(respuesta.data.message)
            if ( respuesta.data.message === 'Ya existe un usuario con este email' ) {
                Alert.alert('Error: User already exist')
            } else if ( respuesta.data.message === 'User created successfully' ) {
                Alert.alert('Notification', respuesta.data.message)
                props.navigation.navigate('Home Screen')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ImageBackground
            source={imageBackgroundRegister}
            style={styles.container}
        >
            <View style={styles.formIndex}>
                <Text style={styles.formTitle}>Register</Text>
                <Text style={styles.formText}>Email</Text>
                <TextInput style={styles.inputStyle} onChangeText={setEmail}/>
                <Text style={styles.formText}>Photo</Text>
                <TextInput style={styles.inputStyle} onChangeText={setPhoto}/>
                <Text style={styles.formText}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.inputStyle} onChangeText={setPassword}/>
                <TouchableOpacity style={styles.formButtonReg}>
                    <Text style={styles.textButton} onPress={()=>sendData()}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formIndex: {
        width: '75%',
        height: '50%',
        marginTop: 70,
        backgroundColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },
    inputStyle: {
        width: '80%',
        backgroundColor: 'grey',
        marginVertical: 10,
        opacity: 0.7
    },
    formText: {
        width: '75%',
        fontSize: 12
    },
    formTitle: {
        fontSize: 20,
        marginBottom: 20
    },
    formButton: {
        width: '50%',
        height: '10%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginVertical: 3,
    },
    formButtonReg: {
        width: '50%',
        height: '10%',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginVertical: 10,
    },
    textButton: {
        color: 'white'
    }
})

export default Register