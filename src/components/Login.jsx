import React from 'react';
import config from '../config';

const Login = () => {
    const handleLogin = () => {
        const authUrl = `https://www.facebook.com/v${config.apiVersion}/dialog/oauth?` +
            `client_id=${config.appId}` +
            `&redirect_uri=${encodeURIComponent(config.redirectUri)}` +
            `&scope=${encodeURIComponent(config.scope)}` +
            `&response_type=code` +
            `&state=${generateState()}`;
        
        window.location.href = authUrl;
    };

    const generateState = () => {
        const state = Math.random().toString(36).substring(7);
        localStorage.setItem('oauth_state', state);
        return state;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Meta Ads Explorer</h1>
                <p className="mb-4 text-gray-600">
                    Connect with Meta to explore public ads data
                </p>
                <button
                    onClick={handleLogin}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Connect with Meta
                </button>
            </div>
        </div>
    );
};

export default Login;