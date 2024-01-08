import React from 'react'
import { Text, TextInput } from 'react-native'
import estilo from '../estilo'

export default class Lucky extends React.Component {
    
    state = {
        numbers: this.props.numbers 
    }

    constructor(props) {
        super(props)

        this.changeQtdNumber = this.changeQtdNumber.bind(this)

    }

    
    // changeQtdNumber (qtd){
    //     this.setState({numbers: qtd})
    // }

    changeQtdNumber = (qtd) => {
        this.setState({numbers: qtd})
    }

    render(){
        return(
            <>
                <Text style = {estilo.big}>
                    Lucky's Generator
                    <br />
                    {this.state.numbers}
                </Text>
                <TextInput 
                    style = {{borderBottomWidth: 1}}
                    keyboardType={'numeric'}
                    placeholder ='insert a number here'
                    placeholderTextColor = 'grey'
                    value = {this.state.numbers}
                    // onChangeText = {qtd => this.changeQtdNumber(qtd)}
                    // onChangeText = {this.changeQtdNumber}
                    onChangeText={this.changeQtdNumber}
                    />
            </>
        )
    }
    
}