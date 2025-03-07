import React from 'react'
import {Text, Button, SafeAreaView} from 'react-native'
import Estilo from '../estilo'

export default props => {

    function gerarNum(min, max) {
        const delta = max - min + 1
        return parseInt(Math.random() * delta) + min
    }

    return (
        <SafeAreaView style={Estilo.centroItem}>
            <Button
                title='Executar'
                onPress={function() {
                    const n = gerarNum(props.min, props.max)
                    props.funcao('O Valor Gerado é: ', n)
                }}
            />
        </SafeAreaView>
    )
}