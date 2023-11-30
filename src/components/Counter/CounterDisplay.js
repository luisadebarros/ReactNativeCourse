import React from 'react'
import { Text, Button, StyleSheet, View} from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <View style = {style.display}>
                <Text style = {[estilo.medium, style.displayText]}>{props.number}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    display: {
        backgroundColor: 'black',
        padding: 10
    },
    displayText: {
        color: '#fff'
    }
})