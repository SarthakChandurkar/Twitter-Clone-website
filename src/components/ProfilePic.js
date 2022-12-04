import React from 'react'

const ProfilePic = ({src,alt="...Loading"}) => {
  return (
    <img src={src} alt={alt} className='profileIcon'/>
  )
}

export default ProfilePic