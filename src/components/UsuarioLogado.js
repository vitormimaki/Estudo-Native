import React from 'react'
import {Text, Button, SafeAreaView, Platform, StyleSheet} from 'react-native'
import Estilo from './estilo'
import If from './if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <SafeAreaView style={Estilo.centroItem}>
            <If teste = {usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>Usuário Logado:</Text>
                <Text style={[Estilo.txtG, style.info]}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    info: {
        fontSize: 20,
        color: '#00f'
    }
})