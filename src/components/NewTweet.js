import React, { useState } from 'react'
import ProfilePic from './ProfilePic'
import TweetButton from './TweetButton'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import GifIcon from '@mui/icons-material/Gif';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const NewTweet = () => {
  const [tweet, setTweet] = useState("")
  const handleChange = (e) => {
    setTweet(e.target.value)
  }
  const handleClick = (e) => {
    setTweet("")
  }
  return (
    <div className="newTweet">
      <div className='upper'>
        <ProfilePic src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
        <input value={tweet} onChange={handleChange} type="text" name="" id="" style={{ border: "1px solid white", borderRadius: "5px", width: "500px", color: "white", backgroundColor: "rgb(20 20 20)", fontSize: "16px", height: "40px", padding: "0 10px" }} />
      </div>
      <div className="bottom">
        <div className="attachments">
          <FileUploadIcon sx={{ fontSize: 32 }} />
          <GifIcon sx={{ fontSize: 32 }} />
          <PollIcon sx={{ fontSize: 32 }} />
          <EmojiEmotionsIcon sx={{ fontSize: 32 }} />
        </div>
        <TweetButton onClick={handleClick} text="Tweet" color="white" bgcolor="rgb(29 163 240 / 1)" fontSize="16px" width="10%" padding="8px" />
      </div>
    </div>
  )
}

export default NewTweet