import React from 'react';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-[#070e18]">
      {/* 404 Visual with Glow Effect */}
      <div className="relative">
        <h1 className="text-[10rem] md:text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-cyan-700 opacity-20 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-semibold text-white tracking-wide uppercase">
            Oops! Page Not Found
          </p>
        </div>
      </div>

      {/* Message Content */}
      <div className="max-w-md mt-[-20px]">
        <p className="text-gray-400 text-lg mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Action Button */}
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-cyan-500 text-[#070e18] font-bold rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        >
          Back to Homepage
        </Link>
      </div>

      {/* Decorative Background Elements (Optional) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}