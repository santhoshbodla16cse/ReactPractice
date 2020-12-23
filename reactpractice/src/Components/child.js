import React from 'react'

function child(props) {
    return (
        <div>
            <button onClick={props.greethandler}>Greet Parent</button>
        </div>
    )
}
export default child