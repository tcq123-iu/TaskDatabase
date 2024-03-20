import React, { useState } from 'react'

const Sidebar = () => {
    const[open, setOpen] = useState(true);
  return (
    <div className='flex'>
        <div className='w-60 h-screen bg-slate-400'>
            <img 
                src='./src/assets/control.png'
                className="absolute cursor-pointer rounded-full-right-4 top-6 w-7 border-2 border-gray"/>
        </div>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
            
        </div>
      
    </div>
  )
}

export default Sidebar
