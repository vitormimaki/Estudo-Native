import React from 'react'
import {Text, Button, SafeAreaView, StyleSheet} from 'react-native'
import Estilo from '../estilo'

export default props => {

    return (
        <SafeAreaView style={style.Display}>
            <Text style={[Estilo.txtG, style.DisplayText]}>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#ffffff'
    }
})