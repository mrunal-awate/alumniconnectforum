import React, { useState } from 'react';
import Modal from './Modal';
import RegisterLogin from './RegisterLogin';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [defaultRole, setDefaultRole] = useState('student');

  const openModalWithRole = (role) => {
    setDefaultRole(role);
    setShowModal(true);
  };

  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Alumni Connect</h1>
        <p style={styles.subtitle}>
          Bridging students and alumni for growth, mentorship, and careers.
        </p>
        <div style={styles.buttonContainer}>
          <button onClick={() => openModalWithRole('student')} style={styles.button}>
            🎓 Student Register/Login
          </button>
          <button onClick={() => openModalWithRole('alumni')} style={{ ...styles.button, backgroundColor: '#00796b' }}>
            👨‍💼 Alumni Register/Login
          </button>
        </div>
      </div>

      {/* ✅ Unified modal for both student & alumni */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <RegisterLogin defaultRole={defaultRole} onSuccess={() => setShowModal(false)} />
      </Modal>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #d7efff, #aee1f9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#0d47a1',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#333',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '14px 24px',
    fontSize: '1rem',
    backgroundColor: '#004080',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default HeroSection;
