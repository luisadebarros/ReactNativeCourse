import React from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <>
            <Text style = {estilo.medium}>hair color son: {props.hairColor} dark</Text>
            <Text style = {estilo.medium}>eyes color son: {props.eyesColor} ligth</Text>
        </>
    )
}