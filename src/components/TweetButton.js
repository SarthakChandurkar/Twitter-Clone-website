import { fontSize } from '@mui/system'
import React from 'react'

const TweetButton = ({text,color,bgcolor,fontSize,width,padding}) => {
  return (
    <div className="tweetButton" style={{color:color,backgroundColor:bgcolor,fontSize:fontSize,width:width,padding:padding}}>
        {text}
    </div>
  )
}

export default TweetButton