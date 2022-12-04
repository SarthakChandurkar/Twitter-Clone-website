import React, { useRef, useState, useEffect } from 'react'
import TweetButton from './TweetButton'
import { useLoginMutation } from '../features/auth/authApiSlice'
import { setCredentials } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()
  useEffect(() => {
    userRef.current.focus()
  }, [])
  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userData = await login({ username:user, password:pwd }).unwrap()
      dispatch(setCredentials({accessToken:userData, user }))
      setUser('')
      setPwd('')
      navigate('/')
    } catch (err) {
      console.log(err)
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }

  }

  const handleUserInput = (e) => setUser(e.target.value)

  const handlePwdInput = (e) => setPwd(e.target.value)

  const content = isLoading ? <p>...Loading</p> : (
    <div className='login'>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h3>Login</h3>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className="username"><input ref={userRef} value={user} onChange={handleUserInput} placeholder='Username' type="text" id="username" style={{ width: "100%", height: "30px", border: "1px solid white", borderRadius: "20px", color: "black", padding: "0 10px", fontSize: "16px" }} /></div>
        <div className="password"><input placeholder='Password' id="password" onChange={handlePwdInput} value={pwd} type="password" style={{ width: "100%", height: "30px", border: "1px solid white", borderRadius: "20px", color: "black", padding: "0 10px", fontSize: "16px" }}  /></div>
        <button type='submit' style={{background:"none",border:"none"}}><TweetButton text="Login" color="white" bgcolor="rgb(29 163 240 / 1)" fontSize="16px" width="100%" padding="8px" /></button>
      </form>
    </div>
  )
  return content;
}

export default Login