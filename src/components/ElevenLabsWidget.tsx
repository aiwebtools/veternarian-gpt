
import React, { useState } from 'react';
import { Headset } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ElevenLabsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 rounded-lg shadow-lg bg-gradient-to-br from-indigo-900 to-purple-900 border border-purple-500 overflow-hidden"
            style={{ width: '350px', height: '450px' }}
          >
            <div className="w-full h-full relative">
              <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-between px-4">
                <span className="text-white font-medium">VetGPT Voice Assistant</span>
                <button 
                  onClick={toggleWidget}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="pt-10 h-full">
                <elevenlabs-convai agent-id="I8RfQPUxx0Hpc4fqbPNJ"></elevenlabs-convai>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleWidget}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:shadow-glow hover:shadow-purple-400/50 transition-all duration-300"
      >
        <Headset size={24} className={isOpen ? "animate-pulse" : ""} />
      </motion.button>
    </div>
  );
};

export default ElevenLabsWidget;
