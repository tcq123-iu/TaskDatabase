import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri'; // Import checkbox icons
import Validation from './LoginValidation';
import './Login.css';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false // State to manage password visibility
    });

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const togglePasswordVisibility = () => {
        setValues(prev => ({ ...prev, showPassword: !prev.showPassword }));
    };

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };

    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleAgreeTerms = () => {
        setAgreeTerms(prev => !prev);
    };

    return (
        <div className='d-flex justify-content-end align-items-center vh-100' style={{ backgroundImage: `url('https://img.freepik.com/free-vector/flat-design-homepage-illustration_23-2149245517.jpg?w=1480&t=st=1710504541~exp=1710505141~hmac=bab4a24662902f033cc49eb1fa1670ce8c4965bc799fd0ae157edeaeff7ee278')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', paddingRight: '40px' }}>
            <div className='bg-white p-4 rounded w-30'>
                {/* <h1 className='text-center'>Trello</h1> */}
                <h2 className='text-center'>Sign In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <div className="input-group">
                            <input type={values.showPassword ? "text" : "password"} placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-right' />
                            <button type="button" className="btn btn-outline-secondary rounded-end" style={{ borderColor: 'rgba(0,0,0,0.3)' }} onClick={togglePasswordVisibility}>
                                {values.showPassword ? <FaEye /> : <FaEyeSlash />} {/* Eye icon */}
                            </button>
                        </div>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded'>SIGN IN</button>
                    <div className="mb-3 d-flex align-items-center" style={{ marginTop: '8px' }}>
                        <input type="checkbox" className="me-2" checked={agreeTerms} onChange={handleAgreeTerms} />
                        <p style={{ fontSize: '14px', margin: '0', marginRight: '10px' }}>Remember me</p>
                    </div>
                    <Link to="/signup" className="btn btn-default border w-100 bg-white rounded text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
