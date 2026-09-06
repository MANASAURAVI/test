import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import TechPageLoader from './components/TechPageLoader';

// Lazy-loaded pages for fast initial page load & code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const CodeOfConductPage = lazy(() => import('./pages/CodeOfConductPage'));
const SponsorsPage = lazy(() => import('./pages/SponsorsPage'));
const CFPPage = lazy(() => import('./pages/CFPPage'));
const CFVPage = lazy(() => import('./pages/CFVPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const VALID_ROUTES = [
  '/',
  '/overview/team',
  '/overview/code-of-conduct',
  '/conference/sponsors',
  '/conference/call-for-papers',
  '/conference/call-for-volunteers',
  '/contact'
];

function AppContent() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Trigger ultra-fast loader and reset scroll position on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
  }, [location.pathname]);

  const handleOpenRegister = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  // Automatically hide Footer on all error routes (e.g., 404, 403, 500, catch-all)
  const isErrorPage = !VALID_ROUTES.includes(location.pathname);

  return (
    <div className="bsides-app">
      {/* 0.5-SECOND ULTRA-FAST HIGH TECH LOADING ANIMATION OVERLAY */}
      {isLoading && (
        <TechPageLoader duration={500} onComplete={() => setIsLoading(false)} />
      )}

      {/* HEADER / NAVIGATION */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* MAIN ROUTE CONTENT */}
      <main className="main-content-viewport">
        <Suspense fallback={<TechPageLoader duration={500} />}>
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

            {/* ERROR ROUTES (ALL SHARE THE EXACT SAME MOUNTAIN EXPEDITION HUD DESIGN) */}
            <Route path="/404" element={<ErrorPage code="404" />} />
            <Route path="/403" element={<ErrorPage code="403" />} />
            <Route path="/500" element={<ErrorPage code="500" />} />
            <Route path="/503" element={<ErrorPage code="503" />} />

            {/* 404 CATCH-ALL ROUTE */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* FOOTER (Hides automatically on error pages like 404, 403, etc.) */}
      {!isErrorPage && <Footer />}

      {/* REGISTRATION MODAL */}
      <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
