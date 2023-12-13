import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import SearchQna from './components/SearchQna';
import VICE from './components/VICE';
import Sidebar from './components/Sidebar';
import DAPS from './components/DAPS';
import BackgroundCover from './components/Background';


function App() {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Update the currentPage state whenever the location changes
    setCurrentPage(location.pathname);
  }, [location]);

  // Determine the mode based on the current page
  const mode = currentPage === '/VICE' ? 'dark' : 'light';

  return (
    <div className="app-container">
      <div className={`sidebar ${currentPage === '/VICE' ? 'black-sidebar' : ''}`}>
        <Sidebar mode={mode} />
      </div>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchqna" element={<SearchQna />} />
          <Route path="/VICE" element={<VICE />} />
          <Route path="/da_strategy" element={<DAPS />} />
        </Routes>
        <BackgroundCover divClassName="b2b-data-value-propositions" bgColor={'#dae3eb'}/>
      </div>
    </div>
  );
}

export default App;
