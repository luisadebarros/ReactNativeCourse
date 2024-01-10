import React, { useState } from 'react'
import { Text, Button, TextInput } from 'react-native'
import estilo from './estilo'

export default props => {
    const [name, setName] = useState('Luísa')

    return (
        <>
            <TextInput 
                placeholder = 'Type your name'
                placeholderTextColor = "grey"
                value = {name}
                onChangeText = {name => setName(name)}
            />
            <Text style = {estilo.medium}>
                {name}
            </Text>
        </>
        
    )
}