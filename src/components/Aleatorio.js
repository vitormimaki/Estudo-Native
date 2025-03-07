import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default ({min, max}) => {
    const delta = max - min + 1
    const rand = parseInt(Math.random() * delta) + min
    return (
        <Text style={Estilo.txtG}>
            O Valor Aleatório é: {rand}
        </Text>
    )
}