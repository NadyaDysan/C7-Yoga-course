// import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Player from './Player';
import Centerblock from './Centerblock';


function App() {
  return (
    <div className="App">
      <main className="main">
      <Navigation />
      <Centerblock />
      </main>

      <Sidebar />
      <Player />

      <footer className="footer" />
      
    </div>
  );
}

export default App;


