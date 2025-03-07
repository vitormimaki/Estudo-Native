import React from 'react'
import {Text, Button, SafeAreaView, Platform} from 'react-native'
import Estilo from '../estilo'

import Membro from './Membro'

export default props => {

    return (
        <SafeAreaView style={Estilo.centroItem}>
            <Text>Membros da Familia:</Text>
            {props.children}
        </SafeAreaView>
    )
}