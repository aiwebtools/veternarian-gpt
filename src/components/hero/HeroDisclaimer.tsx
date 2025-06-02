
import React from 'react';
import { CircleHelp, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroDisclaimer = () => {
  return (
    <div className="mt-20 relative">
      {/* Divine background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-emerald-600/5 rounded-2xl animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)] rounded-2xl"></div>
      
      <div className="relative bg-gradient-to-br from-slate-800/60 via-purple-900/20 to-blue-900/30 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 md:p-10 shadow-2xl animate-on-scroll hover:shadow-purple-500/10 transition-all duration-500" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-2">
            <div className="relative">
              <AlertTriangle className="h-8 w-8 text-red-400 animate-pulse drop-shadow-lg" />
              <div className="absolute inset-0 bg-red-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              🚨 Important Legal Disclaimer
            </h3>
            
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p className="text-base">
                PetCareGPT/Veterinarian GPT is NOT a licensed veterinarian and does not establish a veterinarian-client-patient relationship (VCPR). This AI tool provides general pet health guidance and should not be used for diagnosis, prescription, or medical treatment.
              </p>
              <p className="text-base">
                While we strive for accuracy, all advice is for informational purposes only. Users must verify any information before making pet healthcare decisions. For urgent or serious pet health concerns, contact a licensed veterinarian immediately. In emergencies, seek immediate veterinary assistance or visit an animal hospital.
              </p>
              <p className="text-base">
                By using this tool, you acknowledge its limitations and agree to seek professional veterinary care when needed.
              </p>
              
              {/* Educational disclaimer box */}
              <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30 mt-6">
                <p className="text-amber-200 font-semibold text-center">
                  ⚠️ This service is provided for informational, educational and research purposes only
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild variant="outline" size="sm" className="border-purple-500/30 text-gray-200 hover:bg-purple-500/20 hover:text-white hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer">
                  <Shield className="h-5 w-5 mr-2" />Terms of Service
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-blue-500/30 text-gray-200 hover:bg-blue-500/20 hover:text-white hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  <Shield className="h-5 w-5 mr-2" />Privacy Policy
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDisclaimer;
