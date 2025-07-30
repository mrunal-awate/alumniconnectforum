import React from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Contact Us | SITS Alumni</title>
        <meta name="description" content="Get in touch with SITS Alumni Association via phone, email, or visit us at our campus." />
      </Helmet>

      <div className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 animate-fade-in">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-700 mb-10">We’d love to hear from you. Reach us using the details below or drop us a message.</p>

        <div className="grid md:grid-cols-3 gap-8 text-left text-gray-800 mb-16">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl text-blue-700" />
            <div>
              <p className="font-semibold">Email</p>
              <p>sitsalumni@college.edu</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-3xl text-green-700" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+91-9876543210</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-3xl text-red-600" />
            <div>
              <p className="font-semibold">Location</p>
              <p>SITS Campus, Pune, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Optional Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Send us a message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Embed */}
        <div className="mt-16">
          <iframe
            title="SITS Map"
            src="https://maps.google.com/maps?q=SITS%20Campus%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;
