import React from 'react'
import {Text, Button, SafeAreaView} from 'react-native'
import Estilo from '../estilo'

export default props => {

    return (
        <SafeAreaView style={Estilo.centroItem}>
            <Text style={Estilo.txtG}>{props.a}</Text>
            <Text style={Estilo.txtG}>{props.b}</Text>
        </SafeAreaView>
    )
}