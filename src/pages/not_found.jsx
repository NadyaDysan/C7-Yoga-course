import Player from '../components/Player/Player'
import Navigation from '../components/Navigation/Navigation'
import Search from '../components/Search/Search'
import NotFound from '../components/NotFound/NotFound'

export default function NotFoundPage() {
  
  return (
    <main>
      <Navigation />
      <Search style={{width: '70%'}}/>
      <NotFound/>
      <Player />
    </main>
  )
}
