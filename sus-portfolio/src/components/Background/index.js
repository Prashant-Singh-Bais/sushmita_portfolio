import React, { useEffect, useRef, useState } from 'react';
import './index.scss'
function BackgroundCover({ divClassName, heightOffset, bgColor, bgImage }) {
  heightOffset = heightOffset ? heightOffset : 1;
  bgColor = bgColor ? bgColor : '#00000000';
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const [backgroundTop, setBackgroundTop] = useState(0);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const targetDiv = document.querySelector(`.${divClassName}`);
    if (targetDiv) {
      const height = targetDiv.clientHeight;
      const { top } = targetDiv.getBoundingClientRect();
      setBackgroundHeight(height * heightOffset);
      setBackgroundTop(top + window.scrollY);
    }
  }, [divClassName]);

  return (
    <div
      className="background"
      ref={backgroundRef}
      style={{
        top: `${backgroundTop}px`,
        height: `${backgroundHeight}px`,
        left: 0,
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 0,
        backgroundColor: `${bgColor}`,
        transform: 'translateX(-10%)',
        width: '110vw', /* Set the width as desired */
        backgroundImage: bgImage ? `url(${bgImage})` : 'none', // Fixed the backgroundImage syntax
        //backgroundSize: `100vw ${backgroundHeight}px`, // Ensuring the background image covers the div
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

      }}
    ></div>
  );
}

export default BackgroundCover;
