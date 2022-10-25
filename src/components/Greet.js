import React from 'react'

const Greet = (props) => {
  return (
    <div>
        <h1> I am {props.name} a.k.a {props.hero} </h1>
        {props.children}
    </div>
  )
}

export default Greet
