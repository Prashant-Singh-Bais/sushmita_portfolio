// import React from 'react';
// import { Link } from 'react-router-dom';
// import LogosLight from '../../assets/Slogo.png'
// import LogosDark from '../../assets/SlogoDark.svg';
// import './index.scss'; // Import the SCSS file

// const Sidebar = ({ mode }) => {
//   let Logos = mode === 'light' ? LogosLight : LogosDark;

//   return (
//     <div className='logo-container'>
//       <Link className='logo' to='/'>
//         <img src={Logos} alt="logo" />
//       </Link>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import LogosLight from '../../assets/Slogo.png';
import LogosDark from '../../assets/SlogoDark.svg';
import './index.scss'; // Import the SCSS file

const Sidebar = ({ mode }) => {
  let Logos = mode === 'light' ? LogosLight : LogosDark;

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top when the link is clicked
  };

  return (
    <div className='logo-container'>
      <Link className='logo' to='/' onClick={scrollToTop}>
        <img src={Logos} alt="logo" />
      </Link>
    </div>
  );
};

export default Sidebar;

