import './App.css';
import Header from './components/Header';
import IconBar from './components/IconBar';
import SwipeButton from './components/SwipeButtons';
import TinderCards from './components/TinderCards';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
      {/* Swipe Buttons */}
      <IconBar />
    </div>
  );
}

export default App;
