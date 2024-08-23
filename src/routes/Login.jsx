import React, { useState } from 'react';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Hello</h2>
                <small className='create'>Sign in to eBay or <a href=""> create an account</a></small>
                <form className='form' onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="email"
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Continue</button>
                </form>

                <div class="stay-signed-in">
                    <label class="checkbox-container">
                        <input type="checkbox" />
                        <span>Stay signed in</span>
                    </label>
                    <p class="info-text">
                        Using a public or shared device? <br />
                        Uncheck to protect your account.
                    </p>
                    <a href="#" class="learn-more">
                        Learn more <span class="arrow">➚</span>
                    </a>
                    <div class="info-box">
                        <div class="info-content">
                            <div class="icon">i</div>
                            <p>
                                With this box checked, we'll keep you signed in, making it easier to bid
                                and buy. You'll also be all set to pay if you've saved your payment
                                info. You can always turn off this feature in My eBay. We may ask you to
                                sign in again for some activities, such as making changes to your
                                account.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
