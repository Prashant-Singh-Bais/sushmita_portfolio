import './App.scss';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SearchQna from './components/SearchQna'
import Sidebar from './components/Sidebar';


function App() {
  return (
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="page-content">
        <Routes>
          <Route path="/" element = {<Home/>} />
          {/* <Route path="/test" element = {<DummyGIF/>} /> */}
          <Route path="/searchqna" element = {<SearchQna/>} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
