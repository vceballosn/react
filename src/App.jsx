 import './App.css'
import { TwitterFollowCard } from './TwiterFollowCard'
import { useState } from 'react'


const users = [{
  userName:'vcebllos',
  name:'Vladimir Ilich Ceballos Narvaez',
  isFollowing:true
},

{
  userName:'vperez',
  name:'Vladimir Samael Ceballos Perez',
  isFollowing:true
},
{
  userName:'mceballos',
  name:'Mijail Alberto Ceballos Narvaez',
  isFollowing:true
}
]
 
 export function App (){

   
   return(   
        <section className='App'>
          {
          users.map (user => {
            const {userName,name,isFollowing} =  user
            return(
              <TwitterFollowCard key={userName}userName={userName}name={name}isFollowing={isFollowing}  avatar={"https://unavatar.io/duckduckgo/gummibeer.dev"} >
                {name}
              </TwitterFollowCard>
            )
          })   
        }   
      </section>
       )
    
}