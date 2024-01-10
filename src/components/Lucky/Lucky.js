import React from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import estilo from '../estilo'
import NumberComponent from './NumberComponent'
export default class Lucky extends React.Component {
    
    state = {
        numbers: this.props.numbers,
        chooseNumber: []
    }

    constructor(props) {
        super(props)
        this.changeQtdNumber = this.changeQtdNumber.bind(this)

    }

    
    // changeQtdNumber (qtd){
    //     this.setState({numbers: qtd})
    // }

    changeQtdNumber = (qtd) => {
        this.setState({numbers: +qtd})
    }

    generateNumberNotContained = nums => {
        const newN = parseInt(Math.random() * 60) + 1
        return nums.includes(newN) ? this.generateNumberNotContained(nums) : newN
    }

    // generateNumbers = () => {
    //     const chooseNumber = Array(this.state.numbers)
    //         .fill()
    //         .reduce(n => [...n, this.generateNumberNotContained(n)], [])
    //         .sort((a, b) => a - b)
    //     this.setState({ chooseNumber })
    // }
    
    generateNumbers = () => {
        const { numbers } = this.state
        const chooseNumber = []

        for(let i = 0; i < numbers; i++){
            const n = this.generateNumberNotContained(chooseNumber)
            chooseNumber.push(n)
        }
          
        chooseNumber.sort((a, b) => a - b)
        this.setState({ chooseNumber })
    }

    showNumbers = () => {
        const nums = this.state.chooseNumber
        return nums.map(num => {
            return <NumberComponent num = {num}/>
        })
    }

    render(){
        return(
            <>
                <Text style = {estilo.big}>
                    Lucky's Generator
                    <br />
                    <br />
                </Text>
                <TextInput 
                    style = {{borderBottomWidth: 1}}
                    keyboardType={'numeric'}
                    placeholder ='insert a number here'
                    placeholderTextColor = 'grey'
                    value = {`${this.state.numbers}`}
                    // onChangeText = {qtd => this.changeQtdNumber(qtd)}
                    // onChangeText = {this.changeQtdNumber}
                    onChangeText={this.changeQtdNumber}
                    />
                 <br />   
                <Button 
                    title = 'Generate Numbers'
                    onPress= {this.generateNumbers}
                />

                <View style = {
                    {
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                    <br />  
                    {this.showNumbers()}
                </View>
            </>
        )
    }
    
}