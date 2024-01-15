
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useRoutes  } from 'react-router-dom';
// import { useLocation, useRoutes  } from 'react-router-dom';
// import { BrowserRouter as Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import SearchQna from './pages/SearchQna';
import VICE from './pages/VICE';
import DAPS from './pages/DAPS';
import DAPD from './pages/DAPD';
import IdeoDia from './pages/IdeoDiab/index.js';
import IdeoMed from './pages/IdeoMed/index.js';
import IdeoStudent from './pages/IdeoStudent/index.js';
import ThinkPlace from './pages/ThinkPlace/index.js';
import ComingSoon from './pages/ComingSoon/index.js';
import Distractors from './pages/Distractors/index.js';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProjectNav from './components/OtherProjectNav';


const getNextAndPrevious = require('./ProjectListManager.js');

function App() {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/searchqna', element: <SearchQna /> },
    { path: '/VICE', element: <VICE /> },
    { path: '/da_strategy', element: <DAPS /> },
    { path: '/da_product_design', element: <DAPD /> },
    { path: '/thinkplace', element: <ThinkPlace /> },
    { path: '/distractors', element: <Distractors /> },
    { path: '/ideo_diabetic_care', element: <IdeoDia /> },
    { path: '/ideo_medcare', element: <IdeoMed /> },
    { path: '/ideo_student', element: <IdeoStudent/> },

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
    const projectData = getNextAndPrevious(currentPage);
    if ((projectData.prevData !== null || undefined) && typeof projectData.prevData === 'object') {
      previousProject = projectData.prevData;
      console.log("projectData.prevData;",projectData.prevData)
      
    }
    if (projectData.nextData !== null && typeof projectData.nextData === 'object') {
      nextProject = projectData.nextData;
    }
    console.log("previousProject11","s",previousProject,"s")
    
  }
  return (
   
    <div className={"app-container-"+mode}>
      <div className='sidebar'>
          <Sidebar />
        </div>
     <div className='body'>
        <div className="page-content">
          {isRouteExist ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchqna" element={<SearchQna />} />
            <Route path="/VICE" element={<VICE />} />
            <Route path="/da_strategy" element={<DAPS />} />
            <Route path="/da_product_design" element={<DAPD />} />
            <Route path="/thinkplace" element={<ThinkPlace />} />
            <Route path="/distractors" element={<Distractors />} />
            <Route path="/ideo_diabetic_care" element={<IdeoDia />} />
            <Route path="/ideo_student" element={<IdeoStudent />} />
            <Route path="/ideo_medcare" element={<IdeoMed />} />
            {/* Add more routes as needed */}
          </Routes>
        ) : (
          <ComingSoon />
        )}
        </div>
        
        {currentPage !== '/' && (
          <div className='otherProject'><ProjectNav leftProject={previousProject} rightProject={nextProject}/></div>
              )}
        <div className="footer-container"><Footer/></div>
      </div>
      </div>
    
  );
}

export default App;
