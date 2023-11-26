import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GIF from './components/Animation';
import Accordion from './components/Accordion'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/test" element = {<Accordion/>} />
    </Routes>
    </>
    
  );
}

export default App;
