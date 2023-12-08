import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import SearchQna from './components/SearchQna';
import VICE from './components/VICE';
import Sidebar from './components/Sidebar';
import ImageSlider from './components/ImageSlider';

import img_25 from './assets/VICE/img_18.svg';
import img_26 from './assets/VICE/img_19.svg';
import img_27 from './assets/VICE/img_24.svg';

const images = [img_25,img_26,img_27];

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
          <Route path="/test" element={<ImageSlider images = {images}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
