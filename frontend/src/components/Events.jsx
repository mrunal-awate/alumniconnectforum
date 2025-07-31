// import React from 'react';

// const Events = () => {
//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Upcoming Events</h2>
//         <ul style={styles.list}>
//           <li style={styles.listItem}>🎓 <strong>Alumni Meet 2025</strong> — 15th Aug</li>
//           <li style={styles.listItem}>💼 <strong>Career Talk by Google Alum</strong> — 22nd July</li>
//           <li style={styles.listItem}>📢 <strong>Placement Prep Webinar</strong> — 30th July</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #e3f2fd, #90caf9)',
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
//     color: '#0d47a1',
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
//     background: '#ffffffaa',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default Events;


// /pages/Events.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Mock Data for Events
// In a real application, this would come from an API
const eventsData = [
  {
    id: 'e1',
    title: 'Alumni Annual Meet 2025',
    date: '2025-08-15T18:00:00+05:30', // August 15, 2025, 6 PM IST
    location: 'SITS Auditorium, Pune',
    type: 'Conference',
    description: 'Our biggest annual gathering! Reconnect with old friends, network with successful alumni, and enjoy a night of nostalgia and celebration. Special guest speakers, cultural performances, and networking dinner.',
    image: 'https://picsum.photos/id/1015/800/400', // Working placeholder image URL
    actionLink: '#', // Placeholder for RSVP/Register
    actionText: 'RSVP Now',
    isOnline: false,
  },
  {
    id: 'e2',
    title: 'Career Talk: Navigating the AI/ML Landscape',
    date: '2025-07-22T15:00:00+05:30', // July 22, 2025, 3 PM IST (Past Event)
    location: 'Online (Zoom)',
    type: 'Webinar',
    description: 'Join Google AI Lead Alum, Ms. Priya Sharma (Batch 2010), as she shared invaluable insights on building a successful career in Artificial Intelligence and Machine Learning. Included a live Q&A session.',
    image: 'https://picsum.photos/id/1018/800/400', // Working placeholder image URL
    actionLink: '#',
    actionText: 'View Recording',
    isOnline: true,
  },
  {
    id: 'e3',
    title: 'Placement Preparation Webinar Series',
    date: '2025-07-30T10:00:00+05:30', // July 30, 2025, 10 AM IST
    location: 'Online (Google Meet)',
    type: 'Webinar',
    description: 'A comprehensive webinar series to help final-year students ace their placements. Covers resume building, advanced interview techniques, and group discussion strategies.',
    image: 'https://picsum.photos/id/1024/800/400', // Working placeholder image URL
    actionLink: '#',
    actionText: 'Join Webinar',
    isOnline: true,
  },
  {
    id: 'e4',
    title: 'Entrepreneurship Bootcamp: Idea to Startup',
    date: '2025-09-10T09:00:00+05:30', // September 10, 2025, 9 AM IST
    location: 'SITS Incubation Center',
    type: 'Workshop',
    description: 'An intensive two-day bootcamp for aspiring student entrepreneurs. Learn about business model canvas, market validation, funding opportunities, and legal aspects from successful alumni founders.',
    image: 'https://picsum.photos/id/1033/800/400', // Working placeholder image URL
    actionLink: '#',
    actionText: 'Register Now',
    isOnline: false,
  },
  {
    id: 'e5',
    title: 'Guest Lecture: Future of Quantum Computing',
    date: '2025-06-10T14:00:00+05:30', // June 10, 2025, 2 PM IST (Past Event)
    location: 'SITS Seminar Hall',
    type: 'Lecture',
    description: 'Dr. Vikram Desai (Batch 2005) delivered an insightful lecture on the advancements and future prospects of Quantum Computing and its profound impact on various industries.',
    image: 'https://picsum.photos/id/1040/800/400', // Working placeholder image URL
    actionLink: '#',
    actionText: 'Learn More',
    isOnline: false,
  },
  {
    id: 'e6',
    title: 'Alumni Mentorship Mixer',
    date: '2025-08-01T17:00:00+05:30', // August 1, 2025, 5 PM IST
    location: 'SITS Cafeteria & Online',
    type: 'Networking',
    description: 'An informal hybrid event for students to meet and interact with alumni mentors from diverse industries. A great chance for casual networking and gaining personalized insights.',
    image: 'https://picsum.photos/id/1050/800/400', // Working placeholder image URL
    actionLink: '#',
    actionText: 'RSVP Now',
    isOnline: true, // Hybrid means partly online
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' or 'past'

  // Filter events based on the current date
  const now = new Date('2025-07-24T02:49:32+05:30'); // Fixed current date for consistent demonstration

  const upcomingEvents = useMemo(
    () =>
      eventsData
        .filter((event) => new Date(event.date) >= now)
        .sort((a, b) => new Date(a.date) - new Date(b.date)), // Sort chronologically
    [now]
  );

  const pastEvents = useMemo(
    () =>
      eventsData
        .filter((event) => new Date(event.date) < now)
        .sort((a, b) => new Date(b.date) - new Date(a.date)), // Sort by most recent first
    [now]
  );

  const eventsToDisplay = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 md:px-8">
      <Helmet>
        <title>SITS Alumni</title>
        <meta name="description" content="Explore upcoming and past events for SITS alumni and students." />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-md">
          🗓️ Alumni & Student Events
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Stay connected with the SITS community through our diverse range of online and offline events.
          From career talks to annual alumni meets, there's always something happening!
        </p>
      </motion.div>

      {/* Host an Event CTA */}
      <motion.div
        className="bg-indigo-700 text-white rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Have an Event Idea or Want to Host?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          We encourage alumni and students to organize or suggest new events for the community.
        </p>
        <a
          href="#" // Placeholder for an actual event suggestion/hosting form link
          className="inline-flex items-center bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
          Suggest / Host an Event
        </a>
      </motion.div>

      {/* Event Filters (Tabs) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="max-w-4xl mx-auto mb-8 bg-white p-2 rounded-xl shadow-lg border border-gray-200 flex justify-center"
      >
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-8 py-3 font-semibold text-lg rounded-lg transition-all duration-300 ${
            activeTab === 'upcoming'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Upcoming Events ({upcomingEvents.length})
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-8 py-3 font-semibold text-lg rounded-lg transition-all duration-300 ml-4 ${
            activeTab === 'past'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Past Events ({pastEvents.length})
        </button>
      </motion.div>

      {/* Events List */}
      <div className="max-w-6xl mx-auto">
        {eventsToDisplay.length === 0 ? (
          <motion.div
            className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600 font-semibold">
              <span role="img" aria-label="calendar" className="mr-2">📅</span>
              No {activeTab} events found at the moment.
            </p>
            <p className="text-gray-500 mt-2">Check back later or suggest a new event!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {eventsToDisplay.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-200 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/400x200?text=Image+Load+Error"; }} // Fallback on error
                      />
                    ) : (
                      // Fallback if image URL is genuinely empty or null in data
                      <span className="text-gray-400 text-6xl">✨</span>
                    )}
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {event.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                      {formatDate(event.date)} at {formatTime(event.date)}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                      {event.location} {event.isOnline && !event.location.toLowerCase().includes('online') ? ' (Online)' : ''}
                    </p>
                    <p className="text-gray-700 text-base line-clamp-3 mb-4">
                      {event.description}
                    </p>
                    <a
                      href={event.actionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
                    >
                      {event.actionText || 'View Details'}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;