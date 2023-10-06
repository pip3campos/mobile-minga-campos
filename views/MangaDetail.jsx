import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Alert, Image } from 'react-native'
import { useSelector, useStore, useDispatch } from 'react-redux'
import { saveManga } from '../redux/actions/mangaAction'

const MangaDetail = (props) => {
    const {id} = props.route.params
    console.log(id);
    let [ currentPage, setCurrentPage ] = useState(1)
    let [ chapters, setChapters ] = useState([])
    let [ hasPrev, setHasPrev] = useState(false)
    let [ hasNext, setHasNext ] = useState(false)
    let [ showChapters, setShowChapters ] = useState(false)
    const token = useSelector((store)=>store.profile.token)
    const dispatch = useDispatch()
    const manga = {...useSelector((state) => state.mangaReducer.manga)}

    async function getMangaDetail () {
        try {
            let {data} = await axios.get(`https://minga-back-x6d3.onrender.com/mangas/${id}`)
            dispatch(saveManga(data.response))
        } catch (error) {
            console.log('Error al obtener los detalles del manga: ', error);
        }
    }

    useEffect(() => {
        getMangaDetail()
      }, [id])

      /* useEffect(() => {
        axios.get(`https://minga-back-x6d3.onrender.com/chapters?manga_id=${id}&page=${currentPage}`)
          .then((response) => {
            setChapters(response.data.response)
            setHasPrev(response.data.hasPrev)
            setHasNext(response.data.hasNext)
          })
          .catch((err) => {
            console.log('Error al obtener los capítulos: ', err)
          })
      }, [id, currentPage, showChapters]) */

      return (
        <View style={styles.contenedorCard}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.titulo}>{manga?.title}</Text>
                    <Text style={styles.description}>{manga?.description}</Text>
                </View>
                <Image style={styles.picture} source={{ uri: manga?.cover_photo}}/>
            </View>
        </View>
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
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titulo: {
        fontSize: 32
    },
    picture: {
        width: '50%',
        height: '100%',
        borderTopLeftRadius: 200,
        borderBottomLeftRadius: 200
    },
    contenedorCard: {
        width: 330
    },
    description: {
        fontSize: 12
    }
})

export default MangaDetail