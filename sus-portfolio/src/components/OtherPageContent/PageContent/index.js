// import './index.scss';
// import React from 'react';

// const ContentSection = ({ items }) => (
//   <div className="content-section">
//     {items.map((item, index) => (
//       <div key={index} className='sub-section'>
//         {item.subheadings.map((subheading, subIndex) => (
//           <div key={subIndex}>
//             <h4 id={subheading.replace(/\s+/g, '-').toLowerCase()}>
//               {subheading}
//             </h4>
//             <div>
//                 {item.content.map((Component, index) => (
//                 <Component key={index} />
//                 ))}
//             </div>
            
//           </div>
//         ))}
//       </div>
//     ))}
//   </div>
// );

// export default ContentSection;


import './index.scss';
import React from 'react';

const ContentSection = ({ items }) => (
  <div className="content-section">
    {items.map((item, index) => (
      <div key={index} className='sub-section'>
        {/* <h3>{item.heading}</h3> */}
        {item.subheadings.map((subheading, subIndex) => (
          <div key={subIndex}>
            <h4 id={subheading.replace(/\s+/g, '-').toLowerCase()}>
              {subheading}
            </h4>
            <div>
              {typeof item.content[subIndex] === 'string' ? (
                <p>{item.content[subIndex]}</p>
              ) : (
                React.createElement(item.content[subIndex], { key: subIndex })
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default ContentSection;
