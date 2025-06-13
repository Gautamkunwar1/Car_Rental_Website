import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300  text-center px-4">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-xl mt-4 mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
