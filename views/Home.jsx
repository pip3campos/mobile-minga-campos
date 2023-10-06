import React, { useRef, useState , useEffect } from "react"
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native'
import storage from '../utils/asyncStorage'
import { useDispatch, useSelector } from "react-redux"
import naruto from '../public/images/naruto.png'
import profile from '../redux/actions/me_authors.js'
import axios from "axios"

const Home = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch = useDispatch()

    async function sendData() {
        const objeto={
            email: email,
            password: password
        }
        console.log(objeto)
        try {
            let respuesta = await axios.post('https://minga-back-x6d3.onrender.com/auth/signin', objeto)
            console.log(respuesta.data)
            if ( respuesta.data.message === 'not found') {
                Alert.alert('Error: email not found')
            } else {
                dispatch(profile(respuesta.data.response))
                await storage.save({ key: 'token', data: respuesta.data.response.token })
                Alert.alert('Log in successful')
                props.navigation.navigate('Mangas Screen')
            }
            
        } catch (error) {
            console.log('Error: ', error)
            Alert.alert('Error: wrong password')
        }
    }

    return (
        <ImageBackground
            source={naruto}
            style={styles.container}
        >
            <View style={styles.contenedorHero}>
                <Text style={styles.tituloHero}>Live the emotion of the manga</Text>
                <Text style={styles.subtituloHero}>Find the perfect manga for you</Text>
                <TouchableOpacity style={styles.buttonHero}>
                    <Text style={styles.subtituloHero}>
                        Explore
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formIndex}>
                <Text style={styles.formTitle}>Log In</Text>
                <Text style={styles.formText}>Email:</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="youremail@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                />
                <Text style={styles.formText}>Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputStyle}
                    placeholder="*********"
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.formButton} onPress={()=>sendData()}>
                    <Text style={styles.textButton}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.formButtonReg} onPress={()=>props.navigation.navigate('Register Screen')}>
                    <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 32
    },
    tituloHero: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contenedorHero: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '30%'
    },
    subtituloHero: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    buttonHero: {
        width: '85%',
        height: '25%',
        backgroundColor: '#F472B6',
        borderRadius: 25,
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

export default Home