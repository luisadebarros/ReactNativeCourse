import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Avatar} from 'react-native-elements'
import UsersContext from '../Context/UsersContext'

export default props => {

    const { state } = useContext(UsersContext)

    function confirmUserDelete(user){
        Alert.alert('Delete User', 'Do you want delete this user?', [
            {
                text: 'Yes',
                onPress(){
                    console.warn('Delete ' + user.id)
                }
            },
            {
                text: 'No'
            }
        ])
    }

    function getUserItem({ item: user }){
        return (
            <ListItem
                bottomDivider>
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
                <ListItem.Chevron
                    name="delete"
                    size={25}
                    color="red"
                    onPress={() => confirmUserDelete(user)}
                />
            </ListItem>

        )
    }

    return (
        <View>
            <FlatList
                data = {state.users}
                keyExtractor = {user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    )
}