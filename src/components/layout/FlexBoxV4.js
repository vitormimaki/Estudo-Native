import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'

export default props => {

    return (
        <SafeAreaView style={style.FlexV4}>
            <SafeAreaView style={style.V0}/>
            <SafeAreaView style={style.V1}/>
            <SafeAreaView style={style.V2}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexDirection: 'column',
        flexGrow: 1,
        width: 100,
        backgroundColor: 'rgba(0,0,0,1)',
    },
    V0: {
        backgroundColor: 'rgba(132,95,249,1)',
        height: 300,
    },
    V1: {
        backgroundColor: 'rgba(255,0,0,1)',
        flexGrow: 9,
    },
    V2: {
        backgroundColor: 'rgba(0,0,200,1)',
        flexGrow: 1,
    },
})