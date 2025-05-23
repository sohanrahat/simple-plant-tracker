import React from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-emerald-500">404</h1>
                <div className="mt-4 mb-8">
                    <div className="text-3xl font-semibold mb-2">Oops! Page not found</div>
                    <p className="text-lg text-gray-600">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-outline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Go Back
                    </button>
                    <Link to="/" className="btn btn-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;