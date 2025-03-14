import React from 'react'
import {Text, Button, SafeAreaView, StyleSheet} from 'react-native'
import Estilo from '../estilo'

export default ({num}) => {

    return (
        <SafeAreaView style={style.container}>
            <Text style={[Estilo.txtG, style.num]}>
                {num}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: 'rgba(0,0,0,1)',
        margin: 5,
        borderRadius: 25,
    },
    num: {
        color: 'rgba(255,255,255,1)',
    },
})