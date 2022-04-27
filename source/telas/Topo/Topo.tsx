import React from 'react'
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native'

const width = Dimensions.get('screen').width 
const imagemAltura = 1118
const imagemLargura = 1920

export default function Topo () {

    return<>
            <View style={estilos.container}>
                <Image style={estilos.imagem} source={require('../../../assets/crown-of-thorns-ga3cc8757d_1920.jpg')} ></Image>
                <Text style={estilos.titulo} >JESUS CRISTO É O SENHOR !!</Text>

            </View>
        </>
}

const estilos = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        width: '100%',
        height: imagemAltura/imagemLargura * width
    },

    titulo:{
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        color: 'white',
        fontSize: 22
    }
})