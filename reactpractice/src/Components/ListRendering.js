import React from 'react'
import Person from './Person'

function ListRendering() {
    const person = [
        {
            id :1,
            name: 'santhosh',
            age: 22
        },
        {
            id :2,
            name: 'Rohit',
            age: 21
        },
        {
            id :3,
            name: 'umesh',
            age: 23
        }
    ]
    const personList = person.map(person => (

        <Person key ={person.id} per = {person}/>

        ))
    return (

        <div>
            {personList}
        </div>
    )
}

export default ListRendering
