import Navigation from '../components/Navigation/Navigation'
import Sidebar from '../components/Sidebar/Sidebar'
import Player from '../components/Player/Player'
import Centerblock from '../components/Centerblock/Centerblock'

export default function Main() {
  return (
    <main>
      <Navigation />
      <Centerblock title="Треки" />
      <Sidebar />
      <Player />
    </main>
  )
}
