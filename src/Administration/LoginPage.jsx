import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import loginBg from '../assets/Loginbackground.jpg';
import chuLogo from '../assets/chu_logo.png';
import { FaHome } from 'react-icons/fa';
import '../index.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      console.log('Login response:', response.data); // Log the response data
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
        const user = response.data;
        setIsFadingOut(true);
        setTimeout(() => {
          if (user.dtype === 'ADMIN') {
            navigate('/homepageadmin');
          } else if (user.dtype === 'ASSISTANT') {
            navigate(`/homepageassistant/${user.specialite}`);
          }
        }, 1500); // 1.5 second delay to allow for fade-out animation
      }
    } catch (error) {
      console.error('Login error:', error); // Log the error
      setError('Invalid credentials');
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-cover bg-center flex items-center justify-center ${isFadingOut ? 'fade-out' : 'fade-in'}`} style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="bg-blue-900 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-3xl w-full mt-16 flex items-center justify-between transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-center mb-6 mr-8">
          <img src={chuLogo} alt="Logo CHU Oujda" className="h-24 mr-3 mt-2 filter-white" />
          <div className="text-left">
            <div className="text-xl text-lg font-bold leading-none text-white">OUJDA</div>
            <div className="border-t border-white my-1"></div>
            <div className="text-xs font-medium leading-none text-white">CENTRE HOSPITALIER UNIVERSITAIRE</div>
          </div>
        </div>
        <div className="border-l-2 border-gray-300 h-32 mx-4"></div>
        <div className="w-full max-w-xs">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="custom-checkbox"
              />
              <label htmlFor="remember_me" className="ml-2 text-white text-sm">Remember me</label>
            </div>
            {error && (
              <div className="mb-4 text-red-500 text-sm">
                {error}
              </div>
            )}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isLoading}
              >
                {isLoading ? <div className="spinner"></div> : 'Login'}
              </button>
              <NavLink to="/" className="text-blue-500 hover:underline flex items-center ml-4">
                <FaHome className="mr-1" /> Back to Home
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
