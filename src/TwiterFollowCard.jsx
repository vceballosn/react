export function TwitterFollowCard({formatUserName,userName,name,isFollowing, avatar}){
console.log(isFollowing)
     return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
              <img className='tw-followCard-avatar'
                    alt="el avatar vladimir jajajas" src={avatar}/>
              <div  className='tw-followCard-infoUserName'>
                <strong > {name}</strong>
                <span>{formatUserName(userName)}</span>
              </div>
            </header>
            <aside>
                <button className='tw-followCard-button'> Seguir</button>
            </aside>
        </article>
    )
}