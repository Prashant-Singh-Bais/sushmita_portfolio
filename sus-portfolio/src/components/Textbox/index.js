import React from 'react';
import './index.scss';
import { DummyGIF } from '../Animation';

const TextBox = ({ heading, subheadingBold, subheading }) => {
    const handleClick = () => {
        window.location.href = '/searchqna';
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



// import React, { useState, useRef, useEffect } from 'react';
// import './index.scss';
// import { DummyGIF } from '../Animation';

// const TextBox = ({ heading, subheadingBold, subheading }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [gifPosition, setGifPosition] = useState({ top: 0, left: 0 });
//     const textBoxRef = useRef(null);

//     useEffect(() => {
//         if (textBoxRef.current) {
//             const { left } = textBoxRef.current.getBoundingClientRect();
//             const onethirdScreenWidth = window.innerWidth / 3;
    
//             // Log the halfScreenWidth to the console
//             console.log('onethirdScreenWidth of the screen width:', onethirdScreenWidth);
    
//             let gifLeftPosition = left;
//             let gifTopPostion = 0;
    
//             if (left < onethirdScreenWidth) {
//                 gifLeftPosition = gifLeftPosition + 500;
//             } 
//             else {
//                 gifLeftPosition = gifLeftPosition -1220;
//             }
    
//             setGifPosition({ top: gifTopPostion, left: gifLeftPosition });
//         }
//     }, []);

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//         console.log('Hovered box position:', gifPosition);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     const handleClick = () => {
//         window.location.href = '/searchqna';
//     };

//     return (
//         <div
//             ref={textBoxRef}
//             className='outertextbox'
//             onClick={handleClick}
//             style={{ cursor: 'pointer', position: 'relative' }}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div className='headingBox'>
//                 <h2>{heading}</h2>
//             </div>
//             <div className='subheadingBox'>
//                 <p>
//                     <strong>{subheadingBold}</strong>
//                     {subheading}
//                 </p>
//             </div>
//             {isHovered && (
//                 <div
//                     className='gifContainer'
//                     style={{ position: 'absolute', top: 10, left: gifPosition.left }}
//                 >
//                     <DummyGIF className='hoverGIF' />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TextBox;

