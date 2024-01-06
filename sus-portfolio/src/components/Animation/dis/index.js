import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import dis_img2 from '../../../assets/animation/distractors/dis.webp';
import dis_img1 from '../../../assets/animation/distractors/disl.webp';
import dis_img3 from '../../../assets/animation/distractors/disr.webp';



import './index.scss';

const DisAnimation = () => {
  const dis_imgRef1 = useRef(null);
  const dis_imgRef2 = useRef(null);
  const dis_imgRef3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([dis_imgRef2.current, dis_imgRef3.current], { x: '-50%', opacity: 0 }); // Set initial positions

    tl.to(dis_imgRef2.current, { duration: 1, x: '50%', opacity: 1 })
      .to(dis_imgRef3.current, { duration: 1, x: '100%', opacity: 1 }, '-=1'); // Animate images 2 and 3

    // You can add more animations or create a loop if needed

  }, []);

  return (
    <div className='animation2'>
      <img
        ref={dis_imgRef1}
        src={dis_img1}
        alt="dis 1"
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          // transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      />
      <img
        ref={dis_imgRef2}
        src={dis_img2}
        alt="dis 2"
        style={{
          position: 'absolute',
          top: '0',
          left: '31%',
          // transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      />
      <img
        ref={dis_imgRef3}
        src={dis_img3}
        alt="dis 3"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '42%',
          // transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      />
    </div>
  );
};

export default DisAnimation;
