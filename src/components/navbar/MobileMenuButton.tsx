
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenuButton = ({ mobileMenuOpen, toggleMobileMenu }: MobileMenuButtonProps) => {
  return (
    <button
      className="md:hidden text-white focus:outline-none touch-manipulation"
      onClick={toggleMobileMenu}
      aria-label="Toggle mobile menu"
    >
      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuButton;
