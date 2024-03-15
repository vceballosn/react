 import './App.css'
import { TwitterFollowCard } from './TwiterFollowCard'
import { useState } from 'react'
 
 export function App (){

   const formatUserName =(userName) => `@${userName}`
   const vladimir = { isFollowing:true,userName:'vceballos'}
   const [name,setName] = useState('vladimir Ceballos')
   console.log('render with name ',name)
    return(
      <div className='App'>
         <TwitterFollowCard {...vladimir } formatUserName={formatUserName}   avatar={"https://unavatar.io/duckduckgo/gummibeer.dev"} beginIsFollowing={false}>
           <strong>vladimir Ilich Ceballos Narvaez Exitos</strong> 
        </TwitterFollowCard>
         <TwitterFollowCard formatUserName={formatUserName} userName={name}  avatar={"https://unavatar.io/duckduckgo/gummibeer.dev"} beginIsFollowing={false}>
          <strong>Mijail Alaberto Ceballos Narvaez </strong>  
        </TwitterFollowCard>
         <TwitterFollowCard formatUserName={formatUserName}  userName={name}  avatar={"https://unavatar.io/youtube/casey"} beginIsFollowing>
          <strong>Vladimir Samael Ceballos Perez</strong> 
        </TwitterFollowCard>
        <TwitterFollowCard formatUserName={formatUserName} userName={name}  avatar={"https://unavatar.io/youtube/casey"} beginIsFollowing>
           {/* REalizado por vladimir Ceballos*/}
        </TwitterFollowCard>


        
        <button onClick={() => setName('ilich xxxxx')}>
          Cambio nombre 
        </button>
      </div>
       
    )
}