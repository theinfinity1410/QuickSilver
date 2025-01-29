import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Generate: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  const generateWebsite = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post<{ message: string }>('/generate', {}, { headers: { Authorization: `Bearer ${token}` } });
      alert(res.data.message);
    } catch (error) {
      alert('Failed to generate website');
    }
  };

  return (
    <div>
      <h2>Generate Your Website</h2>
      <button onClick={generateWebsite}>Generate</button>
    </div>
  );
};

export default Generate;
