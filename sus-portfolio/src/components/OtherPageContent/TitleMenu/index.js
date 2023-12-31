
import React, { useState } from 'react';
import StLine from '../../Shapes/StLines';
import './index.scss';

const TitleMenu = ({ items }) => {
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
    <div className="titlemenu"> 
      {items.map((item, index) => (
        <div key={index}>
          <StLine/>
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
      <StLine/>
    </div>
  );
};

export default TitleMenu;
