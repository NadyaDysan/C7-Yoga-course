import Navigation from '../components/Navigation/Navigation'
import Sidebar from '../components/Sidebar/Sidebar'
import Player from '../components/Player/Player'
import Centerblock from '../components/Centerblock/Centerblock'
import {useThemeContext} from '../components/ThemeSwitcher/ThemeSwitcher'

export default function Main() {
  const { theme } = useThemeContext();

  return (
    <main 
    style={{
      backgroundColor: theme.background,
      color: theme.color,
    }}>
      <Navigation />
      <Centerblock title="Треки" />
      <Sidebar />
      <Player />
    </main>
  )
}
