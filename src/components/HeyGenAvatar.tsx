
import React, { useEffect, useRef } from 'react';

const HeyGenAvatar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';
    
    // Set up HeyGen iframe
    const clientWidth = document.body.clientWidth;
    
    // Create the container
    const container = document.createElement('div');
    container.id = 'heygen-streaming-container';
    container.style.width = '100%';
    container.style.height = '100%';
    
    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.allowFullscreen = false;
    iframe.title = "HeyGen AI Assistant";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = "https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJBbm5fRG9jdG9yX1NpdHRpbmdfcHVibGlj%0D%0AIiwicHJldmlld0ltZyI6Imh0dHBzOi8vZmlsZXMyLmhleWdlbi5haS9hdmF0YXIvdjMvMjZkZTM2%0D%0AOWIyZDQ0NDNlNTg2ZGVkZjI3YWYxZTBjMWRfNDU1NzAvcHJldmlld190YWxrXzEud2VicCIsIm5l%0D%0AZWRSZW1vdmVCYWNrZ3JvdW5kIjpmYWxzZSwia25vd2xlZGdlQmFzZUlkIjoiZWU5M2YzNzI3MTdk%0D%0ANDFhMmJhOGFiMDM1YTAyMzQyNjEiLCJ1c2VybmFtZSI6IjlkNjcxNjU4ZjFmOTRiNzE5YjJlNTg4%0D%0ANjM1ZDAxZjdiIn0%3D&inIFrame=1";
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    
    // Append elements
    container.appendChild(iframe);
    containerRef.current.appendChild(container);
    
    return () => {
      // Clean up on component unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div id="heygen-avatar-section" className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Interactive AI Veterinary Assistant Demo
      </h2>
      <div 
        ref={containerRef} 
        className="rounded-lg border border-vetmuted/40 overflow-hidden bg-vetcard shadow-md" 
        style={{ 
          width: '100%', 
          height: '366px',
          margin: '0 auto'
        }}
      ></div>
      <p className="text-center mt-4 text-gray-300 text-sm">
        Interact with our AI veterinary assistant powered by HeyGen technology
      </p>
    </div>
  );
};

export default HeyGenAvatar;
