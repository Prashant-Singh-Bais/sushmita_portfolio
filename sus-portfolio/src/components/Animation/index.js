import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import img1 from '../../assets/animation/0003.svg'
import img2 from '../../assets/animation/0003.svg'
import img3 from '../../assets/animation/0003.svg'
import './index.scss'


const ImageAnimation = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([imgRef2.current, imgRef3.current], { x: '-50%', opacity: 0 }); // Set initial positions

    tl.to(imgRef2.current, { duration: 2, x: '-100%', opacity: 1 })
      .to(imgRef3.current, { duration: 2, x: '100%', opacity: 1 }, '-=1'); // Animate images 2 and 3

    // You can add more animations or create a loop if needed

  }, []);

  return (
    <div className='animation1'>
      <img
        ref={imgRef1}
        src={img1}
        alt="Image 1"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      />
      <img
        ref={imgRef2}
        src={img2}
        alt="Image 2"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      />
      <img
        ref={imgRef3}
        src={img3}
        alt="Image 3"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default ImageAnimation;
