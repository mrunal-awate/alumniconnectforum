import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlumniProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    yearOfPassing: '',
    company: '',
    designation: '',
    location: '',
    linkedIn: '',
    role: 'alumni',
    imageUrl: '',
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/profile/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data) {
          setFormData(prev => ({ ...prev, ...res.data }));
          if (res.data.imageUrl) setPreview(res.data.imageUrl);
        }
      } catch (err) {
        console.error('Failed to load profile:', err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const token = localStorage.getItem('token');
      let imageUrl = formData.imageUrl;

      // ✅ Upload image first (NO AUTH header)
      if (image) {
        const formDataImage = new FormData();
        formDataImage.append('image', image);

        const uploadRes = await axios.post('/api/upload', formDataImage, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        imageUrl = uploadRes.data.imageUrl;
      }

      // ✅ Now send updated profile with token
      const updatedProfile = { ...formData, imageUrl };

      await axios.put('/api/profile/update', updatedProfile, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage('Profile updated successfully!');
    } catch (err) {
      console.error('Update error:', err);
      setIsError(true);
      setMessage('Failed to update profile.');
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Alumni Profile Form</h2>

        {message && (
          <p style={isError ? styles.errorText : styles.successText}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" style={styles.input} required />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" style={styles.input} required />
          <input name="yearOfPassing" value={formData.yearOfPassing} onChange={handleChange} placeholder="Year of Passing" style={styles.input} type="number" required />
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" style={styles.input} />
          <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" style={styles.input} />
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" style={styles.input} />
          <input name="linkedIn" value={formData.linkedIn} onChange={handleChange} placeholder="LinkedIn Profile" style={styles.input} />

          <select name="role" value={formData.role} onChange={handleChange} style={styles.input}>
            <option value="alumni">Alumni</option>
            <option value="student">Student</option>
          </select>

          <label style={styles.label}>Upload Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} />
          {preview && (
            <img src={preview} alt="Preview" style={styles.preview} />
          )}


          <button type="submit" style={styles.button}>Update Profile</button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '500px',
    margin: 'auto',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '20px',
    color: '#003366',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#003366',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
  },
  errorText: {
    color: 'red',
    marginBottom: '10px',
  },
  successText: {
    color: 'green',
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '6px',
    display: 'block',
  },
  preview: {
    marginBottom: '15px',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ccc',
  },
};

export default AlumniProfileForm;
