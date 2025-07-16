import React, { useEffect, useState } from 'react';
import api from '../api';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MemberSection from '../components/MemberSection';
import About from '../components/About';
import Events from '../components/Events';
import News from '../components/News';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [alumniList, setAlumniList] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await api.get('/alumni');
        console.log("Fetched alumni data:", res.data); // ✅ Debug log
        setAlumniList(res.data); // Already filtered from backend
      } catch (err) {
        console.error('Failed to fetch alumni:', err);
      }
    };

    fetchAlumni(); // ✅ Always fetch to show blur or real data
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />

      <section style={styles.memberWrapper}>
        {!token && (
          <div style={styles.blurOverlay}>
            <div style={styles.lockedMessage}>
              🔒 Please login to access the full Member Section
            </div>
          </div>
        )}

        <div style={!token ? styles.blurred : {}}>
          <MemberSection alumniList={alumniList} />
        </div>
      </section>

      <About />
      <Events />
      <News />
      <Footer />
    </>
  );
};

const styles = {
  memberWrapper: {
    position: 'relative',
    minHeight: '90vh',
    padding: '60px 20px',
    backgroundColor: '#f5faff',
    overflow: 'hidden',
  },
  blurred: {
    filter: 'blur(1.8px)',
    opacity: 0.85,
    pointerEvents: 'none',
    userSelect: 'none',
  },
  blurOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(1px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    padding: '40px 20px',
  },
  lockedMessage: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px 32px',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
  },
};

export default Home;
