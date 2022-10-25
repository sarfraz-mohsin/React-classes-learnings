import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name, index) => <h1 key={index}>{index} {name}</h1>)

    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skills: 'react'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 25,
    //         skills: 'angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         age: 28,
    //         skills: 'vue'
    //     },
    // ]

    //const personList = persons.map(person => <Person key={person.id} person = {person}/>)

  return (
    <div>
      
        {nameList}
        
        {/* {
            nameList
        } */}


      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1> */}
    </div>
  ) 
}

export default NameList
