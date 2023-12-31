import React, { useState, useRef, useEffect } from 'react';
import './index.scss';

const TextBox = ({ heading, subheadingBold, subheading, linkPage, GIFPath }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [gifPosition, setGifPosition] = useState({ top: 0, left: 0 });
    const textBoxRef = useRef(null);

    useEffect(() => {
        if (textBoxRef.current) {
            const { left, width } = textBoxRef.current.getBoundingClientRect();
            const onethirdScreenWidth = window.innerWidth / 3;
            let gifLeftPosition = left;
            let gifTopPostion = 10;
    
            if (left < onethirdScreenWidth) {
                gifLeftPosition = gifLeftPosition+width;
                
            }
            else if (left < onethirdScreenWidth+(width/2)){
                gifLeftPosition = -gifLeftPosition;
        
            } 
            else {
                gifLeftPosition = -gifLeftPosition+(width/2);
            }
    
            setGifPosition({ top: gifTopPostion, left: gifLeftPosition });
        }
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        window.location.href = linkPage;
    };

    return (
        <div
            ref={textBoxRef}
            className='outertextbox'
            onClick={handleClick}
            style={{ cursor: 'pointer', position: 'relative' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='headingBox'>
                <h2>{heading}</h2>
            </div>
            <div className='subheadingBox'>
                <p>
                    <strong>{subheadingBold}</strong>
                    {subheading}
                </p>
            </div>
            {isHovered && (
                <div
                    className='gifContainer'
                    style={{ position: 'absolute', top: gifPosition.top, left: gifPosition.left }}
                >
                    <img src= {GIFPath} alt="GIF"/>
                </div>
            )}
        </div>
    );
};

export default TextBox;

