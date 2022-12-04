import React from 'react'
import TweetButton from './TweetButton'

const Register = ({err=null}) => {
  return (
    <div className='login'>
      <h3>Register</h3>
      {err!==null?<p>{err}</p>:null}
      <div className="name"><input placeholder='Name' type="text" name="" id="" style={{width:"100%",height:"30px",border:"1px solid white",borderRadius:"20px",color:"black",padding:"0 10px",fontSize:"16px"}}/></div>
      <div className="username"><input placeholder='Username' type="text" name="" id="" style={{width:"100%",height:"30px",border:"1px solid white",borderRadius:"20px",color:"black",padding:"0 10px",fontSize:"16px"}}/></div>
      <div className="password"><input placeholder='Password' type="password" name="" id=""  style={{width:"100%",height:"30px",border:"1px solid white",borderRadius:"20px",color:"black",padding:"0 10px",fontSize:"16px"}}/></div>
      <TweetButton text="Sign Up" color="white" bgcolor="rgb(29 163 240 / 1)" fontSize="16px" width="20%" padding="8px"/>
    </div>
  )
}

export default Register