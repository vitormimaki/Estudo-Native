import React from 'react'
import {Button, SafeAreaView, StyleSheet} from 'react-native'
import Estilo from '../estilo'

export default props => {

    return (
        <SafeAreaView style={[Estilo.centroItem, style.Botoes]}>
            <Button title='+' onPress={props.inc}/>
            <Button title='-' onPress={props.dec}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row",
        padding: 10
    }
})