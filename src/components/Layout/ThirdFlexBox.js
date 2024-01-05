import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'


export default props => {
    return (
        <View style = {style.ThirdFlex}>
            <Square />
            <Square color = "#ffb6c1" l = {20}/>
            <Square color = "#98fb98" l = {30}/>
            <Square color = "#e0e0ff" l = {40}/>
            <Square color = "#add8e6" l = {50}/>
            <Square color = "#00ced1" l = {60}/>
        </View>
    )
}

const style = StyleSheet.create({
    ThirdFlex: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        backgroundColor: 'black',
        width: '100%'
    }

})