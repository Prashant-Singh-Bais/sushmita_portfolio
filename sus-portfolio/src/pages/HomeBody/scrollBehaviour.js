import React, { useEffect, useRef, useState } from 'react';

const ScrollDetector = ({ children }) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const element = targetRef.current;
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if the element is in the middle or at the end of the viewport
        if (top > 0 && bottom < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={targetRef}>
      {children(isVisible)}
    </div>
  );
};

export default ScrollDetector;
