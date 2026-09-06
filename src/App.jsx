import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import AdminTerminal from './components/AdminTerminal';
import CommandHUD from './components/CommandHUD';
import CommandPaletteModal from './components/CommandPaletteModal';
import WeatherHUDModal from './components/WeatherHUDModal';
import VenueRadarModal from './components/VenueRadarModal';
import CTFChallengeModal from './components/CTFChallengeModal';
import MatrixRainOverlay from './components/MatrixRainOverlay';
import CustomThemeModal from './components/CustomThemeModal';
import TechPageLoader from './components/TechPageLoader';
import DharamshalaTempWidget from './components/DharamshalaTempWidget';
import SnowEffect from './components/SnowEffect';

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

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function AppContent() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Modals & Overlay States
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const [isRadarOpen, setIsRadarOpen] = useState(false);
  const [isCTFOpen, setIsCTFOpen] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(() => {
    return localStorage.getItem('bsides_matrix_active') === 'true';
  });
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  // Matrix Mode Persistence Effect
  useEffect(() => {
    const root = document.documentElement;
    if (isMatrixActive) {
      localStorage.setItem('bsides_matrix_active', 'true');
      root.setAttribute('data-matrix-mode', 'active');
    } else {
      localStorage.setItem('bsides_matrix_active', 'false');
      root.removeAttribute('data-matrix-mode');
    }
  }, [isMatrixActive]);

  // Global Toggle States & Custom Theme
  const [customTheme, setCustomTheme] = useState(() => {
    const saved = localStorage.getItem('bsides_custom_theme');
    return saved ? JSON.parse(saved) : null;
  });
  const [isReaderMode, setIsReaderMode] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  // Instant scroll-to-top on route change without blocking screen
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const isContactPage = location.pathname === '/contact';

  // Theme Sync effect (Custom accent color / default crimson)
  useEffect(() => {
    const root = document.documentElement;
    if (customTheme) {
      root.setAttribute('data-theme', 'custom');
      root.style.setProperty('--accent-red', customTheme.color);
      root.style.setProperty('--accent-red-hover', customTheme.hover || customTheme.color);
      root.style.setProperty('--accent-red-glow', customTheme.glow || `rgba(${customTheme.rgb}, 0.4)`);
      root.style.setProperty('--border-red-glow', customTheme.glow || `rgba(${customTheme.rgb}, 0.5)`);
      root.style.setProperty('--accent-rgb', customTheme.rgb || '255, 22, 56');
      root.style.setProperty('--temp-pulse-color', customTheme.color);
    } else {
      root.removeAttribute('data-theme');
      root.style.setProperty('--accent-red', '#FF1638');
      root.style.setProperty('--accent-red-hover', '#FF304F');
      root.style.setProperty('--accent-red-glow', 'rgba(255, 22, 56, 0.4)');
      root.style.setProperty('--border-red-glow', 'rgba(255, 22, 56, 0.5)');
      root.style.setProperty('--accent-rgb', '255, 22, 56');
      root.style.setProperty('--temp-pulse-color', '#FF1638');
      document.body.removeAttribute('data-temp-mode');
    }
  }, [customTheme]);

  const handleApplyCustomTheme = (themeObj) => {
    setCustomTheme(themeObj);
    localStorage.setItem('bsides_custom_theme', JSON.stringify(themeObj));
  };

  const handleResetTheme = () => {
    setCustomTheme(null);
    localStorage.removeItem('bsides_custom_theme');
  };

  // Sync Reader Mode & Low Power Mode attributes on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isReaderMode) {
      root.setAttribute('data-reader-mode', 'active');
    } else {
      root.removeAttribute('data-reader-mode');
    }
  }, [isReaderMode]);

  useEffect(() => {
    const root = document.documentElement;
    if (isLowPower) {
      root.setAttribute('data-low-power', 'active');
    } else {
      root.removeAttribute('data-low-power');
    }
  }, [isLowPower]);

  // Global Key Down Listener for Tactical Shortcuts
  useEffect(() => {
    let konamiIndex = 0;
    const pressedSet = new Set();

    const handleKeyDown = (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toUpperCase() : '';
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || document.activeElement.isContentEditable) {
        return;
      }

      const key = e.key ? e.key.toLowerCase() : '';
      const code = e.code ? e.code.toLowerCase() : '';
      const isShift = e.shiftKey;
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      pressedSet.add(key);

      // 1. Konami Code Sequence Detection
      if (e.key === KONAMI_CODE[konamiIndex] || key === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
          konamiIndex = 0;
          setIsMatrixActive(true);
        }
      } else {
        konamiIndex = 0;
      }

      // 2. Cmd/Ctrl + K or Shift + K -> Command Palette Search
      if ((isCtrlOrCmd && (key === 'k' || code === 'keyk')) || (isShift && (key === 'k' || code === 'keyk'))) {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
        return;
      }

      // 3. Shift + W -> Weather HUD
      if (isShift && (key === 'w' || code === 'keyw')) {
        e.preventDefault();
        setIsWeatherOpen((prev) => !prev);
        return;
      }

      // 4. Shift + M -> Venue Radar
      if (isShift && (key === 'm' || code === 'keym')) {
        e.preventDefault();
        setIsRadarOpen((prev) => !prev);
        return;
      }

      // 5. Shift + D -> Tactical Theme Customizer Modal
      if (isShift && (key === 'd' || code === 'keyd')) {
        e.preventDefault();
        setIsThemeModalOpen((prev) => !prev);
        return;
      }

      // 6. Shift + B -> Reader / High-Legibility Mode
      if (isShift && (key === 'b' || code === 'keyb')) {
        e.preventDefault();
        setIsReaderMode((prev) => !prev);
        return;
      }

      // 7. Shift + G -> Low Power / Reduced Motion Mode
      if (isShift && (key === 'g' || code === 'keyg')) {
        e.preventDefault();
        setIsLowPower((prev) => !prev);
        return;
      }

      // 8. Shift + E -> Exit Konami Matrix Mode
      if (isShift && (key === 'e' || code === 'keye')) {
        e.preventDefault();
        setIsMatrixActive(false);
        return;
      }

      // 8. Shift + F + L -> CTF Challenge
      const hasShift = isShift || pressedSet.has('shift');
      const hasF = pressedSet.has('f');
      const hasL = pressedSet.has('l');
      if (hasShift && hasF && hasL) {
        e.preventDefault();
        setIsCTFOpen((prev) => !prev);
        return;
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key ? e.key.toLowerCase() : '';
      pressedSet.delete(key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Background preloading of all page chunks for 0ms instant page switching
  useEffect(() => {
    const preloadPages = () => {
      import('./pages/HomePage');
      import('./pages/TeamPage');
      import('./pages/CodeOfConductPage');
      import('./pages/SponsorsPage');
      import('./pages/CFPPage');
      import('./pages/CFVPage');
      import('./pages/ContactPage');
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadPages);
    } else {
      setTimeout(preloadPages, 800);
    }
  }, []);

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

      {/* REAL-TIME DHARAMSHALA LIVE TEMPERATURE BADGE & DYNAMIC SNOWFALL (ONLY ACTIVE ON GET IN TOUCH / CONTACT PAGE) */}
      {isContactPage && !isLowPower && (
        <>
          <DharamshalaTempWidget />
          <SnowEffect />
        </>
      )}

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

            {/* ERROR ROUTES */}
            <Route path="/404" element={<ErrorPage code="404" />} />
            <Route path="/403" element={<ErrorPage code="403" />} />
            <Route path="/500" element={<ErrorPage code="500" />} />
            <Route path="/503" element={<ErrorPage code="503" />} />

            {/* 404 CATCH-ALL ROUTE */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* FOOTER */}
      {!isErrorPage && <Footer />}

      {/* REGISTRATION MODAL */}
      <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />

      {/* ADMIN TACTICAL TERMINAL OVERLAY (SHIFT + Z + X) */}
      <AdminTerminal />

      {/* TACTICAL COMMAND GUIDE HUD (SHIFT + H) */}
      <CommandHUD
        onOpenRegister={handleOpenRegister}
        onTogglePalette={() => setIsPaletteOpen(true)}
        onToggleWeather={() => setIsWeatherOpen(true)}
        onToggleRadar={() => setIsRadarOpen(true)}
        onToggleCTF={() => setIsCTFOpen(true)}
        onToggleTheme={() => setIsThemeModalOpen(true)}
      />

      {/* 1. COMMAND PALETTE SEARCH BAR (SHIFT + K) */}
      <CommandPaletteModal
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onOpenRegister={handleOpenRegister}
      />

      {/* 2. WEATHER & ALTITUDE HUD (SHIFT + W) */}
      <WeatherHUDModal
        isOpen={isWeatherOpen}
        onClose={() => setIsWeatherOpen(false)}
      />

      {/* 3. VENUE EXPEDITION RADAR (SHIFT + M) */}
      <VenueRadarModal
        isOpen={isRadarOpen}
        onClose={() => setIsRadarOpen(false)}
      />

      {/* 4. CUSTOM THEME ENGINE (SHIFT + D) */}
      <CustomThemeModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        currentHex={customTheme?.color || '#FF1638'}
        onApplyCustomTheme={handleApplyCustomTheme}
        onResetTheme={handleResetTheme}
      />

      {/* 5. CTF MINI-PUZZLE CHALLENGE (SHIFT + F + L) */}
      <CTFChallengeModal
        isOpen={isCTFOpen}
        onClose={() => setIsCTFOpen(false)}
      />

      {/* 6. KONAMI MATRIX RAIN OVERLAY (↑ ↑ ↓ ↓ ← → ← → B A) */}
      <MatrixRainOverlay
        isActive={isMatrixActive}
        onClose={() => setIsMatrixActive(false)}
      />
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
