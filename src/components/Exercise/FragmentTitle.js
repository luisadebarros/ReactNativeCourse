import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'


export default props => {
    return (
        // <View>
        //     <Text style = {estilo.big}>{props.principal}</Text>
        //     <Text style = {estilo.medium}>{props.second}</Text>
        // </View>

        // <Fragment>
        //     <Text style = {estilo.big}>{props.principal}</Text>
        //     <Text style = {estilo.medium}>{props.second}</Text>
        // </Fragment>

        // significa que estamos envolvendo isso com fragment, os <> vazios
        <>
            <Text style = {estilo.big}>{props.principal}</Text>
            <Text style = {estilo.medium}>{props.second}</Text>
        </>
    )
}