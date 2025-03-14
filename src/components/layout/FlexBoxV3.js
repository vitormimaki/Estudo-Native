import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'

import Quadrado from './Quadrado'

export default props => {

    return (
        <SafeAreaView style={style.FlexV3}>
            <Quadrado lado={20}/>
            <Quadrado cor='#900' lado={30}/>
            <Quadrado cor='#090' lado={40}/>
            <Quadrado cor='#009' lado={50}/>
            <Quadrado cor='#099' lado={60}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: 'rgba(200,200,200,1)',
    }
})