import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Validation from './SignUpValidation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri'; // Import checkbox icons
import axios from 'axios';

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email:'',
        password:''
    })

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password) {
        }
        axios.post('http://localhost:8800/signup', values)
        .then(res => console.log(res))
        .then(res => console.log(err));
    }

    const togglePasswordVisibility = () => {
        setValues(prev => ({ ...prev, showPassword: !prev.showPassword }));
    };

    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleAgreeTerms = () => {
        setAgreeTerms(prev => !prev);
    };

  return (
    <div className='d-flex justify-content-end align-items-center vh-100' style={{ backgroundImage: `url('https://img.freepik.com/premium-vector/company-registration-service-start-new-business-legal-term-ownership-entrepreneur-assistant-confidence-businessman-holding-pen-success-sign-company-document-with-stamped_212586-1563.jpg?w=900')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', padding: '20px' }}>
        <div className='bg-white p-3 rounded w-30' style={{ width: '450px'}}>
            {/* <h1 className='text-center'>Trello</h1> */}
            <h2 className='text-center'><strong>Sign Up</strong></h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-4' style={{ fontSize: '20px'}}>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder='Enter Name'name='name' onChange={handleInput} className='form-control rounded'/>
                    {errors.name && <span className='text-danger'> {errors.name}</span>}
                </div>
                <div className='mb-4' style={{ fontSize: '20px'}}>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-4' style={{ fontSize: '20px'}}>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <div className="input-group">
                        <input type={values.showPassword ? "text" : "password"} placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-right' />
                        <button type="button" className="btn btn-outline-secondary bg-white rounded-end" style={{ borderColor: 'rgba(0,0,0,0.3)' }} onClick={togglePasswordVisibility}>
                            {values.showPassword ? <FaEye /> : <FaEyeSlash />} {/* Eye icon */}
                        </button>
                    </div>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded'><strong>SIGN UP</strong></button>
                <div className="mb-3 d-flex align-items-center" style={{ marginTop: '8px' }}>
                    <input type="checkbox" className="me-1" checked={agreeTerms} onChange={handleAgreeTerms} />
                    <p style={{ fontSize: '15px', margin: '0', marginRight: '8px' }}>You are agree to our terms and policies</p>
                </div>
                <Link to="/" className="btn btn-default border w-100 bg-white rounded text-decoration-none">Already have an account? <strong>SIGN IN</strong></Link>
            </form>
        </div>
    </div>
  )
}

export default Signup;