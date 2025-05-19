import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually handle authentication (e.g., API call)
    console.log(isLogin ? 'Logging in:' : 'Signing up:', formData);

    // Redirect after login/signup (simulate)
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ background: '#1e1e1e', padding: '40px', borderRadius: '10px', width: '350px' }}>
        <h2 style={{ textAlign: 'center' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {!isLogin && (
          <div style={{ marginBottom: '15px' }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', marginTop: '5px' }}
            />
          </div>
        )}

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', marginTop: '5px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '5px' }}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            style={{ color: '#0dcaf0', cursor: 'pointer' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
