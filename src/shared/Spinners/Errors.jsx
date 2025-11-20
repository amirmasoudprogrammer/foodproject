import React from 'react';

function Errors({error}) {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md shadow-md animate-fade-in" role="alert">
                <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" />
                </svg>
                <span className="font-medium">{error}</span>
            </div>
        </div>
    );
}

export default Errors;