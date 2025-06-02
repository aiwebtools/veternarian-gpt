
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import DisclaimerModal from '@/components/DisclaimerModal';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import HeyGenAvatar from '@/components/HeyGenAvatar';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Divine animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-blue-900/30 animate-gradient-shift"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.15),transparent_50%)] animate-float"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_50%)] animate-float" style={{animationDelay: '3s'}}></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(16,185,129,0.1),transparent_50%)] animate-float" style={{animationDelay: '6s'}}></div>
      
      {/* Content overlay */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80">
        <Navbar />
        <main>
          <Hero />
          <div id="disclaimer" className="py-20 px-6 bg-gradient-to-br from-slate-900/95 via-purple-900/20 to-blue-900/30 relative">
            {/* Divine background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-emerald-600/5 animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.08),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.06),transparent_60%)]"></div>
            
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                  🚨 Legal Disclaimer
                </h2>
                <p className="text-xl text-gray-300 font-medium">For informational, educational and research purposes only</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 via-purple-900/20 to-blue-900/30 backdrop-blur-md p-10 rounded-2xl border border-purple-500/20 shadow-2xl">
                <div className="grid gap-8">
                  <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-6 border border-red-500/20">
                    <p className="text-gray-200 mb-4 text-lg leading-relaxed">
                      <strong className="text-red-400">Not a Substitute for Professional Care:</strong> PetCareGPT is an AI tool designed to provide general information about pet health. It is not a substitute for professional veterinary advice, diagnosis, or treatment. This service does not establish a veterinarian-client-patient relationship (VCPR).
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-500/20">
                    <p className="text-gray-200 mb-4 text-lg leading-relaxed">
                      <strong className="text-yellow-400">Emergency Situations:</strong> Always seek the advice of your veterinarian with any questions you may have regarding your pet's medical condition. Never disregard professional veterinary advice or delay in seeking it because of something you have read on this website or received from this AI tool.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20">
                    <p className="text-gray-200 mb-4 text-lg leading-relaxed">
                      <strong className="text-blue-400">Limitation of Liability:</strong> By using PetCareGPT, you acknowledge and agree that AI WEB TOOLS LLC and its affiliates shall not be liable for any damages, direct or indirect, arising from your use of or reliance on any information provided by this service.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20">
                    <p className="text-gray-200 mb-4 text-lg leading-relaxed">
                      <strong className="text-purple-400">Image Analysis Limitations:</strong> While our AI can analyze images to provide general observations, these should not be considered diagnostic. Visual assessments have limitations and cannot replace physical examination by a qualified veterinarian.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-xl p-6 border border-emerald-500/20">
                    <p className="text-gray-200 text-lg leading-relaxed">
                      <strong className="text-emerald-400">Urgent Care:</strong> In case of emergency, contact your local veterinary emergency services immediately at the first sign of distress or concerning symptoms in your pet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* HeyGen Avatar placed after disclaimer and before Features */}
          <HeyGenAvatar />
          
          <Features />
          <Demo />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <DisclaimerModal />
        <ElevenLabsWidget />
      </div>
    </div>
  );
};

export default Index;
