import { useState } from 'react'
import Navbar from '../components/Navbar';



const MarketingPage = () => {
    return (
        
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col">
                <div className='mb-1 flex items-center border shadow-sm p-4
                bg-amber-100 text-amber-700 rounded-full uppercase'>

                    No 1 task management
                </div>
                <h1 className='text-3xl md:text-6l text-center text-neutral-800 mb-6'>
                    Trollo trolls your teammate
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-sky-600 to-blue-600 text-white px-4 py-2 rounded-md pb-4 w-fit">
                    Pass PDM.
                </div>
            </div>
            <div className=
                'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
                Collaborate, never teamworks, need Trollo for pass A+
            </div>
            <div>
            <img src="https://img.freepik.com/free-vector/flat-scrum-task-board-with-color-stick-paper-notes_88138-931.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais" alt="placeholder" width={450} />
            </div>
            
        </div>
    );
};

export default MarketingPage;
