import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

const TextBox = ({ heading, subheadingBold, subheading, linkPage, SelectedAnimation, componentName }) => {
    const [isHovered, setIsHovered] = useState(false);
    const textBoxRef = useRef(null);
    const handleMouseEnter = () => {
        setIsHovered(true);
        const tempName = `.gif${componentName}`;
        const gifContainers = document.querySelectorAll(tempName);
        if (gifContainers){
            gifContainers.forEach((el) => el.remove());
        }
        const componentElements = document.querySelectorAll(`.${componentName}`);
        if (componentElements.length > 0) {
            componentElements.forEach((el) => {
                const gifContainer = document.createElement('div');
                gifContainer.classList.add(`gif${componentName}`);
                const root = createRoot(gifContainer);
                root.render(<SelectedAnimation />);

                // Append the gifContainer to the target DOM element
                el.appendChild(gifContainer);
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // const gifContainers = document.querySelectorAll('.gifContainer');
        // gifContainers.forEach((el) => el.remove());
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
        </div>
    );
};

export default TextBox;


// import React, { useState, useRef } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.scss';

// const TextBox = ({ heading, subheadingBold, subheading, linkPage, SelectedAnimation, componentName }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const textBoxRef = useRef(null);


//     const handleMouseEnter = () => {
//         setIsHovered(true);
//         const tempName = `.gifContainer_${componentName}`;
//         const gifContainers = document.querySelectorAll(tempName);
//         if (gifContainers){
//             gifContainers.forEach((el) => el.remove());
//         }
//         const componentElements = document.querySelectorAll(`.${componentName}`);
//         if (componentElements.length > 0) {
//             componentElements.forEach((el) => {
//                 const gifContainer = document.createElement('div');
//                 gifContainer.classList.add(`gifContainer_${componentName}`);
//                 gifContainer.style.width = `${el.clientWidth}px`; // Match width
//                 gifContainer.style.height = `${el.clientHeight}px`; // Match height
//                 const root = createRoot(gifContainer);
//                 root.render(<SelectedAnimation />);

//                 // Append the gifContainer to the target DOM element
//                 el.appendChild(gifContainer);
//             });
//         }
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//         // const gifContainers = document.querySelectorAll('.gifContainer');
//         // gifContainers.forEach((el) => el.remove());
//     };

//     const handleClick = () => {
//         window.location.href = linkPage;
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
//         </div>
//     );
// };

// export default TextBox;


