import React from 'react'
import Members from './Members'
import { Text } from 'react-native'

export default props => {
    return (
        <>
        <Text>family's members</Text>
            {props.children}
            <br />
        </>
    )
}