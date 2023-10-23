import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import '../css/register.css'
import signupHeroImg from '../assets/signup-hero-img.png'
import signupLogo from '../assets/newLogo.png'
import googleLogo from '../assets/google-logo.png'
import facebookLogo from '../assets/facebook-logo.png'

function Register() {
   const navigate = useNavigate()

  const[username, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3333/auth/register', {username, email, password})
      .then(result => {
        navigate('/auth/login')
        console.log(result)
        toast.success('Thank you for signing up. Please Log-in')
      })
      .catch(err => console.log(err))
  }

  const registerUser = async (e) => {
    e.preventDefault()
    const {username, email, password} = data
    try{
      const {data} = await axios.post('/register', {
        username, email, password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success('Login Successful. Welcome!')
        navigate('/login')
      }
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <main className='signup-page'>        
        <div className='signup-col1'>
          <a href="/"><img src={signupLogo} alt="organizeMe-logo" id='login-logo' /></a>
          <h2>Create an Account & Get Started</h2>

          <form className='signup-form' 
          onSubmit={handleSubmit}
          >

            <input 
            type="text" 
            name="username" 
            id="username"
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)} 
            />



            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='&#9993; Email'
            onChange={(e) => setEmail(e.target.value)} 
            />

            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='&#128273; Password'
            onChange={(e) => setPassword(e.target.value)} 
            />
            
            <button 
            type='submit'
            name='submit' 
            className='btn btn-success'>Sign Up</button>
          </form>

          <hr className='or-line'/>
          <p className='or-text'>
            <small>or sign up with</small>
          </p>

          <ul>
            <li><img src={googleLogo} alt="google-logo" className='login-option-btns'/>Google</li>
            <li><img src={facebookLogo} alt="google-logo" className='login-option-btns'/>Facebook</li>
          </ul>

          <small><p>Already have an account? <a href="/auth/login">Log in</a></p></small>
          

          <p className='login-signup-footer'><small>© 2023 OrganizeMe All Rights Reserved</small></p>
        </div>
        <div className='signup-col2'>
          <h2>Welcome Aboard</h2>
          <p>Welcome to Organize Me! Get ready to unlock a world of possibilities. Your journey starts here. </p>
          <img src={signupHeroImg} alt="" />
        </div>
      </main>
    </>


    // <div>
    //   <h1>SIGNUP</h1>
    //   <form onSubmit={registerUser}>
    //     <label>Username</label>
    //     <input 
    //     type="text" 
    //     placeholder='enter username...'
    //     value={data.username}
    //     onChange={(e) => setData({...data, username: e.target.value})}
    //     />

    //     <label>Email</label>
    //     <input 
    //     type="email" 
    //     placeholder='enter email...'
    //     value={data.email}
    //     onChange={(e) => setData({...data, email: e.target.value})}
    //     />

    //     <label>Password</label>
    //     <input 
    //     type="password" 
    //     placeholder='enter password...'
    //     value={data.password}
    //     onChange={(e) => setData({...data, password: e.target.value})}
    //     />

    //     <button type='submit'>Submit</button>

        

       

    //   </form>

    // </div>
  )
}

export default Register