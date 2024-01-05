import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'


export default props => {
    return (
        <View style = {style.FirstFlex}>
            <Square />
            <Square color = "#ffb6c1"/>
            <Square color = "#98fb98"/>
            <Square color = "#e0e0ff"/>
            <Square color = "#add8e6"/>
            <Square color = "#00ced1"/>
        </View>
    )
}

const style = StyleSheet.create({
    FirstFlex : {
        backgroundColor: 'grey',
        justifyContent: 'space-between',
        flexGrow: 1
    }
})