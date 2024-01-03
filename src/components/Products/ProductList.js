import React from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'
import products from './products'

export default props => {

    function getList() {
        return products.map(p => {
            return <Text key = {p.id}>{p.id}) {p.name} cost ${p.price}</Text>
        })
    }

    return (
        <>
            <Text style = {estilo.medium}>
                Product List
            </Text>
            {getList()}
        </>
    )
}