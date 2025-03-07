import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'

import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
import Contador from './components/Contador'
// import Botao from './components/Botao'
import Titulo from './components/Titulo'
// import MinMax from './components/MinMax'
// import Rand from './components/Aleatorio'
// import Primeiro from './components/Primeiro'
// import CompPadrao, {Comp1, Comp2} from './components/Multi'

export default () => (
    <SafeAreaView style={style.App}>
        {/* <Familia>
            <Membro nome='Solange' sobrenome='Saccone'/>
            <Membro nome='Henrique' sobrenome='Saccone'/>
            </Familia>
            <Familia>
            <Membro />
            <Membro nome='Maxmillian' sobrenome='Chesterfield'/>
            <Membro nome='Jasmin' sobrenome='Chesterfield'/>
            <Membro nome='Darwin' sobrenome='Chesterfield'/>
            </Familia> */}
        {/*
        <ParImpar num={10}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Contador inicial={100} passo={10} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro de Produto"
        secundario="Tela de Cadastro do Produto"/>
        <MinMax min={3} max={20} />
        <Rand min={0} max={20}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: "#ffffff",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})