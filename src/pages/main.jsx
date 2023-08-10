import { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Sidebar from '../components/Sidebar/Sidebar'
import Player from '../components/Player/Player'
import Centerblock from '../components/Centerblock/Centerblock'
import { useThemeContext } from '../components/ThemeSwitcher/ThemeSwitcher'
import { useGetTracksQuery } from '../redux/api/tracks'

export default function Main() {
  const { theme } = useThemeContext()
  const {
    data: tracks,
    isLoading: isTracksLoading,
    // isSuccess: isTracksSuccess,
  } = useGetTracksQuery()

  // const [searchedData, setSearchedData] = useState(null)
  const [track, setTrack] = useState(null)


  return (
    <main
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <Navigation />
      <Centerblock
        title="Треки"
        // data={searchedData || []}
        data={tracks}
        isFetching={isTracksLoading}
        onSelectTrack={setTrack}
        selectedTrack={track}
      />
      <Sidebar />
      <Player />
    </main>
  )
}
