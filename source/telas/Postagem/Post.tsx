import React from "react";
import { StyleSheet, View, Text, Image, Dimensions  } from 'react-native'

const width = Dimensions.get('screen').width 

export default function Post(){
    return <>
            <View style={estilos.caixa}>
                 <Image style={estilos.imagem} source={require('../../../assets/convite-de-casamento.png')}></Image>
                 <Text style={estilos.textoInfo}>Jesus me convida para ser amado</Text>
            </View>

            <View style={estilos.caixa}>
                <Image style={estilos.imagem} source={require('../../../assets/river-6968614_1280.png')}></Image>
                <Text style={estilos.textoInfo}>Jesus Cristo é o Caminho</Text>
            </View>

            <View style={estilos.caixa}>
                <Image style={estilos.imagem} source={require('../../../assets/windy-5940755_1280.png')}></Image>
                <Text style={estilos.textoInfo}>Jesus Cristo é a Verdade</Text>
            </View>

            <View style={estilos.caixa}>
                <Image style={estilos.imagem} source={require('../../../assets/jesus.png')}></Image>
                <Text style={estilos.textoInfo}>Jesus Cristo é a Vida</Text>
            </View>

            <View style={estilos.caixa}>
                <Image style={estilos.imagem} source={require('../../../assets/super-heroi.png')}></Image>
                <Text style={estilos.textoInfo}>Jesus Cristo é o meu Heroi</Text>
            </View>
    </>
}

const estilos = StyleSheet.create({
    caixa: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        margin: 12, 
        marginBottom: 5,
        backgroundColor: '#e3e3e3',
        borderRadius: 10
    },
    imagem:{
        width: '15%',
        height: width/8
    },
    textoInfo:{
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold'
    }
})