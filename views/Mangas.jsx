import React, { useState, useEffect } from "react"
import axios from "axios"
import { Text, ScrollView, StyleSheet, ImageBackground, View, Image, TouchableOpacity, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import storage from "../utils/asyncStorage"
import mangasBKG from '../public/images/mangasBKG.png'

const Mangas = ({navigation}) => {
    const getToken = async ()=>{
        const token = await storage.load({key:'token'})
    }
    const { text } = useSelector((store) => store.mangas)
    const [mangas,setMangas] = useState([])
    const [categories,setCategories] = useState()
    const [page,setPage] = useState(1)
    const [maxPages,setMaxPages] = useState()
    const [next,setNext] = useState()
    const [prev, setPrev] = useState()
    const dispatch = useDispatch()

    async function getMangas() {
        try {
            let { data } = await axios.get(`https://minga-back-x6d3.onrender.com/mangas?page=${page}`)
            setMangas(data.response)
            setMaxPages(data.pages.maxPages)
            setNext(data.pages.next)
            setPrev(data.pages.prev)
        } catch (error) {
            console.log(error)
        }
    }

    async function getCategories() {
        try {
            let { data } = await axios.get('https://minga-back-x6d3.onrender.com/categories')
            setCategories(data.response)
        } catch (error) {
            console.log(error)
        }
    }

    function pagination(start, max) {
        let template = []
        for (let i = start; i < max; i++) {
            template.push(<TouchableOpacity onPress={() => setPage(i)}><Text>{i}...</Text></TouchableOpacity>)
        }
        template.push(<TouchableOpacity onPress={() => setPage(max)}><Text>{max}...</Text></TouchableOpacity>)
    }

    useEffect(() => {
        getMangas()
        getCategories()
    }, [page])

    return (
        <ImageBackground
            source={mangasBKG}
            style={styles.container2}
        >
            <FlatList
                data={mangas}
                vertical
                keyExtractor={(item) => String(item._id)}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.contenedorCard}>
                            <TouchableOpacity onPress={()=>navigation.navigate("Manga's Detail Screen", { id: item._id})}>
                                <View style={styles.card}>
                                    <Text style={styles.titulo}>{item.title}</Text>
                                    <Image style={styles.picture} source={{ uri: item.cover_photo}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 32
    },
    container: {
        width: '100%',
        height: '100%'
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        flexDirection: 'row',
        width: 300,
        height: 200,
        backgroundColor: 'lightblue',
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    titulo: {
        fontSize: 30,
        maxWidth: '50%'
    },
    picture: {
        width: '50%',
        height: '100%',
        borderTopLeftRadius: 200,
        borderBottomLeftRadius: 200
    },
    contenedorCard: {
        width: 'auto'
    }
})

export default Mangas