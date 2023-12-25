import './index.scss'
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DownArrow from '../../assets/Arrow_image.png'



const ProjectNav = ({leftProject,rightProject}) => {
    const [currentPage, setCurrentPage] = useState('');
    const location = useLocation();
    const handleClickLeft = () => {
        window.location.href = leftProject.url;
    };
    const handleClickRight = () => {
        window.location.href = rightProject.url;
    };

    useEffect(() => {
        // Update the currentPage state whenever the location changes
        setCurrentPage(location.pathname);
    }, [location]);
    const mode = currentPage === '/VICE' ? 'dark' : 'light';
    return (
        <div className={'projectNav-' + mode}>
            {leftProject.projectName === '' ? (
              <div className='leftBox'></div>
            ) : (
              <div className='leftBox' onClick={handleClickLeft}>
                <div className='arrowLeft'>
                  <img src={DownArrow} alt="Down Arrow" />
                </div>
                <div className="projectNav-content-left">
                  <h2>PREV PROJECT</h2>
                  <h3>{leftProject.projectName}</h3>
                </div>
              </div>
            )}

            {rightProject === "" ? (
              <div className='rightBox-empty'></div>
            ) : (
              <div className='rightBox' onClick={handleClickRight}>
                <div className="projectNav-content-right">
                  <h2>NEXT PROJECT</h2>
                  <h3>{rightProject.projectName}</h3>
                </div>
                <div className='arrowRight'>
                  <img src={DownArrow} alt="Down Arrow" />
                </div>
              </div>
            )}
</div>

    );
};
export default ProjectNav;