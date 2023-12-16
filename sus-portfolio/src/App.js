// import React, { useState, useEffect } from 'react';
// import './App.scss';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Home from './components/Home';
// import SearchQna from './components/SearchQna';
// import VICE from './components/VICE';
// import Sidebar from './components/Sidebar';
// import DAPS from './components/DAPS';
// import BackgroundCover from './components/Background';
// import daps_image from './assets/DAPS/img_5.png'


// function App() {
//   const [currentPage, setCurrentPage] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     // Update the currentPage state whenever the location changes
//     setCurrentPage(location.pathname);
//   }, [location]);

//   // Determine the mode based on the current page
//   const mode = currentPage === '/VICE' ? 'dark' : 'light';

//   return (
//     <div className="app-container">
//       <div className={`sidebar ${currentPage === '/VICE' ? 'black-sidebar' : ''}`}>
//         <Sidebar mode={mode} />
//       </div>
//       <div className="page-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/searchqna" element={<SearchQna />} />
//           <Route path="/VICE" element={<VICE />} />
//           <Route path="/da_strategy" element={<DAPS />} />
//         </Routes>
//         if (${currentPage === '/da_strategy'}){
//         <BackgroundCover inpHeight={530} inpTop={0} bgColor={'#01658B'}/>
//         <BackgroundCover divClassName="existing-b2b" heightOffset={1.3} bgColor={'#dae3eb'}/>
//         <BackgroundCover divClassName="the-problem" heightOffset={1.3} bgColor={'#dae3eb'}/> 
//         <BackgroundCover divClassName="b2b-data-value-propositions" bgColor={'#dae3eb'}/>
//         <BackgroundCover divClassName="poster-1" bgColor={'#B4E1FF'} heightOffset={1.1} bgImage={daps_image}/>
//         <BackgroundCover divClassName="poster-2" bgColor={'#B4E1FF'} heightOffset={1}/>
//         }
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import SearchQna from './components/SearchQna';
import VICE from './components/VICE';
import Sidebar from './components/Sidebar';
import DAPS from './components/DAPS';
import BackgroundCover from './components/Background';
import daps_image from './assets/DAPS/img_5.png';

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
  );
}

export default App;
