import React, { useState } from 'react';
import './index.scss'; // Import your SCSS file

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider">
      <div className="image-container">
        <span
          className={`arrow left ${currentImageIndex === 0 ? 'hidden' : ''}`}
          onClick={goToPrevious}
        >
          &lt;
        </span>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="main-image"
        />
        <span
          className={`arrow right ${
            currentImageIndex === images.length - 1 ? 'hidden' : ''
          }`}
          onClick={goToNext}
        >
          &gt;
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
