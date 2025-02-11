import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <nav className="mb-8">
                <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
            </nav>
            {/* Insert privacy policy content here */}
        </div>
    );
};

export default PrivacyPolicy;