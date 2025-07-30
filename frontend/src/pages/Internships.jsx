// import React from 'react';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';

// const jobList = [
//   {
//     title: 'Frontend Developer',
//     company: 'TechSpark Solutions',
//     location: 'Remote',
//     type: 'Full-time',
//     applyLink: '#',
//   },
//   {
//     title: 'Cybersecurity Analyst Intern',
//     company: 'SecureWave',
//     location: 'Pune, Maharashtra',
//     type: 'Internship',
//     applyLink: '#',
//   },
//   {
//     title: 'Backend Developer Intern',
//     company: 'CodeHut',
//     location: 'Bangalore, India',
//     type: 'Internship',
//     applyLink: '#',
//   },
// ];

// const Internships = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-green-100 to-white py-12 px-4">
//       <Helmet>
//         <title>Jobs & Internships | SITS Alumni</title>
//         <meta name="description" content="Explore job and internship opportunities shared by alumni for students of SITS." />
//       </Helmet>

//       {/* Hero Section */}
//       <div className="text-center mb-12">
//         <motion.h1
//           className="text-4xl font-extrabold text-green-900 mb-4"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Alumni Job & Internship Postings
//         </motion.h1>
//         <motion.p
//           className="text-lg text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Alumni can post internship and job opportunities here. Students can explore and apply directly.
//         </motion.p>
//       </div>

//       {/* Listings Section */}
//       <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {jobList.map((job, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//           >
//             <h3 className="text-xl font-bold text-green-800 mb-1">{job.title}</h3>
//             <p className="text-gray-700">{job.company}</p>
//             <p className="text-gray-600 text-sm">{job.location}</p>
//             <span className="inline-block mt-2 px-3 py-1 text-sm bg-green-200 text-green-800 rounded-full">{job.type}</span>
//             <div className="mt-4">
//               <a
//                 href={job.applyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Apply Now
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Internships;



// /pages/Internships.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Mock Data - In a real application, this would come from an API
const allJobListings = [
  {
    id: 'j1',
    title: 'Frontend Developer Intern',
    company: 'InnovateX Solutions',
    location: 'Remote',
    type: 'Internship',
    description: 'Join our dynamic team to build responsive and user-friendly web interfaces using React and Tailwind CSS. You will work closely with senior developers, gaining hands-on experience in a fast-paced environment.',
    postedDate: '2024-07-20',
    applyLink: '#',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git'],
  },
  {
    id: 'j2',
    title: 'Cybersecurity Analyst (Entry-Level)',
    company: 'SecureNet Defense',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    description: 'Protect our digital assets, monitor security systems, and respond to incidents. This role is ideal for recent graduates with a strong interest in cybersecurity and a willingness to learn.',
    postedDate: '2024-07-18',
    applyLink: '#',
    skills: ['Cybersecurity', 'Network Security', 'Linux', 'Incident Response', 'Python'],
  },
  {
    id: 'j3',
    title: 'Backend Developer Intern (Node.js)',
    company: 'DataFlow Systems',
    location: 'Bangalore, India',
    type: 'Internship',
    description: 'Work on scalable backend services using Node.js, Express, and MongoDB. Opportunity to learn about cloud deployments and contribute to critical system architecture.',
    postedDate: '2024-07-15',
    applyLink: '#',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'AWS'],
  },
  {
    id: 'j4',
    title: 'Data Scientist',
    company: 'Analytics Hub',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description: 'Analyze large datasets, build predictive models, and provide data-driven insights to improve business strategies. You will be part of a team pushing the boundaries of data science.',
    postedDate: '2024-07-10',
    applyLink: '#',
    skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Data Visualization', 'Pandas'],
  },
  {
    id: 'j5',
    title: 'UI/UX Designer Intern',
    company: 'Creative Minds Studio',
    location: 'Remote',
    type: 'Internship',
    description: 'Collaborate with product teams to design intuitive and engaging user experiences for web and mobile applications. A strong portfolio demonstrating design thinking is a plus.',
    postedDate: '2024-07-05',
    applyLink: '#',
    skills: ['Figma', 'Sketch', 'User Research', 'Wireframing', 'Prototyping', 'Adobe XD'],
  },
  {
    id: 'j6',
    title: 'Cloud Engineer',
    company: 'CloudBridge Technologies',
    location: 'Mumbai, India',
    type: 'Full-time',
    description: 'Design, implement, and manage cloud infrastructure on AWS/Azure/GCP. Experience with DevOps practices preferred. This role offers significant growth potential in cloud technologies.',
    postedDate: '2024-07-01',
    applyLink: '#',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    id: 'j7',
    title: 'Marketing Intern',
    company: 'GrowthGenius',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Assist in developing and executing digital marketing campaigns, content creation, and social media management. Gain practical experience in a dynamic marketing environment.',
    postedDate: '2024-06-28',
    applyLink: '#',
    skills: ['Digital Marketing', 'Content Creation', 'Social Media', 'SEO', 'Analytics'],
  },
  {
    id: 'j8',
    title: 'DevOps Engineer',
    company: 'Reliable Systems',
    location: 'Remote',
    type: 'Full-time',
    description: 'Automate and optimize our software development processes, ensuring seamless deployment and operation. You will play a key role in improving our continuous integration and delivery pipelines.',
    postedDate: '2024-06-25',
    applyLink: '#',
    skills: ['CI/CD', 'Ansible', 'Terraform', 'Kubernetes', 'Linux', 'Jenkins'],
  },
  {
    id: 'j9',
    title: 'Software Development Engineer',
    company: 'InnovateX Solutions',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description: 'Develop, test, and deploy high-quality software solutions. Work across the full stack and contribute to innovative product features.',
    postedDate: '2024-07-22',
    applyLink: '#',
    skills: ['Java', 'Spring Boot', 'Microservices', 'SQL', 'REST APIs'],
  },
  {
    id: 'j10',
    title: 'Product Management Intern',
    company: 'NextGen Products',
    location: 'Bangalore, India',
    type: 'Internship',
    description: 'Assist product managers in defining product roadmaps, gathering requirements, and analyzing market trends. A great opportunity to learn about the product lifecycle.',
    postedDate: '2024-07-19',
    applyLink: '#',
    skills: ['Product Management', 'Market Research', 'Agile', 'Jira'],
  },
];

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Extract unique types and locations for filter dropdowns
  const jobTypes = useMemo(() => ['All', ...new Set(allJobListings.map((job) => job.type))], []);
  const jobLocations = useMemo(() => ['All', ...new Set(allJobListings.map((job) => job.location))], []);

  // Filter jobs based on search term, type, and location
  const filteredJobs = useMemo(() => {
    return allJobListings.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = selectedType === 'All' || job.type === selectedType;
      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedType, selectedLocation]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 md:px-8">
      <Helmet>
        <title>Jobs & Internships | SITS Alumni</title>
        <meta name="description" content="Explore job and internship opportunities shared by alumni for students of SITS." />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span role="img" aria-label="briefcase" className="mr-3">💼</span>
          Alumni Job & Internship Postings
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover exclusive career opportunities shared by our esteemed alumni network.
          Students can explore and apply directly, while alumni can easily post new openings.
        </motion.p>
      </div>

      {/* Post a Job Section */}
      <motion.div
        className="bg-green-700 text-white rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Have an Opportunity to Share?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Help the next generation of SITS talent find their dream roles.
        </p>
        <a
          href="#" // Placeholder for actual job posting form link
          className="inline-flex items-center bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 100-2 1 1 0 00-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
          Post a Job / Internship
        </a>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search Bar */}
          <div>
            <label htmlFor="search" className="block text-gray-700 text-sm font-semibold mb-2">
              Search Keywords
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Title, company, or skill..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
            </div>
          </div>

          {/* Job Type Filter */}
          <div>
            <label htmlFor="jobType" className="block text-gray-700 text-sm font-semibold mb-2">
              Job Type
            </label>
            <div className="relative">
              <select
                id="jobType"
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:ring-green-500 focus:border-green-500 transition-all bg-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
              </div>
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <label htmlFor="location" className="block text-gray-700 text-sm font-semibold mb-2">
              Location
            </label>
            <div className="relative">
              <select
                id="location"
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:ring-green-500 focus:border-green-500 transition-all bg-white"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {jobLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Listings Section */}
      <div className="max-w-6xl mx-auto">
        {filteredJobs.length === 0 ? (
          <motion.div
            className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600 font-semibold">
              <span role="img" aria-label="sad face" className="mr-2">😔</span>
              No job or internship opportunities match your criteria.
            </p>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
          </motion.div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id} // Use unique ID as key
                className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} // Animate only once when in view
                transition={{ duration: 0.4, delay: index * 0.05 }} // Staggered animation
              >
                <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {job.title}
                </h3>
                <p className="text-gray-700 text-base mb-1 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                  {job.company}
                </p>
                <p className="text-gray-600 text-sm mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  {job.location}
                </p>
                <span className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                    job.type === 'Internship' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                  {job.type}
                </span>
                <p className="text-gray-500 text-xs mt-2 flex items-center">
                  <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                  Posted: {formatDate(job.postedDate)}
                </p>

                {/* Skills Section */}
                {job.skills && job.skills.length > 0 && (
                  <div className="mt-3">
                    <h5 className="text-sm font-semibold text-gray-700 mb-1">Skills:</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIdx) => (
                        <span key={skillIdx} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-md border border-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.672 1.911a1.86 1.86 0 011.929.07l2.775 2.776a.75.75 0 001.06 0l3.183-3.182a.75.75 0 00-1.06-1.061L12.5 3.896l-2.775-2.776a.75.75 0 00-1.06 0L5.428 5.728a.75.75 0 001.06 1.06l1.911-1.911a.75.75 0 000-1.06z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2.5 6.75a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H3.25a.75.75 0 01-.75-.75zM3.25 9a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H3.25zM2.5 11.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H3.25a.75.75 0 01-.75-.75zM3.25 13.5a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H3.25zM2.5 15.75a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H3.25a.75.75 0 01-.75-.75z" clipRule="evenodd"></path></svg>
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Internships;