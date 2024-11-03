/* eslint-disable no-unused-vars */
import React from 'react';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#0e0e0f] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Spline 
          scene="https://prod.spline.design/nu7Km7VgaPlEYHKA/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 text-center px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-white text-[#0e0e0f] font-['Public Sans'] rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium"
        >
          RETURN HOME
        </button>
      </div>
    </div>
  );
}