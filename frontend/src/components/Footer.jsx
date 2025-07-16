import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        {/* Left: Logo */}
        <div style={styles.footerLeft}>
          <img
            src="/images/sinhgad_logo.jfif"
            alt="College Logo"
            style={styles.footerLogoImg}
          />
        </div>

        {/* Center: Social Links */}
        <div style={styles.footerCenter}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaLinkedin /></a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div style={styles.footerRight}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p>Sinhgad Institute of Technology and Science, Narhe</p>
          <p>Pune, Maharashtra - 411041</p>
          <p>Email: info@sits.edu.in</p>
          <p>Phone: +91-12345-67890</p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        &copy; {new Date().getFullYear()} SITS Alumni Association. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#001f3f',
    color: '#ffffff',
    padding: '40px 20px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: 'auto',
    gap: '20px',
  },
  footerLeft: {
    flex: '1',
    minWidth: '150px',
  },
  footerCenter: {
    flex: '1',
    textAlign: 'center',
    minWidth: '200px',
  },
  footerRight: {
    flex: '1',
    textAlign: 'right',
    minWidth: '200px',
    fontSize: '0.95rem',
    color: '#f0f0f0',
  },
  footerLogoImg: {
    width: '40ok 0px',
    height: '250px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#00d1b2',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '1.5rem',
  },
  icon: {
    color: '#ffffff',
    transition: 'transform 0.2s, color 0.3s',
    textDecoration: 'none',
  },
  footerBottom: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#bbbbbb',
    borderTop: '1px solid #334d66',
    paddingTop: '20px',
  },
};

export default Footer;
