// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const News = () => {
//   const { isAuthenticated } = useAuth();
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/job-news'); // ✅ fetch from your backend
//         const filteredJobs = res.data.filter(job =>
//           job.title.toLowerCase().includes('intern') ||
//           job.title.toLowerCase().includes('fresher') ||
//           job.title.toLowerCase().includes('junior')
//         );
//         setJobs(filteredJobs.slice(0, 20));
//       } catch (err) {
//         console.error('Failed to fetch job news:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const visibleJobs = isAuthenticated ? jobs : jobs.slice(0, 3);

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>💼 Latest Job & Internship Listings</h2>
//         <ul style={styles.list}>
//           {loading ? (
//             <li style={styles.listItem}>🔄 Loading job news...</li>
//           ) : visibleJobs.length > 0 ? (
//             visibleJobs.map((job, idx) => (
//               <li key={idx} style={styles.listItem}>
//                 <a
//                   href={job.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={styles.link}
//                 >
//                   🔗 {job.title} at {job.company_name}
//                 </a>
//               </li>
//             ))
//           ) : (
//             <li style={styles.listItem}>🚫 No job listings found.</li>
//           )}
//         </ul>

//         {!isAuthenticated && (
//           <div style={styles.lockedBox}>
//             🔒 <strong>Login to see more job opportunities.</strong>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px 20px',
//   },
//   container: {
//     textAlign: 'center',
//     maxWidth: '700px',
//   },
//   heading: {
//     fontSize: '2rem',
//     color: '#ad1457',
//     marginBottom: '25px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontSize: '1.1rem',
//     color: '#333',
//     marginBottom: '15px',
//     lineHeight: '1.6',
//     background: '#ffffffdd',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#0077cc',
//     fontWeight: 'bold',
//   },
//   lockedBox: {
//     marginTop: '25px',
//     backgroundColor: '#fff0f5',
//     padding: '16px 24px',
//     border: '1px dashed #ad1457',
//     borderRadius: '10px',
//     fontSize: '1rem',
//     color: '#880e4f',
//   },
// };

// export default News;










// ---------------1-------------------

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const News = () => {
//   const { isAuthenticated } = useAuth();
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get('https://remotive.io/api/remote-jobs', {
//           params: {
//             search: 'fresher internship junior'
//           }
//         });
//         const filteredJobs = res.data.jobs.filter(job =>
//           job.title.toLowerCase().includes('intern') ||
//           job.title.toLowerCase().includes('fresher') ||
//           job.title.toLowerCase().includes('junior')
//         );
//         setJobs(filteredJobs.slice(0, 20));
//       } catch (err) {
//         console.error('Failed to fetch job news:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const visibleJobs = isAuthenticated ? jobs : jobs.slice(0, 3);

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>💼 Latest Job & Internship Listings</h2>
//         <ul style={styles.list}>
//           {loading ? (
//             <li style={styles.listItem}>🔄 Loading job news...</li>
//           ) : visibleJobs.length > 0 ? (
//             visibleJobs.map((job, idx) => (
//               <li key={idx} style={styles.listItem}>
//                 <a
//                   href={job.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={styles.link}
//                 >
//                   🔗 {job.title} at {job.company_name}
//                 </a>
//               </li>
//             ))
//           ) : (
//             <li style={styles.listItem}>🚫 No job listings found.</li>
//           )}
//         </ul>

//         {!isAuthenticated && (
//           <div style={styles.lockedBox}>
//             🔒 <strong>Login to see more job opportunities.</strong>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px 20px',
//   },
//   container: {
//     textAlign: 'center',
//     maxWidth: '700px',
//   },
//   heading: {
//     fontSize: '2rem',
//     color: '#ad1457',
//     marginBottom: '25px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontSize: '1.1rem',
//     color: '#333',
//     marginBottom: '15px',
//     lineHeight: '1.6',
//     background: '#ffffffdd',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#0077cc',
//     fontWeight: 'bold',
//   },
//   lockedBox: {
//     marginTop: '25px',
//     backgroundColor: '#fff0f5',
//     padding: '16px 24px',
//     border: '1px dashed #ad1457',
//     borderRadius: '10px',
//     fontSize: '1rem',
//     color: '#880e4f',
//   },
// };

// export default News;










//  ---------------1-----------------

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const News = () => {
  const { isAuthenticated } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const options = {
          method: 'GET',
          url: 'https://jsearch.p.rapidapi.com/search',
          params: {
            query: 'internship OR fresher jobs',
            page: '1',
            num_pages: '1',
          },
          headers: {
            'X-RapidAPI-Key': 'ec18f5d303msh80d3aa10778cbb0p18a129jsn642fec00ac67', // 🚫 Replace with env var in production
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
          },
        };

        const res = await axios.request(options);
        setJobs(res.data.data || []);
      } catch (err) {
        console.error('Failed to fetch job news:', err);
        if (err.response?.status === 429) {
          setError('⚠️ API limit exceeded. Please try again later.');
        } else {
          setError('❌ Failed to fetch job news.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const visibleJobs = isAuthenticated ? jobs : jobs.slice(0, 3);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>💼 Latest Job & Internship Listings</h2>

        {loading ? (
          <p style={styles.status}>🔄 Loading job news...</p>
        ) : error ? (
          <p style={styles.error}>{error}</p>
        ) : (
          <ul style={styles.list}>
            {visibleJobs.length > 0 ? (
              visibleJobs.map((job, idx) => (
                <li key={idx} style={styles.listItem}>
                  <a
                    href={job.job_google_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    🔗 {job.job_title} at {job.employer_name}
                  </a>
                </li>
              ))
            ) : (
              <li style={styles.listItem}>🚫 No job listings found.</li>
            )}
          </ul>
        )}

        {!isAuthenticated && !loading && !error && (
          <div style={styles.lockedBox}>
            🔒 <strong>Login to see more job opportunities.</strong>
          </div>
        )}
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
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
    color: '#ad1457',
    marginBottom: '25px',
  },
  status: {
    fontSize: '1.1rem',
    color: '#777',
    marginBottom: '20px',
  },
  error: {
    fontSize: '1.1rem',
    color: 'red',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '15px',
    lineHeight: '1.6',
    background: '#ffffffdd',
    padding: '12px 20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  link: {
    textDecoration: 'none',
    color: '#0077cc',
    fontWeight: 'bold',
  },
  lockedBox: {
    marginTop: '25px',
    backgroundColor: '#fff0f5',
    padding: '16px 24px',
    border: '1px dashed #ad1457',
    borderRadius: '10px',
    fontSize: '1rem',
    color: '#880e4f',
  },
};

export default News;









// --------------2------------------

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const News = () => {
//   const { isAuthenticated } = useAuth(); // ✅ Check if user is logged in
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const options = {
//           method: 'GET',
//           url: 'https://jsearch.p.rapidapi.com/search',
//           params: {
//             query: 'internship OR fresher jobs',
//             page: '1',
//             num_pages: '1'
//           },
//           headers: {
//             'X-RapidAPI-Key': 'ec18f5d303msh80d3aa10778cbb0p18a129jsn642fec00ac67',
//             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//           }
//         };

//         const res = await axios.request(options);
//         setJobs(res.data.data || []);
//         setLoading(false);
//       } catch (err) {
//         console.error('Failed to fetch job news:', err);
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   // 🔐 Show all jobs if logged in, otherwise limit to 3
//   const visibleJobs = isAuthenticated ? jobs : jobs.slice(0, 3);

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>💼 Latest Job & Internship Listings</h2>
//         <ul style={styles.list}>
//           {loading ? (
//             <li style={styles.listItem}>🔄 Loading job news...</li>
//           ) : visibleJobs.length > 0 ? (
//             visibleJobs.map((job, idx) => (
//               <li key={idx} style={styles.listItem}>
//                 <a
//                   href={job.job_google_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={styles.link}
//                 >
//                   🔗 {job.job_title} at {job.employer_name}
//                 </a>
//               </li>
//             ))
//           ) : (
//             <li style={styles.listItem}>🚫 No job listings found.</li>
//           )}
//         </ul>

//         {!isAuthenticated && (
//           <div style={styles.lockedBox}>
//             🔒 <strong>Login to see more job opportunities.</strong>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px 20px',
//   },
//   container: {
//     textAlign: 'center',
//     maxWidth: '700px',
//   },
//   heading: {
//     fontSize: '2rem',
//     color: '#ad1457',
//     marginBottom: '25px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontSize: '1.1rem',
//     color: '#333',
//     marginBottom: '15px',
//     lineHeight: '1.6',
//     background: '#ffffffdd',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#0077cc',
//     fontWeight: 'bold',
//   },
//   lockedBox: {
//     marginTop: '25px',
//     backgroundColor: '#fff0f5',
//     padding: '16px 24px',
//     border: '1px dashed #ad1457',
//     borderRadius: '10px',
//     fontSize: '1rem',
//     color: '#880e4f',
//   },
// };

// export default News;










//  --------------3----------------

// import React from 'react';

// const News = () => {
//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>📢 Latest Job Market News</h2>
//         <ul style={styles.list}>
//           <li style={styles.listItem}>📈 <strong>TCS</strong> plans to hire 40,000 freshers this year.</li>
//           <li style={styles.listItem}>🧠 <strong>AI & Data Science</strong> jobs are in high demand.</li>
//           <li style={styles.listItem}>💼 <strong>LinkedIn</strong> releases Top Companies 2025 list.</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px 20px',
//   },
//   container: {
//     textAlign: 'center',
//     maxWidth: '700px',
//   },
//   heading: {
//     fontSize: '2rem',
//     color: '#ad1457',
//     marginBottom: '25px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontSize: '1.2rem',
//     color: '#333',
//     marginBottom: '15px',
//     lineHeight: '1.8',
//     background: '#ffffffdd',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default News;
