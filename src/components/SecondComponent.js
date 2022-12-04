import React from 'react'
import NewTweet from "./NewTweet"
import Tweet from './Tweet'
import { useSelector } from 'react-redux'
import { selectAllTweets } from '../features/tweets/tweetsSlice'
const SecondComponent = () => {
  const allTweets = useSelector(selectAllTweets)
  return (
    <div className='secondComponent'>
        <div className="header"><p>Latest Tweets</p></div>
        <NewTweet />
        <div className="tweets">
          {allTweets.map((item,i)=><Tweet userId={item.userId} key={i} tweet={item.tweet} />)}
        </div>
    </div>
  )
}

export default SecondComponent