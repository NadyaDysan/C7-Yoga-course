import Navigation from '../components/Navigation/Navigation'
import Player from '../components/Player/Player'
import Centerblock from '../components/Centerblock/Centerblock'

export default function DayPlaylist () {
  return (
    <main>
      <Navigation />
      <Centerblock title="Плейлист дня" isLoading={false} />
      <Player />
    </main>
  )
}
