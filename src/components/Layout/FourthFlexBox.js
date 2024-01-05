import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'


export default props => {
    return (
        <View style = {style.FourthFlex}>
            <View style = {style.viewZero} />
            <View style = {style.viewOne} />
            <View style = {style.viewTwo} />
        </View>
    )
}

const style = StyleSheet.create({
    FourthFlex: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#98fb98'
    },
    viewZero: {
       backgroundColor: '#fffacd',
       height: 300,
    },
    viewOne: {
        backgroundColor: '#e0e0ff',
        flexGrow: 9,
    },
    viewTwo: {
        backgroundColor: '#ffdab9',
        flexGrow: 3,
    }
})