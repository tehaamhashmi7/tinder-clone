import './App.css';
import Header from './components/Header';
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
    </div>
  );
}

export default App;
