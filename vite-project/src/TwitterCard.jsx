export function TwiterFollowCard ({formatUserName, userName, name, itsfollowing}) {
    console.log(itsfollowing)
    const imageSrc = 'https://unavatar.io/x/kikobeats/${username}'
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            src={imageSrc}
            alt="un avatar aleatorio" />
            <div className='tw-followCard-info'>
                <strong> {name} </strong> 
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
    )
} 