import React from 'react'
import { Text, Button } from 'react-native'
import estilo from './estilo'
import IfCondition from './IfCondition'

export default props => {
    const user = props.user || {}
    return (
        <>
            <IfCondition test = {user && user.name && user.mail}>
                <Text style = {estilo.medium}> 
                    User Log On!
                </Text>

                <Text style = {estilo.medium}>
                    {user.name} - {user.mail}
                </Text>
            </IfCondition>
        </>
    )
}