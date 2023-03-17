/* eslint-disable import/no-extraneous-dependencies */
import { SkeletonTheme } from 'react-loading-skeleton';
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import Player from './Player/Player'
import Centerblock from './Centerblock/Centerblock'

import './App.css'

function App() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <Centerblock />
          <Player />
        </main>
        <Sidebar />
      </div>
    </div>
    </SkeletonTheme>
  )
}

export default App
