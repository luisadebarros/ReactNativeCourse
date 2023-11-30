import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import estilo from './estilo'

export default ({numberInitial = 0, increaset = 1}) => {
    // let number = props.numberInitial
    const [number, setNumber] = useState(numberInitial)

    // const increase = () => {
    //     number++
    //     console.warn(number)
    // }

    // number++ do not work
    const increase = () => setNumber(number + increaset)
    const decrease = () => setNumber(number - increaset)

    return (
        <>
            <Text style = {estilo.medium}>{number}</Text>
            <Button title = "+" onPress = {increase}/>
            <Button title = "-" onPress = {decrease}/>
        </>
    )
}