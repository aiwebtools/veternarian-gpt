
import React from 'react';
import { AlertTriangle, Brain, Stethoscope, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavbarDesktopMenuProps {
  scrollToDisclaimer: () => void;
  isButtonHovered: boolean;
  setIsButtonHovered: (hovered: boolean) => void;
}

const NavbarDesktopMenu = ({ 
  scrollToDisclaimer, 
  isButtonHovered, 
  setIsButtonHovered 
}: NavbarDesktopMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <div className="flex items-center space-x-6 mr-4">
        <Button 
          variant="ghost"
          className="text-gray-300 hover:text-vetprimary hover:bg-transparent transition-colors flex items-center gap-1 text-xs p-0 whitespace-nowrap"
          onClick={scrollToDisclaimer}
        >
          <AlertTriangle size={12} />
          <span className="ml-1">Disclaimer</span>
        </Button>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button 
          asChild 
          variant="ghost" 
          className="text-gray-300 hover:text-vetprimary hover:bg-transparent transition-colors flex items-center gap-1 text-xs py-1 px-2 whitespace-nowrap"
        >
          <a href="https://mentalwellnessgpt.lovable.app/" target="_blank" rel="noopener noreferrer">
            <Brain size={14} />
            <span className="ml-1">MENTAL WELLNESS GPT</span>
          </a>
        </Button>
        
        <Button 
          asChild 
          variant="ghost" 
          className="text-gray-300 hover:text-vetprimary hover:bg-transparent transition-colors flex items-center gap-1 text-xs py-1 px-2 whitespace-nowrap"
        >
          <a href="https://aidoctorgpt.lovable.app/" target="_blank" rel="noopener noreferrer">
            <Stethoscope size={14} />
            <span className="ml-1">AI DOCTOR GPT</span>
          </a>
        </Button>
        
        <Button 
          asChild 
          variant="default"
          size="sm"
          className={cn(
            "bg-vetprimary hover:bg-vethighlight text-white btn-hover-effect glow-on-hover transition-transform duration-300 whitespace-nowrap",
            isButtonHovered ? "scale-110 shadow-lg shadow-vetprimary/50" : ""
          )}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <a 
            href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <PawPrint className={cn("h-4 w-4 mr-1", isButtonHovered ? "animate-bounce" : "")} />
            Try AI Veterinarian GPT
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NavbarDesktopMenu;
