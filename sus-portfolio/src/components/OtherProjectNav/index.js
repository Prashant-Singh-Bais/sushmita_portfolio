import './index.scss'
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DownArrow from '../../assets/Arrow_image.svg'



const ProjectNav = ({leftProject,rightProject, 
  background_color="#fff",
  mode= "light"
}) => {
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
        console.log("leftProject.projectName",leftProject.projectName)
    }, [location]);
    if (currentPage === '/VICE') {
      background_color = "#000";
      mode="dark";
    } else if (currentPage === '/ideo_diabetic_care') {
      background_color = "#1C846C";
    } 
  
    return (
        <div className={'projectNav-' + mode}
        style={{ backgroundColor: `${background_color}`}}>
            {(leftProject === "" || undefined) ? (
              <div className='leftBox-empty'></div>
            ) : (
              <div className='leftBox' onClick={handleClickLeft}>
                <div className='arrowLeft'>
                  <img src={DownArrow} alt="Down Arrow"/>
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
                  <img  src={DownArrow} alt="Down Arrow"/>
                </div>
              </div>
            )}
</div>

    );
};
export default ProjectNav;