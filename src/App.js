import './App.css';
import Header from './components/Header';
import IconBar from './components/IconBar';
import Signup from './components/Signup';
import SwipeButton from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Match from './components/Match';
import AppState from './components/context/AppState';
import Login from './components/Login';
import MyProfile from './components/MyProfile';

function App() {
  return (
    // BEM class naming convention
    <BrowserRouter>
    <AppState>
    <div className="app">
      {/* Header */}
      <Header />
      <Routes>
        <Route exact path='/home' element={<Match />}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path='/myProfile' element={<MyProfile />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
      </Routes>
    </div>
    </AppState>
    </BrowserRouter> 
  );
}

export default App;
