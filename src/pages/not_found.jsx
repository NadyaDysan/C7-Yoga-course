import Player from '../components/Player/Player'
import Navigation from '../components/Navigation/Navigation'
import Search from '../components/Search/Search'
import NotFound from '../components/NotFound/NotFound'


export default function NotFoundPage() {

  return (
    <main>
      <Navigation />
      <div style={{width: '85%'}}>
      <Search />
      </div>
      <NotFound/>
      <Player />
    </main>
  )
}
