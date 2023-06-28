import Navigation from '../components/Navigation/Navigation'
import Player from '../components/Player/Player'
import Centerblock from '../components/Centerblock/Centerblock'

export default function MyTracks () {
  return (
    <main>
      <Navigation />
      <Centerblock title="Мои треки"/>
      <Player />
    </main>
  )
}
