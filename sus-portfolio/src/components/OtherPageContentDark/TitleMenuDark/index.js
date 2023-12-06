// import React, { useState } from 'react';
// import StLine from '../../Shapes/StLines';
// import './index.scss';

// const TitleMenuDark = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const scrollToSubheading = (subheading) => {
//     subheading = subheading.replace(/\s+/g, '-').toLowerCase()
//     console.log({subheading})
//     const element = document.getElementById(subheading);
//     console.log({element})
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <div className="titlemenuDark"> 
//       {items.map((item, index) => (
//         <div key={index}>
//           <StLine className='StLine'/>
//           <div className="titlemenu-heading" onClick={() => toggleItem(index)}>
//             {item.heading}
//             <span className="titlemenu-icon">{openIndex === index ? '-' : '+'}</span>
//           </div>
//           {openIndex === index && (
//             <div className="titlemenu-content">
//               {item.subheadings.map((subheading, subIndex) => (
//                 <div 
//                   key={subIndex} 
//                   onClick={() => scrollToSubheading(subheading)}
//                   className="titlemenu-subheading" // Added for styling and better click recognition
//                   style={{ cursor: 'pointer' }} // Makes it visually clear that it's clickable
//                 >
//                   {subheading}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       <StLine/>
//     </div>
//   );
// };

// export default TitleMenuDark;


import React, { useState } from 'react';
import StLine from '../../Shapes/StLines';
import './index.scss';

const TitleMenuDark = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (items[index].subheadings.length > 0) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      scrollToContent(items[index].heading);
    }
  };

  const scrollToContent = (heading) => {
    const contentElement = document.getElementById(heading.replace(/\s+/g, '-').toLowerCase());
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="titlemenuDark"> 
      {items.map((item, index) => (
        <div key={index}>
          <StLine type='light'/>
          <div
            className={`titlemenu-heading ${item.subheadings.length === 0 ? 'clickable-heading' : ''}`}
            onClick={() => toggleItem(index)}
          >
            {item.heading}
            {item.subheadings.length > 0 && (
              <span className="titlemenu-icon">{openIndex === index ? '-' : '+'}</span>
            )}
          </div>
          {openIndex === index && item.subheadings.length > 0 && (
            <div className="titlemenu-content">
              {item.subheadings.map((subheading, subIndex) => (
                <div 
                  key={subIndex} 
                  onClick={() => scrollToContent(subheading)}
                  className="titlemenu-subheading" // Added for styling and better click recognition
                  style={{ cursor: 'pointer' }} // Makes it visually clear that it's clickable
                >
                  {subheading}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <StLine type='light'/>
    </div>
  );
};

export default TitleMenuDark;
