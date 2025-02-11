import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';

const OAuthCallback = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleCallback = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                const code = params.get('code');
                const state = params.get('state');
                const storedState = localStorage.getItem('oauth_state');

                if (state !== storedState) {
                    throw new Error('Invalid state parameter');
                }

                // For now, we'll just log the code - we'll implement token exchange later
                console.log('Authorization code:', code);
                localStorage.removeItem('oauth_state');
                navigate('/');
                
            } catch (err) {
                setError(err.message);
            }
        };

        handleCallback();
    }, [navigate]);

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-xl font-bold text-red-600 mb-2">Authentication Error</h1>
                    <p className="text-gray-600">{error}</p>
                    <button
                        onClick={() => navigate('/login')}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-xl font-bold mb-2">Authenticating...</h1>
                <p className="text-gray-600">Please wait while we complete the authentication process.</p>
            </div>
        </div>
    );
};

export default OAuthCallback;