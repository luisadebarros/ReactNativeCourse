import { Text } from "react-native"
import React from "react"
import Estilo from './estilo'

export default props => {
    console.log(props)
    return (
        <Text style={Estilo.big}>
            The value {props.max} is bigger than {props.min}.
        </Text>
    )
}