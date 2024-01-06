import React, { useEffect, useRef, useState } from 'react';

const ScrollChecker = ({ classtosee, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this threshold as needed
      }
    );

    const currentRef = elementRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [elementRef]);

  return (
    <div ref={elementRef} className={`gif${classtosee}`}>
      {isVisible && children}
    </div>
  );
};

export default ScrollChecker;
