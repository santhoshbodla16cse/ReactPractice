import React from 'react'
import Person from './Person'

function ListRendering() {
    const person = [
        {
            name: 'santhosh',
            age: 22
        },
        {
            name: 'Rohit',
            age: 21
        },
        {
            name: 'umesh',
            age: 23
        }
    ]
    const personList = person.map(person => (

        <Person per = {person}/>

        ))
    return (

        <div>
            {personList}
        </div>
    )
}

export default ListRendering
