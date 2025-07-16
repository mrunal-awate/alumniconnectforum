import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

const AlumniProfileView = () => {
  const { id } = useParams();
  const [alumni, setAlumni] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await api.get(`/alumni/${id}`);
        setAlumni(res.data);
      } catch (err) {
        console.error(err);
        setError('❌ Failed to load profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, [id]);

  if (loading) return <div style={styles.status}>🔄 Loading profile...</div>;
  if (error) return <div style={{ ...styles.status, color: 'red' }}>{error}</div>;
  if (!alumni) return <div style={styles.status}>Profile not found.</div>;

  const {
    fullName,
    email,
    phone,
    yearOfPassing,
    batch,
    company,
    designation,
    location,
    linkedIn,
    role,
    imageUrl,
  } = alumni;

  const avatarUrl = imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=004080&color=fff`;

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <div style={styles.avatarWrapper}>
          <img src={avatarUrl} alt="Profile" style={styles.avatar} />
        </div>
        <h2 style={styles.name}>{fullName}</h2>
        <p><strong>📧 Email:</strong> {email}</p>
        <p><strong>📱 Phone:</strong> {phone || 'N/A'}</p>
        <p><strong>🎓 Batch:</strong> {yearOfPassing || batch || 'N/A'}</p>
        <p><strong>🏢 Company:</strong> {company || 'N/A'}</p>
        <p><strong>💼 Designation:</strong> {designation || 'N/A'}</p>
        <p><strong>📍 Location:</strong> {location || 'N/A'}</p>
        <p><strong>🧾 Role:</strong> {role || 'N/A'}</p>

        {linkedIn && (
          <p>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" style={styles.link}>
              🔗 LinkedIn Profile
            </a>
          </p>
        )}

        <Link to="/members" style={styles.backLink}>← Back to Members</Link>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#f2f6ff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #004080',
  },
  name: {
    fontSize: '1.9rem',
    color: '#004080',
    marginBottom: '15px',
    fontWeight: '600',
  },
  link: {
    color: '#0077b5',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  backLink: {
    display: 'inline-block',
    marginTop: '20px',
    color: '#004080',
    textDecoration: 'underline',
    fontSize: '14px',
  },
  status: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
  }
};

export default AlumniProfileView;
