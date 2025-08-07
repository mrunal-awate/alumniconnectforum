import React, { useEffect, useState } from 'react';
import AlumniCard from '../components/AlumniCard';
import axios from 'axios';

const Membership = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch alumni data (can be updated later if backend route changes)
    const fetchAlumni = async () => {
      try {
        const res = await axios.get('/api/alumni');
        setMembers(res.data);
      } catch (err) {
        console.error('Error fetching members:', err);
      }
    };
    fetchAlumni();
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🎓 Alumni Membership</h2>
      <p style={styles.description}>
        Our Alumni Association membership offers lifelong connections, networking opportunities,
        participation in exclusive events, and the ability to support future generations of students.
      </p>

      <h3 style={styles.subheading}>💡 Benefits of Joining:</h3>
      <ul style={styles.benefitsList}>
        <li>🔗 Stay connected with your batchmates and juniors</li>
        <li>📣 Share job/internship openings with students</li>
        <li>🎤 Speak in alumni sessions and contribute to student growth</li>
        <li>🏆 Receive updates on alumni achievements and college news</li>
      </ul>

      <h3 style={styles.subheading}>👥 Current Members:</h3>
      <div style={styles.grid}>
        {members.length > 0 ? (
          members.map((alumni, index) => (
            <AlumniCard key={index} alumni={alumni} />
          ))
        ) : (
          <p style={styles.loadingText}>Loading member profiles...</p>
        )}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 30px',
    background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#003366',
    marginBottom: '20px',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.1rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px',
    maxWidth: '800px',
    marginInline: 'auto',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#005699',
    marginTop: '30px',
    marginBottom: '15px',
    textAlign: 'center',
  },
  benefitsList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '40px',
    fontSize: '1.05rem',
    color: '#333',
    lineHeight: '1.6',
    maxWidth: '800px',
    marginInline: 'auto',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  loadingText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#777',
  },
};

export default Membership;

// import React, { useEffect, useState } from 'react';
// import AlumniCard from '../components/AlumniCard';
// import axios from 'axios';

// const Membership = () => {
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         const res = await axios.get('/api/alumni');

//         // ✅ Ensure it's an array before setting
//         if (Array.isArray(res.data)) {
//           setMembers(res.data);
//         } else if (res.data?.data && Array.isArray(res.data.data)) {
//           setMembers(res.data.data);
//         } else {
//           throw new Error('Invalid response format');
//         }

//       } catch (err) {
//         console.error('Error fetching members:', err);
//         setError('Failed to load members. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Alumni Membership</h2>
//       <p style={styles.description}>
//         Our Alumni Association membership offers lifelong connections, networking opportunities,
//         participation in exclusive events, and the ability to support future generations of students.
//       </p>

//       <h3 style={styles.subheading}>💡 Benefits of Joining:</h3>
//       <ul style={styles.benefitsList}>
//         <li>🔗 Stay connected with your batchmates and juniors</li>
//         <li>📣 Share job/internship openings with students</li>
//         <li>🎤 Speak in alumni sessions and contribute to student growth</li>
//         <li>🏆 Receive updates on alumni achievements and college news</li>
//       </ul>

//       <h3 style={styles.subheading}>👥 Current Members:</h3>
//       {loading ? (
//         <p style={styles.loadingText}>Loading member profiles...</p>
//       ) : error ? (
//         <p style={{ ...styles.loadingText, color: 'red' }}>{error}</p>
//       ) : (
//         <div style={styles.grid}>
//           {members.map((alumni, index) => (
//             <AlumniCard key={index} alumni={alumni} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: '60px 30px',
//     background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
//     minHeight: '100vh',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     color: '#003366',
//     marginBottom: '20px',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: '1.1rem',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: '30px',
//     maxWidth: '800px',
//     marginInline: 'auto',
//   },
//   subheading: {
//     fontSize: '1.5rem',
//     color: '#005699',
//     marginTop: '30px',
//     marginBottom: '15px',
//     textAlign: 'center',
//   },
//   benefitsList: {
//     listStyle: 'none',
//     padding: 0,
//     marginBottom: '40px',
//     fontSize: '1.05rem',
//     color: '#333',
//     lineHeight: '1.6',
//     maxWidth: '800px',
//     marginInline: 'auto',
//   },
//   grid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center',
//   },
//   loadingText: {
//     textAlign: 'center',
//     fontStyle: 'italic',
//     color: '#777',
//   },
// };

// export default Membership;
