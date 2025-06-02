
import React from 'react';
import { PawPrint, Heart, Mail, Phone, Instagram, Shield, AlertTriangle, FileText, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Custom TikTok icon component
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const scrollToDisclaimer = () => {
    const disclaimerElement = document.getElementById('disclaimer');
    if (disclaimerElement) {
      disclaimerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFaq = () => {
    const faqElement = document.getElementById('faq');
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900/95 via-purple-900/20 to-blue-900/30 border-t border-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30 py-16 px-6 md:px-8 relative overflow-hidden">
      {/* Divine background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-emerald-600/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)] animate-float"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.12),transparent_50%)] animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex flex-col items-start hover-scale group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <PawPrint size={32} className="text-purple-400 group-hover:text-blue-400 transition-all duration-500 drop-shadow-lg filter" />
                  <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">PetCareGPT</span>
              </div>
              <div className="ml-12">
                <a 
                  href="https://aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-300 block hover:text-purple-400 transition-colors duration-300"
                >
                  Presented by AiWebTools.Ai
                </a>
                <span className="text-sm text-gray-100 flex items-center mt-1">
                  Made with <Heart size={14} className="mx-2 text-pink-400 animate-pulse" fill="#f472b6" /> for better and free healthcare
                </span>
              </div>
            </a>
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 mt-6 border border-purple-500/20">
              <p className="text-gray-200 mb-4 leading-relaxed">
                AI-powered virtual veterinary assistance providing general pet health information only. Not a substitute for professional veterinary care.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={16} className="text-yellow-400 animate-pulse" />
                <span className="text-sm text-gray-300">
                  Does not establish a veterinarian-client-patient relationship (VCPR)
                </span>
              </div>
              <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-lg p-4 border border-amber-500/20">
                <p className="text-xs text-amber-200 font-medium">
                  ⚠️ For informational, educational and research purposes only
                </p>
              </div>
            </div>
            <div className="flex space-x-6 mt-6">
              <a href="https://www.instagram.com/aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-7 w-7 drop-shadow-lg" />
              </a>
              <a href="https://www.tiktok.com/@aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <TikTokIcon className="h-7 w-7 drop-shadow-lg" />
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent uppercase tracking-wider mb-6">Legal Information</h3>
            <ul className="space-y-4">
              <li><a href="https://aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block">About Us</a></li>
              <li><a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block">Privacy Policy</a></li>
              <li><a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block">Terms of Service</a></li>
              <li><Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-200 border-purple-500/30 hover:bg-purple-500/20 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  onClick={scrollToDisclaimer}
                >
                  <AlertTriangle size={14} className="mr-2 text-yellow-400" />
                  LEGAL DISCLAIMER
                </Button>
              </li>
              <li>
                <span className="text-gray-200 font-semibold">Contact:</span>
                <div className="ml-2 mt-2 space-y-3">
                  <a href="mailto:contact@ai-webtools.com" className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center gap-3 hover:translate-x-2">
                    <Mail size={16} className="text-purple-400" />
                    contact@ai-webtools.com
                  </a>
                  <a href="tel:+14758008096" className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-3 hover:translate-x-2">
                    <Phone size={16} className="text-blue-400" />
                    (475) 800-8096
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/30 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase tracking-wider mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-200 border-blue-500/30 hover:bg-blue-500/20 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full"
                  onClick={() => window.open('https://www.aiwebtools.ai', '_blank')}
                >
                  MORE AI TOOLS
                </Button>
              </li>
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-200 border-purple-500/30 hover:bg-purple-500/20 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 w-full"
                  onClick={() => window.open('https://mentalwellnessgpt.lovable.app/', '_blank')}
                >
                  <Brain size={14} className="mr-2" />
                  MENTAL WELLNESS GPT
                </Button>
              </li>
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-200 border-emerald-500/30 hover:bg-emerald-500/20 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 w-full"
                  onClick={() => window.open('https://www.aidoctorgpt.com', '_blank')}
                >
                  AI DOCTOR GPT
                </Button>
              </li>
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-200 border-yellow-500/30 hover:bg-yellow-500/20 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 w-full"
                  onClick={scrollToFaq}
                >
                  <FileText size={14} className="mr-2" />
                  FAQ
                </Button>
              </li>
              <li>
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="text-gray-200 border-green-500/30 hover:bg-green-500/20 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 w-full"
                >
                  <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer">
                    <Shield size={14} className="mr-2" />
                    TERMS OF SERVICE
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 mt-12 border-t border-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-base font-medium">
            © {new Date().getFullYear()} {" "}
            <a 
              href="https://aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 font-semibold"
            >
              AI WEB TOOLS LLC
            </a>
            . All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-3 md:mt-0 font-medium">
            PetCareGPT is for informational purposes only. Not a substitute for professional veterinary care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
