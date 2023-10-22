import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import '../css/login.css'
// import Header from "../components/Header"

import loginHeroImg from '../assets/login-hero-img.png'
import loginLogo from '../assets/organizeMeLogo.png'
import googleLogo from '../assets/google-logo.png'
import facebookLogo from '../assets/facebook-logo.png'


function Login() {
  
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3333/auth/login', {email, password})
      .then(result => {
        window.localStorage.setItem("id", result.data.id)
        navigate('/inbox')
        console.log(result)
      })
      toast.success('Successfully Logged-In')
      .catch(err => console.log(err))
  }

  return (
    <>
      <main className='login-page'>
        <div className='login-col1'>
          <h2>Welcome Organizers</h2>
          <p>Get a chance to explore the best to-do list app. Unlock your productivity potential with OrganizeMe</p>
          <img src={loginHeroImg} alt="" />
        </div>
        
        <div className='login-col2'>
          <a href="/"><img src={loginLogo} alt="organizeMe-logo" id='login-logo' /></a>
          <h2>Login to your Account</h2>
          <p className='login-heading-text'>Welcome back! Select method to log in:</p>

          
            <li className="login-option" ><img src={googleLogo} alt="google-logo" className='login-option-btns'/>Google</li>
          

          <hr className='or-line'/>
          <p className='or-text'>
            <small>or continue with email</small>
          </p>
          

          <form className='login-form' 
          // onSubmit={loginUser}
          onSubmit={handleSubmit}
          >
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='✉️ Email' 
            className='login-input'
            // value={data.email}
            // onChange={(e) => setData({...data, email: e.target.value})}  
            onChange={(e) => setEmail(e.target.value)} 
            />

            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='🔐 Password' 
            className='login-input'
            // value={data.password}
            // onChange={(e) => setData({...data, password: e.target.value})}
            onChange={(e) => setPassword(e.target.value)} 
            />

            <div className='remember-me'>
              <input type="checkbox" name='remember-me-checkbox'/>
              <label htmlFor="remember-me-checkbox">
                <small>Remember Me</small>
              </label>
            </div>
            
            <button 
            type='submit'
            className='btn btn-success'>Login</button>
          </form>

          <small><p>Don't have an account? <a href="/auth/register">Sign-up now!</a></p></small>

          <p className='login-signup-footer'><small>© 2023 OrganizeMe All Rights Reserved</small></p>
        </div>
      </main>
    </>
  )
}

export default Login