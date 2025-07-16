import React from 'react';

const Events = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Upcoming Events</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>🎓 <strong>Alumni Meet 2025</strong> — 15th Aug</li>
          <li style={styles.listItem}>💼 <strong>Career Talk by Google Alum</strong> — 22nd July</li>
          <li style={styles.listItem}>📢 <strong>Placement Prep Webinar</strong> — 30th July</li>
        </ul>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e3f2fd, #90caf9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
  },
  container: {
    textAlign: 'center',
    maxWidth: '700px',
  },
  heading: {
    fontSize: '2rem',
    color: '#0d47a1',
    marginBottom: '25px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '15px',
    lineHeight: '1.8',
    background: '#ffffffaa',
    padding: '12px 20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
};

export default Events;
