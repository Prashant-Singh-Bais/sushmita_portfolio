import React, { useRef, useEffect } from 'react';
import './index.scss';
import ari_market_img1 from '../../../assets/animation/ari_market/a1.webp';
import ari_market_img2 from '../../../assets/animation/ari_market/a2.webp';
import ari_market_img3 from '../../../assets/animation/ari_market/a3.webp';
import ari_market_img4 from '../../../assets/animation/ari_market/a4.webp';

const AriMarketAnimation = () => {
  const imagesRef = useRef([]);
  const images = [ari_market_img1, ari_market_img2, ari_market_img3, ari_market_img4];
  let currentImageIndex = 0;

  useEffect(() => {
    const changeImage = () => {
      const currentImage = imagesRef.current;
      currentImage.src = images[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % images.length;
    };

    const interval = setInterval(changeImage, 1000); // Change image every 0.5 second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="ari-image-container">
      <img
        ref={(el) => (imagesRef.current = el)}
        className="ariMimage"
        src={ari_market_img1} // Initial image
        alt="ariMarketImage"
      />
    </div>
  );
};

export default AriMarketAnimation;
