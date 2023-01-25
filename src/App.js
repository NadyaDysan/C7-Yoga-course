import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Player from './Player'
import Centerblock from './Centerblock'

import './App.css'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <Centerblock />
        </main>

        <Sidebar />
        <Player />

        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
