
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Show the disclaimer after a short delay
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Save to localStorage so we don't show it again
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500 text-white">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
            Important Disclaimer
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-1 space-y-4">
          <p className="font-medium leading-relaxed">
            Veterinarian GPT provides general pet health information but is <span className="text-yellow-300 font-semibold">not a substitute</span> for professional veterinary care.
          </p>
          
          <p className="text-sm text-purple-200">
            Always consult with a licensed veterinarian for medical advice, diagnosis, or treatment for your pet.
          </p>
          
          <div className="rounded-lg bg-purple-800/50 p-3 border border-purple-400/30">
            <p className="text-sm italic">
              By clicking "I Agree", you acknowledge that you've read and understood that this service does not replace professional veterinary care.
            </p>
          </div>
        </div>

        <DialogFooter className="flex justify-center pt-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleAgree}
              size="lg" 
              className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-2 border-white/20 shadow-lg"
            >
              I AGREE
            </Button>
          </motion.div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
