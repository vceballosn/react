import { useState } from 'react'


  export function TwitterFollowCard({children, formatUserName,userName =' User not found', avatar,beginIsFollowing}){
 
  const [isFollowing, setIsFollowing] = useState(beginIsFollowing)
  const textoButton = isFollowing ? 'Siguiendo':'Seguir'
  
  const handleClick = () => {
    console.log(isFollowing)
    setIsFollowing(!isFollowing)

  }


const clasButon = isFollowing ? 'tw-followCard-button.is-following ':'tw-followCard-button'
     return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
              <img className='tw-followCard-avatar'
                    alt="el avatar vladimir jajajas" src={avatar}/>
              <div  className='tw-followCard-infoUserName'>
                {children}
                <span>{formatUserName(userName)}</span>
              </div>
            </header>
            <aside>
                <button className={clasButon} onClick={handleClick}> {textoButton}</button>
            </aside>
        </article>
    )
}