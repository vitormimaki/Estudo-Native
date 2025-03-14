import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'

import Quadrado from './Quadrado'

export default props => {

    return (
        <SafeAreaView style={style.FlexV1}>
            <Quadrado />
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='#099'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(100,100,100,1)',
    }
})