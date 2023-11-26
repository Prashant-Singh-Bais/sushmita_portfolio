import React from 'react';
import './index.scss';

const TextBox = ({ heading, subheadingBold, subheading }) => {
    const handleClick = () => {
        window.location.href = 'https://www.google.com';
    };

    return (
        <div className='outertextbox' onClick={handleClick} style={{ cursor: 'pointer' }}> 
            <div className='headingBox'>
                <h2>{heading}</h2>
            </div>
            <div className='subheadingBox'>
                <p>
                    <strong>{subheadingBold}</strong>
                    {subheading}
                </p>
            </div>
        </div>
    );
};

export default TextBox;
