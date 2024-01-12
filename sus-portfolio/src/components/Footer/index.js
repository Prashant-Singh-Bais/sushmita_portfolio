import './index.scss'
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StLine from '../Shapes/StLines'
import linkdn_logo from '../../assets/LinkedIn.svg'
import gmail_logo from '../../assets/Gmail.svg'
import insta_logo from '../../assets/Instagram.svg'
import resume from '../../assets/Resume_Sushmita.pdf'


const ContactCircle = ({ imagePath, linkPage, text }) => {
  
    const handleClick = () => {
      window.open(linkPage, '_blank');
    };
  
    return (
      <div className='contactCircle' onClick={handleClick}>
        <>
        {text?(
        <div className='text_resume'>
        <h1>{text}</h1>
        </div>
        ):(<img src={imagePath} alt={linkPage} />)}
        </>
      </div>
    );
  };




const Footer = ({background_color="#fff"}) => {
    const [currentPage, setCurrentPage] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Update the currentPage state whenever the location changes
        setCurrentPage(location.pathname);
    }, [location]);
    if (currentPage === '/VICE') {
        background_color = "#000";
      } else if (currentPage === '/ideo_diabetic_care') {
        background_color = "#1C846C";
      } else {
        background_color = "#fff";
      }
    return (
        <div className='footer' style={{ backgroundColor: `${background_color}` }}>
            <StLine />
            <div className="footer-content">
                <div className='gmail'>
                    <ContactCircle imagePath={gmail_logo} linkPage="https://mail.google.com/mail/?view=cm&fs=1&to=sushmitanaraya2694@gmail.com"/>
                </div>
                <div className='linkedIn'>
                    <ContactCircle imagePath={linkdn_logo} linkPage="https://www.linkedin.com/in/sushmita-narayana/"/>
                </div>
                <div className='instagram'>
                    <ContactCircle imagePath={insta_logo} linkPage="https://www.instagram.com/hyperwoke94/"/>
                </div>
                <div className='resume'>
                    <ContactCircle text="Resume" linkPage={resume}/>
                </div>
            </div>
    
        </div>
    );
};

export default Footer;

