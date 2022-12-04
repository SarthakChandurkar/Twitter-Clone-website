import React from 'react'
import ProfilePic from './ProfilePic'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { selectAllUsers } from '../features/users/usersSlice';
import { useSelector } from 'react-redux';

const Tweet = ({userId,tweet}) => {
  const allUsers = useSelector(selectAllUsers)
  const thatUser = allUsers.find((item)=>item.id===userId)
  
  return (
    <div className="tweet">
        <ProfilePic src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
        <div className='right'>
            <div className="nameUsernameTimeago">
                <span>{thatUser.name}</span>
                <span>{thatUser.username}</span>
                <span>2h ago</span>
                <MoreHorizOutlinedIcon className='moreIcon' sx={{fontSize:20}}/>
            </div>
            <div className="tweetScript">{tweet}</div>
            <div className="reactions">
                <ThumbUpIcon sx={{fontSize:"24px"}}/>
                <ModeCommentRoundedIcon sx={{fontSize:"24px"}} />
                <KeyboardReturnRoundedIcon sx={{fontSize:"24px"}} />
                <SendRoundedIcon sx={{fontSize:"24px"}} />
            </div>
        </div>
    </div>
  )
}

export default Tweet