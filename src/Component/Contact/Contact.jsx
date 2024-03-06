import React from 'react'
import './Contact.css'

const Contact = () => {

    const clickMe=()=>{
        alert("le botton est clicker");
    }
  return (
    <div>
        <form className='form' action="">

            {/* <label >Votre Nom :</label> */}
            <input type="text" placeholder='Votre Nom' required /><br /><br />

            {/* <label >Votre Prénom :</label> */}
            <input type="text" placeholder='Votre Prénom' required /><br /><br />

            <label >Votre Email :</label>
            <input type="email" required /><br /><br />


            <label >Votre Mot de passe :</label>
            <input type="password" required /><br /><br />

            <button type='submit' onClick={clickMe}>Envoyer</button>




        </form>
      
    </div>
  )
}

export default Contact
