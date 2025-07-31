import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Adjust path if needed
import { showTemporaryPopup } from '../utils/popup'; // adjust the path

// import api from '../api';


const RegisterLogin = ({ onSuccess, defaultRole = 'student' }) => {
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

  const { email, password, type, role } = formData;

  try {
    if (type === 'register') {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { role }, // store role in user_metadata
        },
      });

      if (signUpError) throw signUpError;

      // ✅ Insert into alumni table
      const userId = signUpData.user?.id;

      const { error: insertError } = await supabase.from('alumni').insert([
        {
          user_id: userId, // assumes your alumni table has this field
          email,
          role,
          approved: false, // default unapproved
          fullName: '',    // can be updated later
        },
      ]);

      if (insertError) {
        console.error('Insert alumni error:', insertError);
        setMessage('Registered, but saving profile failed.');
        setIsError(true);
        showTemporaryPopup();
        return;
      }

      setMessage(`🎉 Registration successful! Check your email to confirm.`);
      setFormData({ email: '', password: '', type: 'login', role: 'student' });
      setIsError(false);
      showTemporaryPopup(setShowPopup);
      if (onSuccess) setTimeout(onSuccess, 1800);
    } else {
      // ✅ LOGIN
      const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) throw loginError;

      setMessage('✅ Login successful!');
      setIsError(false);
      showTemporaryPopup(setShowPopup);
      if (onSuccess) setTimeout(onSuccess, 500);
    }
  } catch (err) {
    console.error(err.message);
    setIsError(true);
    setMessage(err.message || `Failed to ${formData.type}.`);
    showTemporaryPopup();
  }
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

// (same styles as before)
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
