import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

// Lazy-loaded pages for fast initial page load & code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const CodeOfConductPage = lazy(() => import('./pages/CodeOfConductPage'));
const SponsorsPage = lazy(() => import('./pages/SponsorsPage'));
const CFPPage = lazy(() => import('./pages/CFPPage'));
const CFVPage = lazy(() => import('./pages/CFVPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="route-loader-viewport">
      <div className="route-loader-spinner" />
      <span className="route-loader-text">BSIDES DHARAMSHALA // LOADING...</span>
    </div>
  );
}

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
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>

        {/* FOOTER */}
        <Footer />

        {/* REGISTRATION MODAL */}
        <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
      </div>
    </Router>
  );
}
