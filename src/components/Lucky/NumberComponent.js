import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import estilo from '../estilo'

export default ({ num }) => {
    return (
        <View style = {style.container}>    
            <Text style = {[estilo.big, style.num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        textAlignVertical: 'center',
        backgroundColor: 'black',
        margin: 5,
        borderRadius: 25

    },
    num: {
        color: '#fff0f5'
    }

})