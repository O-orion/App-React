import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Post from './Post'

const width = Dimensions.get('screen').width 


export default function Postagem(){
    return <>
        <View>
            <Text style={estilos.titulo}>MEUS POST</Text>
            <Post />
        </View>

    </>
}

const estilos = StyleSheet.create({
    titulo: {
        width: '100%',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#aaa',
        color: 'white'
    },
})