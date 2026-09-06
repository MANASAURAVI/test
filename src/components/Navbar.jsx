import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon, ArrowRightIcon, ChevronDownIcon } from './Icons';

export default function Navbar({ onOpenRegister }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState('overview');
  const [navVisible, setNavVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const hideTimerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const isDesktop = () => window.matchMedia('(min-width: 901px)').matches;

  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    if (location.pathname === '/') {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const handleLogoClick = (e) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      if (!isDesktop()) {
        if (isMobileMenuOpen) {
          setNavVisible(true);
        } else if (currentScrollY <= 30) {
          setNavVisible(true);
        } else {
          const diff = currentScrollY - lastScrollYRef.current;
          if (diff > 5) {
            // Scrolling down -> hide navbar on phone
            setNavVisible(false);
          } else if (diff < -5) {
            // Scrolling up -> show navbar on phone
            setNavVisible(true);
          }
        }
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Auto-hide navbar on desktop only
  useEffect(() => {
    const HIDE_ZONE = 80; // px from top to trigger show
    const HIDE_DELAY = 2500; // ms before auto-hide

    const scheduleHide = () => {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setNavVisible(false);
      }, HIDE_DELAY);
    };

    const handleMouseMove = (e) => {
      if (!isDesktop()) return;
      if (e.clientY <= HIDE_ZONE) {
        // Cursor near top — show immediately
        clearTimeout(hideTimerRef.current);
        setNavVisible(true);
        scheduleHide();
      }
    };

    const handleMouseLeaveDoc = () => {
      if (!isDesktop()) return;
      scheduleHide();
    };

    // Start hide timer on mount
    if (isDesktop()) scheduleHide();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveDoc);

    return () => {
      clearTimeout(hideTimerRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveDoc);
    };
  }, []);



  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMouseEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileAccordion = (sectionName) => {
    setActiveMobileAccordion(prev => prev === sectionName ? null : sectionName);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${!navVisible ? 'navbar-hidden' : ''}`}>
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" onClick={handleLogoClick} className="nav-logo-link" aria-label="BSides Dharamshala Homepage">
          <img
            src="/logo/logo.png"
            alt="BSides Dharamshala Logo"
            className="nav-logo-img"
          />
        </Link>

        {/* DESKTOP NAVIGATION WITH DROPDOWNS */}
        <nav className="nav-menu-desktop" aria-label="Main Navigation">
          {/* 01. OVERVIEW DROPDOWN */}
          <div
            className="nav-dropdown-item"
            onMouseEnter={() => handleMouseEnter('overview')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`nav-dropdown-trigger ${location.pathname.startsWith('/overview') || location.pathname === '/' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveDropdown(null);
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
            >
              OVERVIEW <ChevronDownIcon size={14} className="dropdown-arrow" />
            </button>
            <div className={`nav-dropdown-menu ${activeDropdown === 'overview' ? 'show' : ''}`}>
              <NavLink to="/overview/team" className="dropdown-link">
                TEAM
              </NavLink>
              <NavLink to="/overview/code-of-conduct" className="dropdown-link">
                CODE OF CONDUCT
              </NavLink>
            </div>
          </div>

          {/* 02. CONFERENCE DROPDOWN */}
          <div
            className="nav-dropdown-item"
            onMouseEnter={() => handleMouseEnter('conference')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`nav-dropdown-trigger ${location.pathname.startsWith('/conference') ? 'active' : ''}`}>
              CONFERENCE <ChevronDownIcon size={14} className="dropdown-arrow" />
            </button>
            <div className={`nav-dropdown-menu ${activeDropdown === 'conference' ? 'show' : ''}`}>
              <NavLink to="/conference/sponsors" className="dropdown-link">
                SPONSORS
              </NavLink>
              <NavLink to="/conference/call-for-papers" className="dropdown-link">
                CALL FOR PAPERS
              </NavLink>
              <NavLink to="/conference/call-for-volunteers" className="dropdown-link">
                CALL FOR VOLUNTEERS
              </NavLink>
            </div>
          </div>

          {/* 03. CONTACT US DIRECT LINK */}
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            CONTACT US
          </NavLink>
        </nav>

        {/* RIGHT GROUP: REGISTER CTA & HAMBURGER */}
        <div className="nav-right-group">
          <button className="btn-register-nav" onClick={onOpenRegister}>
            BE PART OF IT <ArrowRightIcon size={16} />
          </button>

          <button
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open mobile menu'}
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE BACKDROP OVERLAY FOR FLOATING LAYER */}
      <div
        className={`mobile-backdrop ${isMobileMenuOpen ? 'backdrop-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* MOBILE FLOATING LAYER DRAWER */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-header">
          <Link to="/" onClick={handleLogoClick}>
            <img src="/logo/logo.png" alt="BSides Dharamshala Logo" className="drawer-logo" />
          </Link>
          <button className="drawer-close" onClick={() => setIsMobileMenuOpen(false)}>
            <XIcon size={28} />
          </button>
        </div>

        <div className="drawer-scroll-body">
          {/* 01. OVERVIEW ACCORDION */}
          <div className={`drawer-accordion-section ${activeMobileAccordion === 'overview' ? 'expanded' : ''}`}>
            <button
              className="drawer-accordion-header"
              onClick={() => toggleMobileAccordion('overview')}
            >
              <span className="drawer-accordion-title">01 // OVERVIEW</span>
              <ChevronDownIcon size={16} className={`drawer-accordion-icon ${activeMobileAccordion === 'overview' ? 'open' : ''}`} />
            </button>
            {activeMobileAccordion === 'overview' && (
              <div className="drawer-sublinks">
                <Link to="/overview/team" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                <Link to="/overview/code-of-conduct" onClick={() => setIsMobileMenuOpen(false)}>Code of Conduct</Link>
              </div>
            )}
          </div>

          {/* 02. CONFERENCE ACCORDION */}
          <div className={`drawer-accordion-section ${activeMobileAccordion === 'conference' ? 'expanded' : ''}`}>
            <button
              className="drawer-accordion-header"
              onClick={() => toggleMobileAccordion('conference')}
            >
              <span className="drawer-accordion-title">02 // CONFERENCE</span>
              <ChevronDownIcon size={16} className={`drawer-accordion-icon ${activeMobileAccordion === 'conference' ? 'open' : ''}`} />
            </button>
            {activeMobileAccordion === 'conference' && (
              <div className="drawer-sublinks">
                <Link to="/conference/sponsors" onClick={() => setIsMobileMenuOpen(false)}>Sponsors</Link>
                <Link to="/conference/call-for-papers" onClick={() => setIsMobileMenuOpen(false)}>Call for Papers</Link>
                <Link to="/conference/call-for-volunteers" onClick={() => setIsMobileMenuOpen(false)}>Call for Volunteers</Link>
              </div>
            )}
          </div>

          {/* 03. CONTACT US DIRECT LINK */}
          <div className="drawer-accordion-section direct-item">
            <Link to="/contact" className="drawer-direct-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="drawer-accordion-title">03 // CONTACT US</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>

        <div className="drawer-footer">
          <button
            className="btn-register-nav drawer-cta"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenRegister();
            }}
          >
            BE PART OF IT <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
