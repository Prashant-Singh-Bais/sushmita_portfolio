import './App.scss';
//import { Route, Routes } from 'react-router-dom';
import { Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import GIF from './components/Animation';
import Accordion from './components/Accordion'
import SearchQna from './components/SearchQna'
import Sidebar from './components/Sidebar';
import { Content1, Content2 } from './components/SearchQna/content';

// function App() {
//   return (
//     <>
//     <Routes>
//       <Route path="/" element = {<Home/>} />
//       <Route path="/test" element = {<Accordion/>} />
//       <Route path="/searchqna" element = {<SearchQna/>} />
//     </Routes>
//     </>
    
//   );
// }

function App() {
  return (
    //<Router>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="page-content">
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/test" element = {<Content1/>} />
          <Route path="/searchqna" element = {<SearchQna/>} />
        </Routes>
        </div>
      </div>
    //</Router>
  );
}

export default App;
