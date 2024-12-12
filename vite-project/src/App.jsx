import './App.css'
import { TwiterFollowCard } from './TwitterCard'

export function App () {
    const formatUserName = (userName) => '@${userName}'
    return (
        <>
            <TwiterFollowCard itsfollowing userName="elonmusk" name="Elon Musk"/>
            <TwiterFollowCard itsfollowing userName="yurkel3" name="Yurkel Saname"/>
            <TwiterFollowCard itsfollowing userName="midudev" name="Miguel Namgel Duran"/>
           
        </>
    
    )
}
