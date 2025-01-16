import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/signup`, { name, email, password });
      if (response.status === 201) {
        alert('Signup successful!');
        navigate('/login');
      }
    } catch (error) {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg p-6">
        <div className="text-center mb-6">
          <UserPlus className="w-12 h-12 text-blue-400 mx-auto" />
          <h1 className="text-3xl font-bold text-gray-100">Sign Up</h1>
        </div>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-gray-100 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-300 text-center mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
