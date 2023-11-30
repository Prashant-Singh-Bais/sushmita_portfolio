import './index.scss';
import React from 'react';

const ContentSection = ({ items }) => (
  <div className="content-section">
    {items.map((item, index) => (
      <div key={index} className='sub-section'>
        {item.subheadings.map((subheading, subIndex) => (
          <div key={subIndex}>
            <h4 id={subheading.replace(/\s+/g, '-').toLowerCase()}>
              {subheading}
            </h4>
            {/* <div>{item.content[subIndex]}</div> */}
            
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default ContentSection;
