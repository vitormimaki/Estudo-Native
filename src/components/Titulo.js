import React from 'react'
import {SafeAreaView, Text, StyleSheet} from 'react-native'
import Estilo from './estilo'

export default ({principal, secundario}) => (
    <SafeAreaView style={Estilo.centroItem}>
    {/* <React.Fragment> */}
    {/* <Fragment> */}
    {/* <> */}
        <Text style={Estilo.txtG}>{principal}</Text>
        <Text style={style.cor}>{secundario}</Text>
    {/* </> */}
    {/* <Fragment> */}
    {/* </React.Fragment> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    cor: {
        color: "#0000ff"
    }
})