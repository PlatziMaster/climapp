import React from 'react';
import '@styles/BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop id="BackgroundVideo" >
      <source src="https://arepa.s3.amazonaws.com/rain.mp4" type="video/mp4" />
      Tu navegador no soporta HTML5.
    </video>
  );
}

export default BackgroundVideo;