import React from 'react'
import lapin from './507.jpg'
import'./About.css'

 const Apropos = ({name,age}) => {   //destructuring
  // const name =props.name  props
  // const age =props.age


  
  
  return (

    <div className='About-us'>
        <h1>A Propos-de-Nous</h1>
        <p>Bienvenus {name} et age {age} sur notre siteWeb</p>
        <img src= {lapin} style={{width:"400px", height:"400"}} />   
    </div>
  )
}

export default Apropos
