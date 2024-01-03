import React from 'react'
import { Text, FlatList } from 'react-native'
import estilo from '../estilo'
import products from './products'

export default props => {

    const renderProduct = ({item: product}) => {
        return <Text>{product.id}) {product.name} - ${product.price}</Text>
    }

    return (
        <>
            <Text style = {estilo.medium}>
                Second Product List
            </Text>
            <FlatList 
                data = {products}
                keyExtractor = {p => `${p.id}`}
                renderItem = {renderProduct}
            />
        </>
    )
}