import React from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './Album'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Album()}
      </header>
    </div>
  );
}

export default App;
