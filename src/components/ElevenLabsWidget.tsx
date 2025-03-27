
import React from 'react';
import { motion } from 'framer-motion';

const ElevenLabsWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-3 py-2 shadow-lg flex items-center justify-center hover:shadow-glow hover:shadow-purple-400/50 transition-all duration-300"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold">LIVE</span>
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
        </div>
        <elevenlabs-convai agent-id="I8RfQPUxx0Hpc4fqbPNJ"></elevenlabs-convai>
      </motion.div>
    </div>
  );
};

export default ElevenLabsWidget;
