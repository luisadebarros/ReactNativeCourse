import React, { createContext } from "react";
import users from "../Data/users";

const UsersContext = createContext({})

export const UsersProvider = props => {
    useReducer()
    return (
        <UsersContext.Provider value = {{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext

