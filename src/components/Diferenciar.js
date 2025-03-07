import React from 'react'
import {Text, Button, SafeAreaView, Platform} from 'react-native'
import Estilo from './estilo'

export default _ => {
    const plat = Platform.OS
    if(plat === 'android') {
        return <Text style={Estilo.txtG}>Android</Text>
    } else if (plat === 'ios') {
        return <Text style={Estilo.txtG}>iOS</Text>
    } else {
        return <Text style={Estilo.txtG}>{plat.toUpperCase()}</Text>
    }
}