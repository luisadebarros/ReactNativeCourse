import React from 'react'
import { View, Text, FlatList } from 'react-native'
import users from '../Data/users'
import { ListItem, Avatar} from 'react-native-elements'

export default props => {

    function getUserItem({ item: user }){
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar source={{ uri: user.url }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    name="edit"
                    size={25}
                    color="#ffdab9"
                    onPress={() => props.navigation.navigate('UserForm', user)}
                />
            </ListItem>

        )
    }

    return (
        <View>
            <FlatList
                data = {users}
                keyExtractor = {user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    )
}