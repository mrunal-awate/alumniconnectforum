// // /pages/AlumniSessions.jsx
// import React, { useState } from 'react';

// const AlumniSessions = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMsg, setInputMsg] = useState('');
//   const [currentSession, setCurrentSession] = useState({
//     title: 'How to Succeed in the Tech Industry',
//     speaker: 'John Doe',
//     batch: '2015',
//     videoUrl: 'http://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder: Replace with actual video URL
//     description:
//       'Join us as John shares his inspiring journey from SITS to becoming a Senior Developer at Google. Learn about industry trends, interview prep, and workplace success tips.',
//     speakerBio:
//       'John Doe is a distinguished alumnus from the 2015 batch, currently serving as a Senior Developer at Google. With a passion for innovative technology, he has contributed significantly to several high-profile projects. John is also a mentor and enjoys sharing his insights on career development and navigating the tech landscape.',
//   });

//   const handleSend = () => {
//     if (inputMsg.trim()) {
//       setMessages([...messages, { text: inputMsg, sender: 'You' }]);
//       setInputMsg('');
//       // In a real application, you'd send this message to a backend for live chat
//     }
//   };

//   const sessionList = [
//     {
//       title: 'Landing Jobs After Graduation',
//       speaker: 'Jane Smith',
//       batch: '2016',
//       videoUrl: 'http://www.youtube.com/embed/y8Kyi0WNg40', // Placeholder
//       description: 'Expert tips on resume building, networking, and interview strategies.',
//       speakerBio:
//         'Jane Smith is a seasoned HR professional and career coach who graduated in 2016. She specializes in helping new graduates secure their dream jobs in competitive industries.',
//     },
//     {
//       title: 'Cracking the Google Interview',
//       speaker: 'Rahul Verma',
//       batch: '2018',
//       videoUrl: 'http://www.youtube.com/embed/o_XA_mR1vT4', // Placeholder
//       description: 'An in-depth guide to preparing for and acing technical interviews at top tech companies.',
//       speakerBio:
//         'Rahul Verma, a software engineer at Google, graduated in 2018. He has a knack for simplifying complex technical concepts and is passionate about guiding aspiring engineers.',
//     },
//     {
//       title: 'AI Careers 101',
//       speaker: 'Priya Mehta',
//       batch: '2014',
//       videoUrl: 'http://www.youtube.com/embed/WEQzYhM-f8E', // Placeholder
//       description: 'Explore various career paths in Artificial Intelligence and Machine Learning.',
//       speakerBio:
//         'Priya Mehta is a leading AI researcher and data scientist from the 2014 batch. She has worked on cutting-edge AI projects and is committed to fostering the next generation of AI professionals.',
//     },
//     {
//       title: 'Entrepreneurship in Tech',
//       speaker: 'Sameer Khan',
//       batch: '2017',
//       videoUrl: 'http://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
//       description: 'Insights into starting and scaling a tech startup from a successful alumnus.',
//       speakerBio:
//         'Sameer Khan, Batch 2017, is the founder of a successful tech startup. He shares his journey, challenges, and triumphs in the entrepreneurial world.',
//     },
//     {
//       title: 'Product Management Essentials',
//       speaker: 'Anjali Sharma',
//       batch: '2019',
//       videoUrl: 'http://www.youtube.com/embed/y8Kyi0WNg40', // Placeholder
//       description: 'Understanding the role of a Product Manager and key skills required.',
//       speakerBio:
//         'Anjali Sharma, from the 2019 batch, is a Product Manager at a fast-growing tech company. She offers valuable advice on breaking into product management and excelling in the role.',
//     },
//   ];

//   const handleSessionSelect = (session) => {
//     setCurrentSession(session);
//     // Optionally, clear chat messages when a new session is selected
//     setMessages([]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 md:px-8">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-10 drop-shadow-lg">
//         🎓 Alumni Interactive Sessions
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Main Video & Details Section */}
//         <div className="lg:w-2/3 w-full bg-white shadow-xl rounded-2xl p-6 border border-blue-200 animate-fade-in">
//           <div className="aspect-video mb-5 rounded-lg overflow-hidden border border-gray-300">
//             <iframe
//               className="w-full h-full"
//               src={currentSession.videoUrl}
//               title={currentSession.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
//             {currentSession.title}
//           </h2>
//           <p className="text-blue-600 text-lg mb-3 font-medium">
//             🎤 {currentSession.speaker}, SITS Alumni (Batch {currentSession.batch})
//           </p>
//           <p className="text-gray-700 text-base mb-4 border-l-4 border-blue-400 pl-3 italic">
//             {currentSession.description}
//           </p>

//           {/* Speaker Bio Section */}
//           <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
//             <h3 className="text-xl font-semibold text-blue-700 mb-2">About the Speaker</h3>
//             <p className="text-gray-700 text-sm leading-relaxed">
//               {currentSession.speakerBio}
//             </p>
//           </div>
//         </div>

//         {/* Chat Section */}
//         <div className="lg:w-1/3 w-full bg-white shadow-xl rounded-2xl p-6 flex flex-col border border-indigo-200 animate-slide-up">
//           <h3 className="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2 border-indigo-200">
//             💬 Live Chat
//           </h3>
//           <div className="flex-1 overflow-y-auto max-h-[400px] mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 scrollbar-thumb-blue-400 scrollbar-track-blue-100 scrollbar-thin">
//             {messages.length === 0 ? (
//               <p className="text-gray-400 italic text-center py-4">
//                 Be the first to send a message!
//               </p>
//             ) : (
//               messages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex ${
//                     msg.sender === 'You' ? 'justify-end' : 'justify-start'
//                   } mb-3`}
//                 >
//                   <div
//                     className={`px-4 py-2 rounded-xl max-w-[80%] ${
//                       msg.sender === 'You'
//                         ? 'bg-blue-600 text-white rounded-br-none'
//                         : 'bg-gray-200 text-gray-800 rounded-bl-none'
//                     } shadow-md`}
//                   >
//                     <span className="font-semibold text-sm">
//                       {msg.sender === 'You' ? 'You' : currentSession.speaker}:
//                     </span>{' '}
//                     <p className="mt-1">{msg.text}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//           <div className="flex mt-2">
//             <input
//               type="text"
//               value={inputMsg}
//               onChange={(e) => setInputMsg(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//               placeholder="Type your message here..."
//               className="flex-1 p-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-blue-600 text-white px-5 py-3 rounded-r-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Session List Slider */}
//       <div className="mt-12 bg-white shadow-xl rounded-2xl p-6 border border-purple-200">
//         <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
//           📺 More Alumni Sessions
//         </h2>
//         <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
//           {sessionList.map((session, index) => (
//             <div
//               key={index}
//               className={`min-w-[300px] bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-103 cursor-pointer border-2 ${
//                 currentSession.videoUrl === session.videoUrl
//                   ? 'border-purple-500 ring-4 ring-purple-200'
//                   : 'border-gray-200'
//               }`}
//               onClick={() => handleSessionSelect(session)}
//             >
//               <iframe
//                 className="w-full h-44 object-cover"
//                 src={session.videoUrl}
//                 title={session.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//               <div className="p-4">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
//                   {session.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 mt-1">
//                   🎤 {session.speaker}, Batch {session.batch}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2 line-clamp-2">
//                   {session.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlumniSessions;


// /pages/AlumniSessions.jsx
import React, { useState, useEffect, useRef } from 'react';

const AlumniSessions = () => {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState('');
  const [currentSession, setCurrentSession] = useState(null); // Initialize as null to load default
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator
  const chatMessagesRef = useRef(null); // Ref for auto-scrolling chat

  // Mock data for sessions - In a real app, this would come from an API
  const allSessions = [
    {
      id: 'session-1',
      title: 'How to Succeed in the Tech Industry',
      speaker: 'John Doe',
      batch: '2015',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Rick Astley - placeholder
      description:
        'Join us as John shares his inspiring journey from SITS to becoming a Senior Developer at Google. Learn about industry trends, interview prep, and workplace success tips.',
      speakerBio:
        'John Doe is a distinguished alumnus from the 2015 batch, currently serving as a Senior Developer at Google. With a passion for innovative technology, he has contributed significantly to several high-profile projects. John is also a mentor and enjoys sharing his insights on career development and navigating the tech landscape.',
      date: '2024-03-15',
    },
    {
      id: 'session-2',
      title: 'Landing Jobs After Graduation',
      speaker: 'Jane Smith',
      batch: '2016',
      videoUrl: 'https://www.youtube.com/embed/s_x3Jm-2N0k', // Another placeholder video
      description: 'Expert tips on resume building, networking, and interview strategies to kickstart your career.',
      speakerBio:
        'Jane Smith is a seasoned HR professional and career coach who graduated in 2016. She specializes in helping new graduates secure their dream jobs in competitive industries, offering invaluable insights into the recruitment process.',
      date: '2024-02-20',
    },
    {
      id: 'session-3',
      title: 'Cracking the Google Interview',
      speaker: 'Rahul Verma',
      batch: '2018',
      videoUrl: 'https://www.youtube.com/embed/Nn0m0gGjL8M', // Another placeholder video
      description: 'An in-depth guide to preparing for and acing technical interviews at top tech companies like Google.',
      speakerBio:
        'Rahul Verma, a software engineer at Google, graduated in 2018. He has a knack for simplifying complex technical concepts and is passionate about guiding aspiring engineers through the rigorous interview process.',
      date: '2023-11-10',
    },
    {
      id: 'session-4',
      title: 'AI Careers 101',
      speaker: 'Priya Mehta',
      batch: '2014',
      videoUrl: 'https://www.youtube.com/embed/r_s_yN6Gg7c', // Another placeholder video
      description: 'Explore various career paths in Artificial Intelligence and Machine Learning and how to get started in this booming field.',
      speakerBio:
        'Priya Mehta is a leading AI researcher and data scientist from the 2014 batch. She has worked on cutting-edge AI projects across various industries and is committed to fostering the next generation of AI professionals.',
      date: '2023-09-01',
    },
    {
      id: 'session-5',
      title: 'Entrepreneurship in Tech',
      speaker: 'Sameer Khan',
      batch: '2017',
      videoUrl: 'https://www.youtube.com/embed/ZqL54x0b8sU', // Another placeholder video
      description: 'Insights into starting and scaling a tech startup from a successful alumnus, covering ideation to funding.',
      speakerBio:
        'Sameer Khan, Batch 2017, is the founder of a successful tech startup that recently secured Series A funding. He shares his journey, challenges, and triumphs in the entrepreneurial world, inspiring many.',
      date: '2023-07-25',
    },
    {
      id: 'session-6',
      title: 'Product Management Essentials',
      speaker: 'Anjali Sharma',
      batch: '2019',
      videoUrl: 'https://www.youtube.com/embed/WJ_YlE7o53U', // Another placeholder video
      description: 'Understanding the role of a Product Manager, key skills required, and how to transition into this exciting career path.',
      speakerBio:
        'Anjali Sharma, from the 2019 batch, is a Product Manager at a fast-growing tech company. She offers valuable advice on breaking into product management and excelling in the role, drawing from her practical experience.',
      date: '2023-06-12',
    },
  ];

  // Effect to load the default session and simulate data fetching
  useEffect(() => {
    setIsLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      setCurrentSession(allSessions[0]); // Set the first session as default
      setIsLoading(false);
    }, 500); // 0.5 second delay
    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  // Effect to scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (inputMsg.trim()) {
      setMessages([...messages, { text: inputMsg, sender: 'You', timestamp: new Date() }]);
      setInputMsg('');
      // In a real application, you'd send this message to a backend for live chat
      // and receive responses from other users/speaker
      // For demo purposes, let's simulate a speaker response after a short delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: `Thanks for your question! I'll address that shortly.`,
            sender: currentSession.speaker,
            timestamp: new Date(),
          },
        ]);
      }, 1500); // Speaker replies after 1.5 seconds
    }
  };

  const handleSessionSelect = (session) => {
    setIsLoading(true); // Show loading while new session content loads
    // Simulate content loading for new session
    setTimeout(() => {
      setCurrentSession(session);
      setMessages([]); // Clear chat messages for new session
      setIsLoading(false);
    }, 400); // Short delay for perceived loading
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 md:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-10 drop-shadow-lg animate-fade-in-down">
        🎓 Alumni Interactive Sessions
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Video & Details Section */}
        <div className="lg:w-2/3 w-full bg-white shadow-xl rounded-2xl p-6 border border-blue-200 animate-fade-in">
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
              <p className="ml-4 text-xl text-blue-600">Loading session...</p>
            </div>
          ) : (
            <>
              <div className="aspect-video mb-5 rounded-lg overflow-hidden border border-gray-300">
                <iframe
                  className="w-full h-full"
                  src={currentSession.videoUrl}
                  title={currentSession.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
                {currentSession.title}
              </h2>
              <p className="text-blue-600 text-lg mb-3 font-medium">
                🎤 {currentSession.speaker}, SITS Alumni (Batch {currentSession.batch})
              </p>
              <p className="text-gray-700 text-base mb-4 border-l-4 border-blue-400 pl-3 italic">
                {currentSession.description}
              </p>

              {/* Speaker Bio Section */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  About {currentSession.speaker}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {currentSession.speakerBio}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Chat Section */}
        <div className="lg:w-1/3 w-full bg-white shadow-xl rounded-2xl p-6 flex flex-col border border-indigo-200 animate-slide-up">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2 border-indigo-200 flex items-center">
            <svg
              className="w-7 h-7 mr-2 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
            Live Chat
          </h3>
          <div
            ref={chatMessagesRef} // Attach ref here
            className="flex-1 overflow-y-auto max-h-[400px] mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 scrollbar-thumb-blue-400 scrollbar-track-blue-100 scrollbar-thin"
          >
            {messages.length === 0 ? (
              <p className="text-gray-400 italic text-center py-4">
                Be the first to send a message!
              </p>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === 'You' ? 'justify-end' : 'justify-start'
                  } mb-3 animate-fade-in-message`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl max-w-[80%] ${
                      msg.sender === 'You'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    } shadow-md`}
                  >
                    <span className="font-semibold text-sm">
                      {msg.sender === 'You' ? 'You' : msg.sender}:
                    </span>{' '}
                    <p className="mt-1 text-sm">{msg.text}</p>
                    <span className="text-xs text-gray-300 block text-right mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question or share a thought..."
              className="flex-1 p-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
              disabled={isLoading} // Disable input while loading
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-5 py-3 rounded-r-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center text-sm"
              disabled={isLoading} // Disable button while loading
            >
              <svg
                className="w-5 h-5 mr-1 -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Session List Slider */}
      <div className="mt-12 bg-white shadow-xl rounded-2xl p-6 border border-purple-200 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center flex items-center justify-center">
          <svg
            className="w-8 h-8 mr-3 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
          More Alumni Sessions
        </h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
          {allSessions.map((session) => (
            <div
              key={session.id}
              className={`min-w-[300px] bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-103 cursor-pointer border-2 ${
                currentSession && currentSession.id === session.id
                  ? 'border-purple-500 ring-4 ring-purple-200'
                  : 'border-gray-200'
              }`}
              onClick={() => handleSessionSelect(session)}
            >
              <iframe
                className="w-full h-44 object-cover"
                src={session.videoUrl}
                title={session.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
                  {session.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                  {session.speaker}, Batch {session.batch}
                </p>
                <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    {formatDate(session.date)}
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {session.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniSessions;