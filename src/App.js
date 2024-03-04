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
          <p>Hi I am Ryan Garner</p>
          <Card />
          <Card />
          <Card />
    </div>
  );
}

export default App;
