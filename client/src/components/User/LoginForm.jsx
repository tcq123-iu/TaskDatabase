import React from 'react';
import Navbar from '../Navbar';

const LoginForm = () => {
  return (
    <div className='flex w-full h-screen rounded-3xl'>
        <Navbar/>
      <div className='m-auto'>
        <h1 className='text-3xl font-bold mb-4'>Welcome Back</h1>
        <p className='text-gray-600 mb-4'>Welcome back! Please enter your details</p>
        <div>
          <div className='mb-4'>
            <label className='block mb-2'>E-mail Address</label>
            <input
              className='border border-gray-300 px-4 py-2 rounded-md w-full'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Password</label>
            <input
              className='border border-gray-300 px-4 py-2 rounded-md w-full'
              placeholder='Enter your password'
              type='password'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;