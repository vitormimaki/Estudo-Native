import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'

import Quadrado from './Quadrado'

export default props => {

    return (
        <SafeAreaView style={style.FlexV2}>
            <Quadrado />
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='#099'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(100,100,100,1)',
    }
})