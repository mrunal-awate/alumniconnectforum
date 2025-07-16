import React, { useEffect, useState } from 'react';
import api from '../api'; // your axios instance

const AdminDashboard = () => {
  const [pendingAlumni, setPendingAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchPendingAlumni();
  }, []);

  const fetchPendingAlumni = async () => {
    try {
      const res = await api.get('/alumni/pending');
      setPendingAlumni(res.data);
    } catch (err) {
      console.error('Error fetching pending alumni:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (id) => {
    try {
      await api.put(`/alumni/verify/${id}`);
      setMessage('✅ Alumni verified successfully!');
      setPendingAlumni(prev => prev.filter(alumni => alumni._id !== id));
    } catch (err) {
      console.error('Verification failed:', err);
      setMessage('❌ Failed to verify alumni.');
    }

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛡️ Admin Verification Dashboard</h2>

      {loading ? (
        <p style={styles.status}>Loading pending accounts...</p>
      ) : pendingAlumni.length === 0 ? (
        <p style={styles.status}>No pending alumni to verify 🎉</p>
      ) : (
        <div style={styles.grid}>
          {pendingAlumni.map((alumni) => (
            <div key={alumni._id} style={styles.card}>
              <h3 style={styles.name}>{alumni.fullName || 'Unnamed Alumni'}</h3>
              <p><strong>Email:</strong> {alumni.email}</p>
              <p><strong>Role:</strong> {alumni.role}</p>
              <button onClick={() => handleVerify(alumni._id)} style={styles.button}>
                ✅ Approve
              </button>
            </div>
          ))}
        </div>
      )}

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    minHeight: '80vh',
    backgroundColor: '#f4f8ff',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#004080',
  },
  status: {
    fontSize: '1.2rem',
    color: '#555',
    marginTop: '20px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '280px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  name: {
    fontSize: '1.3rem',
    marginBottom: '10px',
    color: '#004080',
  },
  button: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    fontWeight: 'bold',
    color: '#007700',
  }
};

export default AdminDashboard;
