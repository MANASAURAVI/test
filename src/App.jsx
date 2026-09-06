import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import CodeOfConductPage from './pages/CodeOfConductPage';
import SponsorsPage from './pages/SponsorsPage';
import CFPPage from './pages/CFPPage';
import CFVPage from './pages/CFVPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  return (
    <Router>
      <div className="bsides-app">
        {/* HEADER / NAVIGATION */}
        <Navbar onOpenRegister={handleOpenRegister} />

        {/* MAIN ROUTE CONTENT */}
        <main className="main-content-viewport">
          <Routes>
            <Route path="/" element={<HomePage onOpenRegister={handleOpenRegister} />} />
            
            {/* OVERVIEW ROUTES */}
            <Route path="/overview/team" element={<TeamPage />} />
            <Route path="/overview/code-of-conduct" element={<CodeOfConductPage />} />

            {/* CONFERENCE ROUTES */}
            <Route path="/conference/sponsors" element={<SponsorsPage />} />
            <Route path="/conference/call-for-papers" element={<CFPPage />} />
            <Route path="/conference/call-for-volunteers" element={<CFVPage />} />

            {/* DIRECT ROUTES */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 CATCH-ALL ROUTE */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

        {/* REGISTRATION MODAL */}
        <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
      </div>
    </Router>
  );
}
