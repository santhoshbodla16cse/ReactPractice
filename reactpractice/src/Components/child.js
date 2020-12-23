import React from 'react'

function child(props) {
    return (
        <div>
            <button onClick={() => props.greethandler('santhu')}>Greet Parent</button>
        </div>
    )
}
export default child