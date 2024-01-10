import React from 'react'
import { Button } from 'react-native' 

export default props => {

    const a = props.title

    function exe(){
        console.warn(props.titleOne)
    }
    return(

        <>
            <Button
                title="exec -1"
                onPress={exe}
            />
            <Button
                title="exec -2"
                onPress={function() {
                    console.warn(props.titleTwo)
                }}
            />
        </>
        
    )
}