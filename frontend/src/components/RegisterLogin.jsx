import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const RegisterLogin = ({ onSuccess, defaultRole = 'student' }) => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    type: 'register',
    role: defaultRole,
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    const url =
      formData.type === 'register'
        ? '/api/auth/register'
        : '/api/auth/login';

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    if (formData.type === 'register') {
      payload.role = formData.role;
    }

    try {
      const res = await axios.post(url, payload);

      if (formData.type === 'login') {
        login(res.data.token);
        setMessage('Login successful!');
        setIsError(false);
        showTemporaryPopup();
        if (onSuccess) setTimeout(onSuccess, 500); // delay close
      } else {
        setMessage(`Registration successful! Please login now as a ${formData.role}.`);
        setIsError(false);
        showTemporaryPopup();
        setFormData({ email: '', password: '', type: 'login', role: 'student' });
        if (onSuccess) setTimeout(onSuccess, 1800); // delay close
      }
    } catch (err) {
      console.error('Auth error:', err.response?.data?.message || err.message);
      setIsError(true);
      setMessage(
        err.response?.data?.message || `Failed to ${formData.type}. Please try again.`
      );
      showTemporaryPopup();
    }
  };

  const showTemporaryPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1800);
  };

  const isRegister = formData.type === 'register';

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h2 style={styles.heading}>
          {isRegister
            ? formData.role === 'student'
              ? 'Student Registration'
              : 'Alumni Registration'
            : 'Login'}
        </h2>

        {showPopup && (
          <div style={isError ? styles.popupError : styles.popupSuccess}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          {isRegister && (
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
          )}

          <button type="submit" style={styles.button}>
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p style={styles.toggleText}>
          {isRegister ? 'Already have an account?' : 'New user?'}{' '}
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                type: prev.type === 'register' ? 'login' : 'register',
              }))
            }
            style={styles.toggleBtn}
          >
            {isRegister ? 'Login here' : 'Register here'}
          </button>
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '0',
    margin: '0',
    backgroundColor: 'transparent',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    position: 'relative',
  },
  heading: {
    marginBottom: '20px',
    color: '#004080',
  },
  form: {
    maxWidth: '360px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#004080',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
  },
  toggleText: {
    marginTop: '15px',
    fontSize: '14px',
  },
  toggleBtn: {
    background: 'none',
    border: 'none',
    color: '#004080',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  popupSuccess: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  popupError: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
};

export default RegisterLogin;
