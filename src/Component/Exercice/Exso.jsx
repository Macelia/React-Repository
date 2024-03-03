import React from 'react'
import './Exso.css'

const Exso = () => {
    const Envoyer=()=>{
        alert("le botton est clicker");
    }
  return (
    <div className='Container'>
      
        <h1> Hi!! Develps </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, beatae?</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>

      

            <button type='submit' onClick={Envoyer}>Envoyer</button>

    </div>
  )
}

export default Exso

