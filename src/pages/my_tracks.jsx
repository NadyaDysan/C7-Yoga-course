import { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Sidebar from '../components/Sidebar/Sidebar'
import Player from '../components/Player/Player'
import Centerblock from '../components/Centerblock/Centerblock'
import Filter from '../components/Filter/Filter'
import Search from '../components/Search/Search'
import { useThemeContext } from '../components/ThemeSwitcher/ThemeSwitcher'
import { useGetFavoritesQuery } from '../redux/api/favorites'

export default function Main() {
  const { theme } = useThemeContext()
  const {
    data: tracks,
    isLoading: isTracksLoading,
    // isSuccess: isTracksSuccess,
  } = useGetFavoritesQuery()

  // const [searchedData, setSearchedData] = useState(null)
  const [track, setTrack] = useState(null)

  const filter = <Filter/>
  const search = <Search/>

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
        search={search}
        filter={filter}
        // data={searchedData || []}
        data={tracks}
        isFetching={isTracksLoading}
        onSelectTrack={setTrack}
        selectedTrack={track}
      />
      <Sidebar isFetching={isTracksLoading}/>
      <Player />
    </main>
  )
}
