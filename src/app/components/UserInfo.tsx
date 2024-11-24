import React, { useState } from 'react';

const LoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className='box'>
            {!isLoggedIn ? (
                <button className='info-user'
                    onClick={handleLogin}
                >
                    Login
                </button>
            ) : (
                <p>You are logged in!</p>
            )}
        </div>
    );
};

export default LoginButton;
