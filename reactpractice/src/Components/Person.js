import React from 'react'

function Person(props) {
    return (
        <div>
        <h2>My name is {props.per.name} and My age is {props.per.age}</h2>
        </div>
    )
}

export default Person
