import React from 'react'
import {Text, Button, SafeAreaView, Platform} from 'react-native'
import Estilo from '../estilo'

export default ({nome = 'Vitor', sobrenome = 'Mimaki'}) => {

    return (
        <SafeAreaView style={Estilo.centroItem}>
            <Text style={Estilo.txtG}>
                {nome} {sobrenome}
            </Text>
        </SafeAreaView>
    )
}