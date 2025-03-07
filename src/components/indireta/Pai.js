import React, {useState} from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

import Filho from './Filho';

export default props => {
    const [texto, setTexto] = useState('Nenhum Valor Gerado')
    const [num, setNum] = useState('')

    function exibirVal(texto, num) {
        setTexto(texto)
        setNum(num)
    }

    return (
        <>
            <Text style={Estilo.txtG}>{texto}{num}</Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirVal}
            />
        </>
    )
}