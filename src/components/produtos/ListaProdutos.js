import React from 'react'
import {Text, Button, SafeAreaView, Platform} from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    
    function obterLista() {
        return produtos.map(p => {
            return (
                <Text key={p.id}>
                    ({p.id}) {p.nome} - R${p.preco}
                </Text>
            )
        })
    }

    return (
        <SafeAreaView style={Estilo.centroItem}>
            <Text style={Estilo.txtG}>Lista de produtos</Text>
            {obterLista()}
        </SafeAreaView>
    )
}