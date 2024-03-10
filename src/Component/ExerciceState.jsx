import React, { useState } from 'react'

const ExerciceState = () => {

    const [inputVal, setInoutVal] =useState(" ")

    const RecuperValue=(e)=>{
         const val =e.target.value;
         setInoutVal(val);


    }
  return (
    <div>
        <h1>Mon Resultat est : {inputVal}</h1>
        <input type="text" value={inputVal} onChange={RecuperValue} />
      
    </div>
  )
}

export default ExerciceState
