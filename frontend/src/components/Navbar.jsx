import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null); // 'member' or 'alumni'
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      ...styles.navbar,
      background: scrolled
        ? 'linear-gradient(to right, #003973, #E5E5BE)'
        : 'linear-gradient(to right, #16222A, #3A6073)',
      boxShadow: scrolled ? '0 4px 10px rgba(0,0,0,0.3)' : 'none',
      transition: 'all 0.5s ease'
    }}>
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <img src="/images/sinhgad_logo.jfif" alt="College Logo" style={styles.logo} />
          <span style={styles.title}>Alumni Association Of SITS</span>
        </div>

        <ul style={styles.navList}>
          <li><Link style={styles.link} to="/">Home</Link></li>

          {/* Member Dropdown */}
          <li
            style={styles.dropdown}
            onMouseEnter={() => setDropdownVisible('member')}
            onMouseLeave={() => setDropdownVisible(null)}
          >
            <div style={styles.link}>Member ▾</div>
            {dropdownVisible === 'member' && (
              <div style={styles.dropdownContent}>
                <Link to="/members" style={styles.dropdownLink}>Alumni List</Link>
                <Link to="/search" style={styles.dropdownLink}>Search</Link>
              </div>
            )}
          </li>

          <li><Link style={styles.link} to="/membership">Membership</Link></li>
          <li><Link style={styles.link} to="/events">Events</Link></li>
          <li><Link style={styles.link} to="/about">About Us</Link></li>
          <li><Link style={styles.link} to="/contact">Contact Us</Link></li>

          {/* Alumni Corner Dropdown */}
          <li
            style={styles.dropdown}
            onMouseEnter={() => setDropdownVisible('alumni')}
            onMouseLeave={() => setDropdownVisible(null)}
          >
            <div style={styles.link}>Alumni Corner ▾</div>
            {dropdownVisible === 'alumni' && (
              <div style={styles.dropdownContent}>
                <Link to="/alumni-sessions" style={styles.dropdownLink}>Alumni Sessions</Link>
                <Link to="/internships" style={styles.dropdownLink}>Job / Internship</Link>
                <Link to="/connect-forum" style={styles.dropdownLink}>Connect Forum</Link>
              </div>
            )}
          </li>

          {isAuthenticated && (
            <>
              <li>
                <Link to="/alumni-profile" style={styles.link}>Alumni Profile</Link>
              </li>
              <li>
                <button onClick={logout} style={styles.logoutBtn}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
    padding: '12px 0',
  },
  container: {
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logo: {
    height: '75px',
    width: '50%',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#ffffff',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
  },
  link: {
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '500',
    textDecoration: 'none',
    position: 'relative',
    cursor: 'pointer',
    padding: '8px 10px',
  },
  logoutBtn: {
    backgroundColor: '#ff4d4d',
    border: 'none',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'relative',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    borderRadius: '5px',
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '180px',
    zIndex: 999,
  },
  dropdownLink: {
    padding: '10px 16px',
    color: '#000',
    textDecoration: 'none',
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',
  },
};

export default Navbar;
