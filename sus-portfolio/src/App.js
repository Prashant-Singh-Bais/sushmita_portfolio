
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useRoutes  } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import SearchQna from './pages/SearchQna';
import VICE from './pages/VICE';
import DAPS from './pages/DAPS';
import ComingSoon from './pages/ComingSoon/index.js';
import BackgroundCover from './components/Background';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProjectNav from './components/OtherProjectNav';
import daps_image from './assets/DAPS/img_5.png';

const getNextAndPrevious = require('./ProjectListManager.js');

function App() {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/searchqna', element: <SearchQna /> },
    { path: '/VICE', element: <VICE /> },
    { path: '/da_strategy', element: <DAPS /> },
    // Add more routes as needed
  ]);

  const isRouteExist = routes ? true : false;

  useEffect(() => {
    // Update the currentPage state whenever the location changes
    setCurrentPage(location.pathname);
  }, [location]);

  // Determine the mode based on the current page
  const mode = currentPage === '/VICE' ? 'dark' : 'light';
  let previousProject = "";
  let nextProject = "";
  if (currentPage !== '/' ){
    console.log("currentPage",currentPage)
    const projectData = getNextAndPrevious(currentPage);
    console.log("projectData",projectData)
    if (projectData.prevData !== null && typeof projectData.prevData === 'object') {
      previousProject = projectData.prevData;
    }
    if (projectData.nextData !== null && typeof projectData.nextData === 'object') {
      nextProject = projectData.nextData;
    }
    
  }
  return (
    <div className={"app-container-"+mode}>
      <div className='body'>
        <div className='sidebar'>
          <Sidebar mode={mode} />
        </div>
        
        <div className="page-content">
          {isRouteExist ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchqna" element={<SearchQna />} />
            <Route path="/VICE" element={<VICE />} />
            <Route path="/da_strategy" element={<DAPS />} />
            {/* Add more routes as needed */}
          </Routes>
        ) : (
          <ComingSoon />
        )}
          {currentPage === '/da_strategy' && (
            <>
              <BackgroundCover inpHeight={530} inpTop={0} bgColor={'#01658B'} />
              <BackgroundCover divClassName="existing-b2b" heightOffset={90} bgColor={'#dae3eb'} />
              <BackgroundCover divClassName="the-problem" heightOffset={75} bgColor={'#dae3eb'} />
              <BackgroundCover divClassName="b2b-data-value-propositions" bgColor={'#dae3eb'} />
              <BackgroundCover divClassName="poster-1" heightOffset={75} bgImage={daps_image} />
              <BackgroundCover divClassName="poster-2" bgColor={'#B4E1FF'} />
            </>
          )}
        </div>
    </div>
    {currentPage !== '/' && (
      <div className='otherProject'><ProjectNav leftProject={previousProject} rightProject={nextProject}/></div>
          )}
    <div className="footer-container"><Footer/></div>
    </div>
  );
}

export default App;
