
import React, { useEffect } from 'react';

const ElevenLabsWidget = () => {
  useEffect(() => {
    // Ensure ElevenLabs API key is accessible
    if (!window.ELEVENLABS_API_KEY) {
      console.error('ElevenLabs API key is not set');
    }
    
    // Request microphone access when component mounts
    const requestMicrophoneAccess = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log('Microphone access granted');
      } catch (error) {
        console.error('Error requesting microphone access:', error);
      }
    };
    
    requestMicrophoneAccess();
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <elevenlabs-convai 
        agent-id="yOmSWDuyoRgfsfFff9cM"
        mic-muting-enabled="true"
      ></elevenlabs-convai>
    </div>
  );
};

export default ElevenLabsWidget;
