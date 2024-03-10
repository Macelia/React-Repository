import React, { useState }  from 'react'

const MyStateHook = () => {
 const [Compteur,setCompteur]=useState(0);

 const IncrimFunction=()=>{
  setCompteur(count=>count+1)
 }
 const DecrimFunction=()=>{
  setCompteur(count=>count-1)
 }
 
    
  return (
    <div>
        <p> Compteur :{Compteur}</p>
        <button onClick={IncrimFunction}>Incrimenté</button>
        <button onClick={DecrimFunction}>Décrimenté</button>
      
    </div>
  )
}

export default MyStateHook
