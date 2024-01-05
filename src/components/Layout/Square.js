import React from 'react'
import { View } from 'react-native'

export default props => {
    const l = props.l || 20
    return (
        <View style = {{
            height: l,
            width: l,
            backgroundColor: props.color || "#ffdab9"
        }} />
    )
}
