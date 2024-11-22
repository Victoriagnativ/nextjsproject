import React, { useState } from 'react';

const LoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            {!isLoggedIn ? (
                <button
                    onClick={handleLogin}
                    style={{
                        padding: '3px 10px',
                        fontSize: '16px',
                        background:'black',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',

                    }}
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
