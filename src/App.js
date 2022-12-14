import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Match from './components/Match';
import AppState from './components/context/AppState';
import Login from './components/Login';
import MyProfile from './components/MyProfile';
import LandingPage from './components/LandingPage';

function App() {

  const token = localStorage.getItem('token')
  console.log("token = ", token)

  return (
    // BEM class naming convention
    <BrowserRouter>
    <AppState>
    <div className="app">
      {/* Header */}
      <Header />
      <Routes>
        <Route exact path='/home' element={ <Match />}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path='/myProfile' element={token ? <MyProfile /> : <Login />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/' element={<LandingPage />}></Route>
      </Routes>
    </div>
    </AppState>
    </BrowserRouter> 
  );
}

export default App;
