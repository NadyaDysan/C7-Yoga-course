// import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import Player from './Player/Player'
import Centerblock from './Centerblock/Centerblock'

import './App.css'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          {/* <Navigation /> */}
          <Centerblock />
          <Player />
        </main>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
