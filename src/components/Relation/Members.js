import React from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <Text style = {estilo.medium}>
            {props.surname}, {props.name} 
        </Text>
    )
}