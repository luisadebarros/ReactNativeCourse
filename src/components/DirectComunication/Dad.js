import React from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'
import Son from './Son'

export default props => {
    let eyes = "brown" 
    let hair = "blond"

    return (
        <>
            <Text style = {estilo.medium}>hair color: {hair}</Text>
            <Text style = {estilo.medium}>eyes color: {eyes}</Text>
            <Son hairColor={hair} eyesColor={eyes}/> 
        </>
    )
}