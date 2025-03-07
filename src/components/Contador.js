import React, {useState} from 'react'
import {Text, Button, StyleSheet} from 'react-native'
import Estilo from './estilo'

export default ({inicial = 0, passo = 1}) => {
    //let num = inicial
    const [num, setNum] = useState(inicial)

    const inc = () => setNum(num + passo)
    const dec = () => setNum(num - passo)


    return (
        <>
            <Text style={Estilo.txtG}>{num}</Text>
            <Button title='+' onPress={inc}/>
            <Button title='-' onPress={dec}/>
        </>
    )
}