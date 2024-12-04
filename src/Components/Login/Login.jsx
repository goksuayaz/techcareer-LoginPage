import React, { useState } from 'react';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        console.log('Email:', email);
        console.log('Password:', password);

    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>techcareer.net'e Giriş Yap</div>
            </div>

            <div className='social-media'>
                <text onClick={() => alert('GitHub ile giriş yapılacak.')}>Github</text>
                <text onClick={() => alert('Google ile giriş yapılacak.')}>Google</text>
            </div>

            <div className='inputs'>
                <div className='input'>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='input'>
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>

            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>Login</div>
            </div>

            <div className="forgot-password">
                Lost Password? <span onClick={() => alert('Eposta adresine şifre sıfırlama bağlantısı gönderilecek.')}>Click Here!</span>

            </div>
        </div>
    );
};

export default Login;
