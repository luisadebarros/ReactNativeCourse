import React, {useState} from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default ({ route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : [])

    return (
        <View>
            <Text style = {style.form}>Name:</Text>
            <TextInput 
                style = {style.input}
                onChangeText = {name => setUser({...user, name})}
                placeholder ='Write the name:'
                placeholderTextColor ='grey'
                value = {user.name}
            />
            <Text style = {style.form}>Email:</Text>
            <TextInput 
                style = {style.input}
                onChangeText = {email => setUser({...user, email})}
                placeholder ='Write the e-mail:'
                placeholderTextColor ='grey'
                value = {user.email}
            />
            <Text style = {style.form}>URL do Avatar:</Text>
            <TextInput 
                style = {style.input}
                onChangeText = {url => setUser({...user, url})}
                placeholder ='Write the url to avatar'
                placeholderTextColor ='grey'
                value = {user.url}
            />
            <Button 
                title = 'Save'
                onPress= {() => {
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 5
        
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 8
    }
})