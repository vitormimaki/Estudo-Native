import React, {useState} from 'react'
import {Text, Button, SafeAreaView} from 'react-native'
import Estilo from '../estilo'

import Display from './ContadorDisplay'
import Botao from './ContadorBotoes'

export default props => {

    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <SafeAreaView style={Estilo.centroItem}>
            <Text style={Estilo.txtG}>
                Contador
            </Text>
            <Display num={num} />
            <Botao inc={inc} dec={dec}/>
        </SafeAreaView>
    )
}