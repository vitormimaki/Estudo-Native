import React, {Component} from 'react'
import {Text, Button, StyleSheet, TextInput, SafeAreaView} from 'react-native'
import Estilo from '../estilo'

import If from '../if'
import MegaNumero from './Numero'

export default class Mega extends Component {
    
    
    state = {
        qtdNum: this.props.qtdNum || '',
        numeros: []
    }

    /*
     constructor(props) {
         super(props)

         this.alterarQtdNum = this.alterarQtdNum.bind(this)
     }
    */

    alterarQtdNum = (qtde) => {
        this.setState({qtdNum: +qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt((Math.random() * 60) + 1)
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNum).fill().reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], []).sort((a,b) => a - b)
        this.setState({numeros})
    }
    
    //Mesma coisa
    /*
    gerarNumeros = () => {
        const {qtdNum} = this.state
        const numeros = []

        for(let i = 0; i < qtdNum; i++) {
            numeros.push(this.gerarNumeroNaoContido(numeros))
        }

        numeros.sort((a,b) => a-b)

        this.setState({numeros})
    }
    */

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num}/>
        })
    }

    render() {
        return(
            <>
                <Text style={[Estilo.txtG, style.texto]}>
                    Gerador de MegaSena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{backgroundColor:'rgba(0,0,0,0.3)',
                        borderBottomWidth: 1,
                        margin: 10,
                    }}
                    placeholder="Quantidade de Números:"
                    value={`${this.state.qtdNum}`}
                    // onChangeText={this.alterarQtdNum}
                    onChangeText={qtde => this.alterarQtdNum(qtde)}
                />
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                    style={style.botao}
                />
                <SafeAreaView style={style.container}>
                    {this.exibirNumeros()}
                </SafeAreaView>
            </>
        )
    }
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    botao: {
        marginTop: 20,
    },
    texto: {
        color: 'rgba(0,0,0,1)',
    },
})