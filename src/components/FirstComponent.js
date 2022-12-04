import React from 'react'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import ProfilePic from './ProfilePic';
import TweetButton from './TweetButton';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../features/users/usersSlice';

const FirstComponent = () => {
  
  
  return (
    <div className='firstComponent'>
        <div className="logo">
        <TwitterIcon sx={{fontSize:34}}/>
        </div>
        <div className="navbar">
            <div className="navbarItem"><HouseOutlinedIcon sx={{fontSize:32}} /> Home</div>
            <div className="navbarItem"><BookmarksOutlinedIcon sx={{fontSize:32}} /> Bookmarks</div>
            <div className="navbarItem"><MessageOutlinedIcon sx={{fontSize:32}} /> Messages</div>
            <div className="navbarItem"><AccountCircleOutlinedIcon sx={{fontSize:32}}/> Profile</div>
            <div className="navbarItem"><MoreHorizOutlinedIcon sx={{fontSize:32}}/> More</div>
            <TweetButton className="navbarItem" text="Tweet" color="white" bgcolor="rgb(29 163 240 / 1)" fontSize="20px" width="70%" padding="10px"/>
        </div>
        <div className="profile">
          <div className="userIcon">
            <ProfilePic src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
          </div>
          <div className="nameAndUserName">
            <div className="name">sarthak</div>
            <div className="userName">sarthak_s_c</div>
          </div>
          <div className="more">
              <MoreHorizOutlinedIcon sx={{fontSize:32}} />
          </div>
        </div>
    </div>
  )
}

export default FirstComponent