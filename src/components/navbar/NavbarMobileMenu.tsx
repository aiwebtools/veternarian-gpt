
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Brain, Stethoscope, PawPrint } from 'lucide-react';

interface NavbarMobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToDisclaimer: () => void;
}

const NavbarMobileMenu = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  scrollToDisclaimer 
}: NavbarMobileMenuProps) => {
  return (
    <div
      className={cn(
        'fixed inset-x-0 top-[56px] z-40 bg-vetdark/95 backdrop-blur-md shadow-md md:hidden overflow-hidden',
        mobileMenuOpen ? 'max-h-[80vh] py-4 opacity-100 overflow-y-auto' : 'max-h-0 py-0 opacity-0'
      )}
      style={{ transition: 'max-height 0.2s ease-in-out, padding 0.15s ease-in-out, opacity 0.15s ease-in-out' }}
    >
      <div className="flex flex-col space-y-3 px-6">
        <a 
          href="https://mentalwellnessgpt.lovable.app/" 
          className="text-gray-300 py-2 border-b border-vetmuted flex items-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Brain size={16} />
          MENTAL WELLNESS GPT
        </a>
        <a 
          href="https://aidoctorgpt.lovable.app/" 
          className="text-gray-300 py-2 border-b border-vetmuted flex items-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Stethoscope size={16} />
          AI DOCTOR GPT
        </a>
        <a 
          href="#demo" 
          className="text-gray-300 py-2 border-b border-vetmuted"
          onClick={() => setMobileMenuOpen(false)}
        >
          How It Works
        </a>
        <a 
          href="#faq" 
          className="text-gray-300 py-2 border-b border-vetmuted"
          onClick={() => setMobileMenuOpen(false)}
        >
          FAQ
        </a>
        <a 
          href="#disclaimer" 
          className="text-gray-300 py-2 border-b border-vetmuted flex items-center gap-2"
          onClick={() => {
            setMobileMenuOpen(false);
            scrollToDisclaimer();
          }}
        >
          <AlertTriangle size={14} />
          Disclaimer
        </a>
        <Button 
          asChild 
          variant="default"
          className="mt-2 bg-vetprimary hover:bg-vethighlight text-white w-full flex items-center justify-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">
            <PawPrint className="h-4 w-4 animate-pulse" />
            Try AI Veterinarian GPT
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
