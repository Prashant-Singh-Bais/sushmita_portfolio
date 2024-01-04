import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import qna_img1 from '../../../assets/animation/qna/qna.webp';
import qna_img3 from '../../../assets/animation/qna/qnal.webp';
import qna_img2 from '../../../assets/animation/qna/qnar.webp';


import './index.scss';

const QnaAnimation = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([imgRef2.current, imgRef3.current], { x: '0%', opacity: 0 }); // Set initial positions

    tl.to(imgRef2.current, { duration: 1, x: '-105%', opacity: 1 })
      .to(imgRef3.current, { duration: 1, x: '105%', opacity: 1 }, '-=1'); // Animate images 2 and 3

    // You can add more animations or create a loop if needed

  }, []);

  return (
    <div className='animation1'>
      <img
        ref={imgRef1}
        src={qna_img1}
        alt="Image 1"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      />
      <img
        ref={imgRef2}
        src={qna_img2}
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
        src={qna_img3}
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

export default QnaAnimation;



