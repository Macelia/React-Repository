import React, { useEffect, useState } from 'react'

const EffectComponent = () => {
    const [post, setPost]=useState ([])

    useEffect(()=> {
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                const data = await response.json();
              
               const data1=data.slice(0,10);
               setPost( data1 );

                
            } catch (error) {
                console.error('Une erreur s\'est produite :', error);
            }
        }
        
        fetchPosts();
        
        
     
    },[]);



  return (
    <div>
        <h2>Les titres :</h2>
        <ul>
        { post.map(post=>(
        
        <li key={post.id} >{post.title}</li>

        ))
        }
        
           
        </ul>
      
    </div>
  )
}



export default EffectComponent
