
import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import NavbarLogo from './NavbarLogo';
import NavbarDesktopMenu from './NavbarDesktopMenu';
import NavbarMobileMenu from './NavbarMobileMenu';
import MobileMenuButton from './MobileMenuButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Debounced scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToDisclaimer = () => {
    const disclaimerElement = document.getElementById('disclaimer');
    if (disclaimerElement) {
      disclaimerElement.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-3 px-4 md:py-4 md:px-6',
        isScrolled 
          ? 'bg-vetdark/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavbarLogo />

        <NavbarDesktopMenu 
          scrollToDisclaimer={scrollToDisclaimer}
          isButtonHovered={isButtonHovered}
          setIsButtonHovered={setIsButtonHovered}
        />

        <MobileMenuButton 
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>

      <NavbarMobileMenu 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToDisclaimer={scrollToDisclaimer}
      />
    </nav>
  );
};

export default Navbar;
