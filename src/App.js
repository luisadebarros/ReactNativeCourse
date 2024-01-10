import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from './components/RegisterProject/View/UserList'
import UserForm from './components/RegisterProject/View/UserForm'
import { Icon, Button } from 'react-native-elements'

const Stack = createStackNavigator()

export default () => {
    return (
       <NavigationContainer>
            <Stack.Navigator
            initialRouteName='UserList'
            screenOptions = {screenOptions}>
                <Stack.Screen 
                    name = 'UserList'
                    component = {UserList}
                    options = {({ navigation }) => {
                        return {
                            title: "Users' List",
                            headerRight: () => (
                                <Button
                                    onPress = {() => navigation.navigate('UserForm')} 
                                    type = "clear"
                                    icon = {<Icon name="add" size={25} color="white"/>}
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name = 'UserForm'
                    component = {UserForm}
                    options = {{
                        title: "Users' Form"
                    }}
                />
            </Stack.Navigator>
       </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#e0e0ff'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: "bold"
    }

}