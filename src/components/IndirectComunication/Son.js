import React from 'react'
import { Button } from 'react-native'
import estilo from '../estilo'

export default props => {

    function generateNumber(max, min) {
        const factor = max - min + 1
        return parseInt(Math.random() * factor) + min
    }

    return (
        <Button 
            title = "execute" 
            onPress={function() {
                    const numberAfter =  generateNumber(props.min, props.max)
                    props.functione(numberAfter, "The value is:")
                }
            }
        />
    )
}