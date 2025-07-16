import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>The page you're looking for doesn't exist.</p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f2f2f2',
    textAlign: 'center',
    padding: '2rem',
  },
  heading: {
    fontSize: '3rem',
    color: '#004080',
  },
  text: {
    fontSize: '1.2rem',
    marginTop: '1rem',
  },
};

export default NotFound;
