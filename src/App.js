import './App.css';
import Header from './components/Header';
import IconBar from './components/IconBar';
import Signup from './components/Signup';
import SwipeButton from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Match from './components/Match';

function App() {
  return (
    // BEM class naming convention
    <BrowserRouter>
    <div className="app">
      {/* Header */}
      <Header />
      <Routes>
        <Route exact path='/home' element={<Match />}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
