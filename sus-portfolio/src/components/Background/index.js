// import React, { useEffect, useRef, useState } from 'react';
// import './index.scss'
// function BackgroundCover({ divClassName, heightOffset, bgColor, bgImage, inpHeight, inpTop }) {
//   heightOffset = heightOffset ? heightOffset : 1;
//   bgColor = bgColor ? bgColor : '#00000000';
//   const [backgroundHeight, setBackgroundHeight] = useState(0);
//   const [backgroundTop, setBackgroundTop] = useState(0);
//   const backgroundRef = useRef(null);

//   useEffect(() => {
    
//     if (divClassName){
//       console.log("divname",divClassName);
//       const targetDiv = document.querySelector(`.${divClassName}`);
//       if (targetDiv) {
//         const height = targetDiv.clientHeight;
//         const { top } = targetDiv.getBoundingClientRect();
//         setBackgroundHeight(height * heightOffset);
//         setBackgroundTop(top + window.scrollY);
//       }
//     }
//     else
//     {
//       console.log("else");
//       console.log("inpHeight",inpHeight);
//       console.log("inpTop",inpTop);
//       setBackgroundHeight(`${inpHeight}px`);
//       setBackgroundTop(`${inpTop}px`);
//     }
//   }, [divClassName]
//   );

//   return (
//     <div
//       className="background"
//       ref={backgroundRef}
//       style={{
//         top: `${backgroundTop}px`,
//         height: `${backgroundHeight}px`,
//         left: 0,
//         position: 'absolute',
//         overflow: 'hidden',
//         zIndex: 0,
//         backgroundColor: `${bgColor}`,
//         width: '100vw', /* Set the width as desired */
//         backgroundImage: bgImage ? `url(${bgImage})` : 'none', // Fixed the backgroundImage syntax
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',

//       }}
//     ></div>
//   );
// }

// export default BackgroundCover;

import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

function BackgroundCover({ divClassName, heightOffset, bgColor, bgImage, inpHeight, inpTop }) {
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const [backgroundTop, setBackgroundTop] = useState(0);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (divClassName) {
      const targetDiv = document.querySelector(`.${divClassName}`);
      if (targetDiv) {
        const height = targetDiv.clientHeight;
        const { top } = targetDiv.getBoundingClientRect();
        setBackgroundHeight(height + (heightOffset || 0));
        setBackgroundTop(top + window.scrollY);
      }
    } else {
      if (typeof inpHeight === 'number') {
        setBackgroundHeight(inpHeight);
        setBackgroundTop(inpTop || 0);
      } else {
        // Set default values for inpHeight and inpTop if they're not numbers
        setBackgroundHeight(100); // Set a default height
        setBackgroundTop(50); // Set a default top position
      }
    }
  }, [divClassName, heightOffset, inpHeight, inpTop]);

  return (
    <div
      className="background"
      ref={backgroundRef}
      style={{
        top: `${backgroundTop}px`,
        height: `${backgroundHeight}px`,
        left: 0,
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 0,
        backgroundColor: bgColor || '#00000000',
        width: '100%',
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  );
}

export default BackgroundCover;
