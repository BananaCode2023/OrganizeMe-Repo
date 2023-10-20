import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Header';
import Home from './pages/Index'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
// import {UserContextProvider} from '../context/userContext'
import Inbox from './pages/Inbox';
import About from './pages/About';
import Features from './pages/features';
import Index from './pages/Index';


function App() {

  return (
    <>
    {/* <UserContextProvider> */}
      <Toaster position='top-right' toastOptions={{duration: 2500}}/>
      <Routes>
        <Route path='/' element= {<Index />}/>
        <Route path='/auth/register' element= {<Register />}/>
        <Route path='/auth/login' element= {<Login />}/>
        <Route path='/inbox' element= {<Inbox />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/features' element= {<Features />}/>
      </Routes>
    {/* </UserContextProvider> */}
    </>
  )
}

export default App
