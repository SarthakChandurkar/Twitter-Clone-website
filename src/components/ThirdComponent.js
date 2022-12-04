import React from 'react'
import SearchButton from './SearchButton';
import { selectAllUsers } from '../features/users/usersSlice';
import { useSelector } from 'react-redux';

import UserExcerpt from './UserExcerpt';
const ThirdComponent = () => {
  const allUsers = useSelector(selectAllUsers);
  return (
    <div className="thirdComponent">
      <SearchButton />
      <div className="suggestions">
        <h2 style={{textDecoration:"underline"}}>People May you know</h2>
        {allUsers.map((item,i)=><UserExcerpt key={i} name={item.name} username={item.username} profilePic={item.profilePic} />)}
      </div>
      <div className="suggestions">
        <h2 style={{textDecoration:"underline"}}>Follow Requests</h2>
        {allUsers.map((item,i)=><UserExcerpt key={i} name={item.name} username={item.username} />)}
      </div>
    </div>
  )
}

export default ThirdComponent