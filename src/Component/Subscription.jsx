import React,{useEffect, useState} from 'react'

const Subscription = () => {
    const [subscribe,setSubscribe]=useState(false)

    useEffect(()=>{
        const SubscriptionMessage=()=>{
            if (subscribe) {
                alert('Merci de vous êtes abonner à notre boite à lettres');
            }
        }
        SubscriptionMessage()
    },[subscribe])

    const handleSubscribe=()=>{
       setSubscribe(!subscribe)
    }

  return (
    <div>
        <h2>Exemple Inscription</h2>

        <p>Statut:  {subscribe ? " subscribe":"Not subscribe" }</p>

        <button onClick={handleSubscribe} >
        {subscribe ? "USubscribe":"subscribe" }
          
        </button>
      
    </div>
  )
}

export default Subscription
