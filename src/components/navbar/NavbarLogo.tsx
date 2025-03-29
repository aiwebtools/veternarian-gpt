
import React from 'react';
import { PawPrint, Heart } from 'lucide-react';

const NavbarLogo = () => {
  return (
    <a href="#" className="flex flex-col items-start hover-scale">
      <div className="flex items-center space-x-2">
        <PawPrint size={28} className="text-vetprimary" />
        <span className="text-xl font-semibold text-white">PetCareGPT</span>
      </div>
      <a 
        href="https://aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs text-gray-400 ml-9 hover:text-vetprimary transition-colors"
      >
        Presented by AiWebTools.Ai
      </a>
      <span className="text-xs text-white ml-9 flex items-center">
        Made with <Heart size={12} className="mx-1 text-[#ea384c] animate-pulse" fill="#ea384c" /> for better and free healthcare
      </span>
    </a>
  );
};

export default NavbarLogo;
