import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Navbar from './Navbar';

function App() {
  return (
      <div className="App">
          <Navbar />
        <h1>CS 230L</h1>
        <h2>Section - 001</h2>
        <p>WVU ID: 800253311</p>
          <div className="card-container">
              <Card />
              <Card />
              <Card />
          </div>
    </div>
  );
}

export default App;
