import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>LOGIN </h1>

            <form >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='your email' />
                </div>
<br />
                <div className='form-control'>
                    <label htmlFor="email">Password</label>
                    <input type="password" name='email' placeholder='your password' />
                </div>
                <br />
                <input className='btn' type="submit" value='login' />
                <p>New to ema jhon? <Link to='/signup'>Create a new account</Link></p>
            </form>
        </div>
    );
};

export default Login;