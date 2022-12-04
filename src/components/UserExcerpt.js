import React from 'react'
import ProfilePic from './ProfilePic';
import TweetButton from './TweetButton';
const UserExcerpt = ({name,username,profilePic="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"}) => {
    return (
        <div className="profile">
            <div className="userIcon">
                <ProfilePic src={profilePic} />
            </div>
            <div className="nameAndUserName">
                <div className="name">{name}</div>
                <div className="userName">{username}</div>
            </div>
            <div className="followButton">
                <TweetButton class="fol" text="Follow" color="black" bgcolor="white" fontSize="16px" width="90%" padding="8px" />
            </div>
        </div>
    )
}

export default UserExcerpt