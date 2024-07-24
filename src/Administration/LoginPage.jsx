import React from 'react';
import loginBg from '../assets/Loginbackground.jpg';
import chuLogo from '../assets/chu_logo.png';
import '../index.css'; 

function LoginPage() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="bg-blue-900 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-3xl w-full mt-16 flex items-center justify-between">
        <div className="flex items-center justify-center mb-6 mr-8">
          <img src={chuLogo} alt="Logo CHU Oujda" className="h-24 mr-3 mt-2 filter-white" /> 
          <div className="text-left">
            <div className="text-xl text-lg font-bold leading-none text-white">OUJDA</div>
            <div className="border-t border-white my-1"></div>
            <div className="text-xs font-medium leading-none text-white">CENTRE HOSPITALIER UNIVERSITAIRE</div>
          </div>
        </div>
        <div className="border-l-2 border-gray-300 h-32 mx-4"></div> {/* Vertical line */}
        <div className="w-full max-w-xs">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
