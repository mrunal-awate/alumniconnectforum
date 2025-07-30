// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4" id="about">
//       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">

//         <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 gap-10">

//           {/* Left: Logo / Image */}
//           <motion.div
//             className="w-full md:w-1/2"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <img
//               src="/images/sinhgad_logo.jfif"
//               alt="Sinhgad Institutes Logo"
//               className="w-full h-auto rounded-xl shadow-md object-contain"
//             />
//           </motion.div>

//           {/* Right: About Content */}
//           <motion.div
//             className="w-full md:w-1/2 text-left"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-gray-700 font-semibold text-lg mb-2 uppercase">About</h3>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">Alumni Association of SITS</h2>

//             <p className="text-gray-700 mb-4">
//               The Alumni Association of SITS strives to foster and strengthen the relationship between the Institute, its faculty, alumni, industries, and well-wishers.
//               Our goal is to encourage collaboration, support innovation, and continue advancing the institute's mission.
//             </p>

//             <p className="text-gray-700 mb-4">
//               The association plays a key role in providing opportunities for alumni to give back to the institute through mentorship, scholarships, events, and networking.
//               It contributes to building a world-class ecosystem for education, research, and entrepreneurship.
//             </p>

//             <p className="text-gray-700">
//               Throughout the year, the Alumni Association of SITS organizes outreach programs and events that ensure lasting connections and promote excellence in every endeavor.
//             </p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4" id="about">
      <Helmet>
        <title>SITS Alumni</title>
        <meta
          name="description"
          content="Learn about the mission, vision, and goals of the Alumni Association of Sinhgad Institute of Technology and Science."
        />
      </Helmet>

      {/* Main About Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 gap-10">

          {/* Left: Logo / Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/sinhgad_logo.jfif"
              alt="Sinhgad Institutes Logo"
              className="w-full h-auto rounded-xl shadow-md object-contain hover:scale-105 transition duration-300 ease-in-out"
            />
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            className="w-full md:w-1/2 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-gray-700 font-semibold text-lg mb-2 uppercase">About</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">Alumni Association of SITS</h2>

            <p className="text-gray-700 mb-4">
              The Alumni Association of SITS strives to foster and strengthen the relationship between the Institute, its faculty, alumni, industries, and well-wishers.
              Our goal is to encourage collaboration, support innovation, and continue advancing the institute's mission.
            </p>

            <p className="text-gray-700 mb-4">
              The association plays a key role in providing opportunities for alumni to give back to the institute through mentorship, scholarships, events, and networking.
              It contributes to building a world-class ecosystem for education, research, and entrepreneurship.
            </p>

            <p className="text-gray-700">
              Throughout the year, the Alumni Association of SITS organizes outreach programs and events that ensure lasting connections and promote excellence in every endeavor.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission, Vision, Objectives */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-4">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-blue-800 mb-2">Mission</h3>
          <p className="text-gray-700">
            To create a strong network of alumni, empowering mutual growth and lifelong engagement with the institution.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-green-800 mb-2">Vision</h3>
          <p className="text-gray-700">
            To become a globally connected and collaborative alumni network that supports innovation, excellence, and community impact.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-purple-800 mb-2">Objectives</h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Strengthen alumni-institute relationships</li>
            <li>Support student development and mentoring</li>
            <li>Promote networking and collaboration</li>
            <li>Encourage alumni contributions and involvement</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

















// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4" id="about">
//       <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">

//         <motion.div 
//           className="bg-white shadow-2xl rounded-3xl p-10 border border-blue-100 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex flex-col items-center justify-center text-center backdrop-blur-md bg-opacity-90"
//           initial={{ opacity: 0, y: 50 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.7 }}
//         >
//           <h2 className="text-4xl font-bold text-blue-800 mb-6">About Us</h2>

//           <p className="mb-6 text-gray-700">
//             Welcome to the <strong>Alumni Association of SITS</strong>. Our mission is to connect alumni and foster a strong community.
//           </p>

//           {/* Vision */}
//           <div className="mb-6 text-left w-full">
//             <h3 className="text-2xl font-semibold text-blue-700">Vision</h3>
//             <p className="italic text-gray-600">उत्तमपुरुषान् उत्तमाभियंतृन् निर्मातुं कटीबद्धाः वयम्</p>
//             <p className="text-gray-700 mt-2">
//               To be a value-based globally recognized institution ensuring academic excellence and fostering research, innovation and entrepreneurial attitude.
//             </p>
//           </div>

//           {/* Mission */}
//           <div className="mb-6 text-left w-full">
//             <h3 className="text-2xl font-semibold text-blue-700">Mission</h3>
//             <p className="text-gray-700">
//               The mission of the Alumni Association of SITS is to reach, engage, and serve all alumni and students by networking and building life-long connections.
//               The association supports leadership, industry collaboration, emotional connection with the college, voluntary commitment, goodwill, and public relations.
//             </p>
//           </div>

//           {/* Quality Policy */}
//           <div className="mb-6 text-left w-full">
//             <h3 className="text-2xl font-semibold text-blue-700">Quality Policy</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>Provide excellent infrastructure facilities</li>
//               <li>Employ highly qualified and experienced faculty</li>
//               <li>Encourage faculty for continuous qualification improvement</li>
//               <li>Promote institute-industry interaction</li>
//               <li>Support industry-sponsored student projects and research</li>
//             </ul>
//           </div>

//           {/* Objectives */}
//           <div className="mb-6 text-left w-full">
//             <h3 className="text-2xl font-semibold text-blue-700">Objectives</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>Build personality with globally competitive technical/non-technical skills</li>
//               <li>Implement effective teaching-learning process for academic excellence</li>
//               <li>Encourage participation in co-curricular and extracurricular activities</li>
//               <li>Upgrade staff qualifications and skills</li>
//               <li>Make students employable via STPs and VAPs</li>
//               <li>Promote entrepreneurship through the EDC cell</li>
//               <li>Enhance problem-solving through PBL & Lab Innovations</li>
//               <li>Conduct FDPs such as TTT and TAP for faculty growth</li>
//               <li>Promote a culture of research among students and staff</li>
//             </ul>
//           </div>

//           {/* Distinguished Alumni */}
//           <div className="mb-6 text-left w-full">
//             <h3 className="text-2xl font-semibold text-blue-700">Distinguished Alumni</h3>
//             <p className="text-gray-700">
//               At SITS, alumni are forever a part of our journey. Whether near or far, they play a vital role in our goals and mission. We encourage alumni engagement
//               to serve each other, the college, and global communities.
//             </p>
//           </div>

//           {/* Overview */}
//           <div className="mb-6 text-left w-full">
//             <h3 className="text-2xl font-semibold text-blue-700">Overview</h3>
//             <p className="text-gray-700">
//               Established in 2008, Sinhgad Institute of Technology and Science (SITS), Narhe is the 5th engineering institute under Sinhgad Institutes. Approved by AICTE and affiliated with SPPU, it offers UG courses in Computer, IT, E&TC, Mechanical, and Civil Engineering.
//               The serene campus supports overall development, sports, research, and innovation. The faculty is highly experienced and student-centric. SITS continues to grow under the mentorship of Prof. M. N. Navale.
//             </p>
//           </div>

//           {/* Membership */}
//           <div className="mb-6 text-left w-full">
//             <h3 className="text-2xl font-semibold text-blue-700">Membership</h3>
//             <p className="text-gray-700">
//               Explore how to become a member and gain access to exclusive benefits including networking, mentorship, event invitations, and more.
//             </p>
//           </div>
//         </motion.div>

//         {/* College Image */}
//         <motion.div 
//           className="rounded-xl overflow-hidden shadow-xl border border-blue-100 mt-10 w-full md:w-3/4 lg:w-1/2"
//           initial={{ opacity: 0, y: 50 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.7 }}
//         >
//           <img
//             src="/images/sinhgad_logo.jfif"
//             alt="SITS College Building"
//             className="w-full h-auto object-cover rounded-xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
