import React from 'react'
import logo from "../assets/trello-icon.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="fixed top-0 w-full h-14 px-4 border-b
    shadow-sm bg-white flex items-center">
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <img src={logo} alt="Trollo Icon" height={30} width={40}/>
            
            <div className="space-x-4 md:block md:w-auto flex items-center
                justify-between w-full">
                    {/* <Link to="/"> */}
                        <button> Login</button>
                    {/* </Link> */}
                    {/* <Link to="/"> */}
                        <button> Sign up</button>
                    {/* </Link> */}
                    
            </div>
        </div>
    </div>
  )
}

export default Navbar
