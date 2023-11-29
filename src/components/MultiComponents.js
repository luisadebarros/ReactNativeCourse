import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'


export default function () {
    return <Text >Component One</Text>
}

// export
function ComponentTwo() {
    return <Text style={Estilo.medium}>Component Two</Text>
}

// export
function ComponentThree() {
    return <Text style={Estilo.medium}>Component Three</Text>
}

export {ComponentThree, ComponentTwo}

