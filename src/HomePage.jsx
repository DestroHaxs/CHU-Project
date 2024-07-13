import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Socials from './Socials';

function HomePage() {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const response = await fetch(chuVideo);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setVideoSrc(url);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-20">
        <Socials />
      </div>
      <div className="absolute bottom-16 w-full flex justify-center z-20"></div>
      <div className="absolute top-0 left-0 w-full h-full z-10 video-background">
        {videoSrc && (
          <video
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{ pointerEvents: 'none' }}
          />
        )}
        <div className="video-overlay"></div>
      </div>
    </div>
  );
}

export default HomePage;
