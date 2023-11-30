import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
// import estilo from './estilo'

export default props => {
    return (
        <View style = {style.Botoes}>
            <Button title='+' onPress={props.increaseButton}/>
            <Button title='-' onPress={props.decreaseButton}/>
        </View>
    )
}


const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row",
        margin: 5
    }
})