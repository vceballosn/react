 import './App.css'
import { TwitterFollowCard } from './TwiterFollowCard'
 
 export function App (){

   const formatUserName =(userName) => `@${userName}`

    return(
      <div className='App'>
         <TwitterFollowCard formatUserName={formatUserName} userName="vceballos" name="vladimir ceballos" avatar={"https://unavatar.io/duckduckgo/gummibeer.dev"} isFollowing/>
         <TwitterFollowCard formatUserName={formatUserName} userName="vceballos" name="vladimir ceballos" avatar={"https://unavatar.io/duckduckgo/gummibeer.dev"} isFollowing={false}/>
         <TwitterFollowCard formatUserName={formatUserName}  userName="vceballos" name="vladimir ceballos" avatar={"https://unavatar.io/youtube/casey"} isFollowing/>
      </div>
       
    )
}