// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Home from './pages/Home';
// import MemberSection from './components/MemberSection';
// import NotFound from './pages/NotFound';
// import AlumniProfileView from './pages/AlumniProfileView';
// import AlumniSessions from './pages/AlumniSessions';
// import Internships from './pages/Internships';
// import ConnectForum from './pages/ConnectForum';
// import Membership from './pages/Membership'; // ✅ New import
// import AlumniProfileForm from './pages/AlumniProfileForm';
// import AdminDashboard from './pages/AdminDashboard'; // ✅ add this


// import { AuthProvider, useAuth } from './context/AuthContext';

// // 🔒 Private route wrapper for authenticated access
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>

//           {/* 🌐 Public Home */}
//           <Route path="/" element={<Home />} />

//           {/* 🔐 Protected: Member List */}
//           <Route
//             path="/members"
//             element={
//               <PrivateRoute>
//                 <MemberSection />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Alumni Profile Form */}
//           <Route
//             path="/alumni-profile"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileForm />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Alumni Corner Pages */}
//           <Route
//             path="/alumni-sessions"
//             element={
//               <PrivateRoute>
//                 <AlumniSessions />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/internships"
//             element={
//               <PrivateRoute>
//                 <Internships />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/connect-forum"
//             element={
//               <PrivateRoute>
//                 <ConnectForum />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Membership Page */}
//           <Route
//             path="/membership"
//             element={
//               <PrivateRoute>
//                 <Membership />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/profile/:id"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileView />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/admin-dashboard"
//             element={
              
//                 <AdminDashboard />
              
//             }
//           />

//           {/* ❌ Not Found */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import MemberSection from './components/MemberSection';
import NotFound from './pages/NotFound';
import AlumniProfileView from './pages/AlumniProfileView';
import AlumniSessions from './pages/AlumniSessions';
import Internships from './pages/Internships';
import ConnectForum from './pages/ConnectForum';
import Membership from './pages/Membership';
import AlumniProfileForm from './pages/AlumniProfileForm';
import AdminDashboard from './pages/AdminDashboard';
import Events from './components/Events';

// ✅ New imports for About and Contact pages
import AboutUs from './components/About';
import ContactUs from './components/Contact';

import { AuthProvider, useAuth } from './context/AuthContext';

// 🔒 Private route wrapper for authenticated access
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* 🌐 Public Home */}
          <Route path="/" element={<Home />} />

          {/* 🔐 Protected: Member List */}
          <Route
            path="/members"
            element={
              <PrivateRoute>
                <MemberSection />
              </PrivateRoute>
            }
          />

          {/* 🔐 Protected: Alumni Profile Form */}
          <Route
            path="/alumni-profile"
            element={
              <PrivateRoute>
                <AlumniProfileForm />
              </PrivateRoute>
            }
          />

          {/* 🔐 Protected: Alumni Corner Pages */}
          <Route
            path="/alumni-sessions"
            element={
              <PrivateRoute>
                <AlumniSessions />
              </PrivateRoute>
            }
          />
          <Route
            path="/internships"
            element={
              <PrivateRoute>
                <Internships />
              </PrivateRoute>
            }
          />
          <Route
            path="/connect-forum"
            element={
              <PrivateRoute>
                <ConnectForum />
              </PrivateRoute>
            }
          />

          {/* 🔐 Protected: Membership Page */}
          <Route
            path="/membership"
            element={
              <PrivateRoute>
                <Membership />
              </PrivateRoute>
            }
          />

          {/* 🔐 Protected: Profile View */}
          <Route
            path="/profile/:id"
            element={
              <PrivateRoute>
                <AlumniProfileView />
              </PrivateRoute>
            }
          />

          {/* 🔓 Public: Admin Dashboard */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* 🌐 Public: Events Page */}
          <Route path="/events" element={<Events />} />

          {/* 🌐 Public: About Us and Contact Us */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* ❌ Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
