import './App.css'
import {Routes, Route} from 'react-router-dom';
// import Navbar from './components/Header';
// import Home from './pages/Index'
import Register from './pages/Register'
import Login from './pages/Login'
// import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import Inbox from './pages/Inbox';
import About from './pages/About';
import Features from './pages/features';
import Index from './pages/Index';
import Notifications from './pages/Notifications';
import Priorities from './pages/Priorities';
import Today2 from './pages/Today2';
import Categories from './pages/Categories';


function App() {

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/priorities" element={<Priorities />} />
        <Route path="/today2" element={<Today2 />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </>
  );
}

export default App
