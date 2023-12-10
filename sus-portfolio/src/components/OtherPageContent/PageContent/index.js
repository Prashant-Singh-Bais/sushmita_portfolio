


// import './index.scss';
// import React from 'react';

// const ContentSection = ({ items }) => (
//   <div className="content-section">
//     {items.map((item, index) => (
//       <div key={index} className='sub-section'>
//         {/* <h3>{item.heading}</h3> */}
//         {item.subheadings.map((subheading, subIndex) => (
//           <div key={subIndex}>
//             <h4 id={subheading.replace(/\s+/g, '-').toLowerCase()}>
//               {subheading}
//             </h4>
//             <div>
//               {typeof item.content[subIndex] === 'string' ? (
//                 <p>{item.content[subIndex]}</p>
//               ) : (
//                 React.createElement(item.content[subIndex], { key: subIndex })
//               )}
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

const ContentSection = ({ items }) => {
  const scrollToContent = (heading) => {
    const contentElement = document.getElementById(heading.replace(/\s+/g, '-').toLowerCase());
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="content-section">
      {items.map((item, index) => (
        <div key={index} className='sub-section'>
          {(item.subheadings.length === 0) ? (
            <div>
              <h4
                id={item.heading.replace(/\s+/g, '-').toLowerCase()}
                onClick={() => scrollToContent(item.heading)}
                style={{ cursor: 'pointer' }}
              >
                {item.heading}
              </h4>
              <div>
                {typeof item.content === 'string' ? (
                  <p>{item.content}</p>
                ) : (
                  React.createElement(item.content[0])
                )}
              </div>
            </div>
          ) : (
            item.subheadings.map((subheading, subIndex) => (
              <div key={subIndex}>
                <h4 id={subheading.replace(/\s+/g, '-').toLowerCase()}>
                  {subheading}
                </h4>
                <div>
                  {typeof item.content[subIndex] === 'string' ? (
                    <p>{item.content[subIndex]}</p>
                  ) : (
                    React.createElement(item.content[subIndex],{ key: subIndex })
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentSection;