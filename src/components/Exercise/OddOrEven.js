import React from 'react'
import { Text, View } from 'react-native'
import estilo from './estilo'

export default ({number = 0}) => {
    return (
        <View>
            <Text>The result is:</Text>
            {number % 2 === 0
                ? <Text style = {estilo.medium}>Odd</Text>
                : <Text style = {estilo.medium}>Even</Text>
            }
        </View>
    )    
    
} 