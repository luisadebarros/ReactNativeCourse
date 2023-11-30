import React, {useState} from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Son from './Son'

export default props => {
    const[num, setNumber] = useState(0)
    const[texxt, setText] = useState('')

    function showValue(number, texxt){
        setNumber(number)
        setText(texxt)
    }

    return (
        <>
            <Text style = {estilo.medium}>
                {texxt} {num}</Text>
            <Son
                min = {60}
                max ={1220}
                functione = {showValue}
            />
        </>
    )
}