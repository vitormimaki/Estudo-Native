import React, {useState} from 'react'
import {Text, TextInput, SafeAreaView, Platform} from 'react-native'
import Estilo from './estilo'

import If from "./if";

export default props => {
    const [nome, setNome] = useState(null)

    return (
        <SafeAreaView>
            <If teste={nome !== '' && nome !== null}>
                <Text>Olá, {nome}!</Text>
            </If>
            <TextInput
                placeholder="Digite seu Nome:"
                style={{backgroundColor: '#000000', color: '#fff'}}
                value={null}
                onChangeText={nome => setNome(nome)}
            /> 
        </SafeAreaView>
    )
}