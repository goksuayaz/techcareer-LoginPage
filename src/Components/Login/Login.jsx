import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>techcareer.net'e Giriş Yap</div>
            </div>

            <div className='social-media'>
                <text>Github</text>
                <text>Google</text>
            </div>

            <div className='inputs'>
                <div className='input'>
                    <input type='email' placeholder='Email' />
                </div>
                <div className='input'>
                    <input type='password' placeholder='Password' />
                </div>
            </div>

            <div className="submit-container">
                <div className="submit">Login</div>
            </div>

            <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
            </div>
        </div>
    );
};

export default Login;
