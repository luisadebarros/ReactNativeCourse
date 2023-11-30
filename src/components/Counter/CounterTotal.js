import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'
import CounterDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'


// o _ fala que você não está interessado nas props, mas ele é sim interpretado pelo react
// export default _ => {
export default props => {
    const [number, setNumber] = useState(5)

    const increase = () => setNumber(number + 1)
    const decrease = () => setNumber(number - 1)
    return (
        <>
            <Text style = {estilo.medium}>counter two =P</Text>
            <CounterDisplay number = {number}/>
            <CounterButtons increaseButton = {increase} decreaseButton = {decrease}/>
        </>
    )
}