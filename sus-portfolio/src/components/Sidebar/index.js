import React from 'react';
import { Link } from 'react-router-dom';
import LogosLight from '../../assets/Slogo.svg';
import './index.scss'; // Import the SCSS file

const Sidebar = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top when the link is clicked
  };

  return (
    <div className='logo-container'>
      <Link className='logo' to='/' onClick={scrollToTop}>
        <img src={LogosLight} alt="logo" />
      </Link>
    </div>
  );
};

export default Sidebar;

