import React from 'react'

const index = ({note1,note2}) => {
  return (
    <div>
      <h3> Votre première note de l'examen est: {note1} </h3>
      <h3> Votre deuxième note de l'examen est: {note2} </h3>
      <h1>Votre moyenne est : {(note1+note2)/2}</h1>
    </div>
  )
}

export default index
