import { useState } from 'react'
import LandingPage from './pages/LandingPage';

import './index.css'
import Navbar from './components/Navbar';
import LoginForm from './components/User/LoginForm';
import { Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </div>
    </>
    
   
    
  )
}

export default App
