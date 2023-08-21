import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Sidebar from '../components/Sidebar/Sidebar'
import Player from '../components/Player/Player'
import Centerblock from '../components/Centerblock/Centerblock'
import Filter from '../components/Filter/Filter'
import Search from '../components/Search/Search'
import { useThemeContext } from '../components/ThemeSwitcher/ThemeSwitcher'
import { useGetTracksQuery } from '../redux/api/tracks'

export default function Main() {
  const { theme } = useThemeContext()
  const {
    data: tracks,
    isLoading: isTracksLoading,
    isSuccess: isTracksSuccess,
  } = useGetTracksQuery()


  const [filter, updateFilter] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [search, updateSearch] = useState(null)
  const [searchedData, setSearchedData] = useState(null)
  const [track, setTrack] = useState(null)

  const handleChangeTrack = (event) => {
    const { eventName, isShuffle } = event
    if (searchedData.length === 0) return
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * searchedData.length)
      setTrack(searchedData[randomIndex])
      return
    }
    if (eventName === 'next') {
      const nextIndex = (searchedData.indexOf(track) + 1) % searchedData.length
      setTrack(searchedData[nextIndex])
      return
    }
    if (eventName === 'prev') {
      const prevIndex = (searchedData.indexOf(track) - 1) % searchedData.length
      setTrack(searchedData[prevIndex < 0 ? searchedData.length - 1 : prevIndex])
      return
    }

    console.error('Unknown event name')
  }

  useEffect(() => {
    if (!filteredData) return
    if (!search) {
      setSearchedData(filteredData)
      return
    }
    const searched = filteredData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    setSearchedData(searched)
  }, [filteredData, search])


  useEffect(() => {
    if (!tracks) return
    if (!filter) {
      setFilteredData(tracks)
      return
    }

    const { years, genres } = filter

    let filtered = [...tracks]
    if (filter.authors.size > 0)
      filtered = filtered.filter(() => filter.authors.has(track.author))
    if (genres.length > 0)
      filtered = filtered.filter(() => genres.has(track.genre))
    filtered = filtered.sort((a, b) => {
      const dateA = Date.parse(a.release_date)
      const dateB = Date.parse(b.release_date)
      // eslint-disable-next-line no-nested-ternary
      return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
    })
    if (years && years === 'Более старые') filtered = filtered.reverse()
    setFilteredData(filtered)
  }, [filter, isTracksSuccess])

  const filterButtons = <Filter data={tracks} updateFilter={updateFilter} />
  const searchInput = <Search updateSearch={updateSearch} />

  if (!track) {
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
        search={searchInput}
        filter={filterButtons}
        data={searchedData || []}
        isFetching={isTracksLoading}
        onSelectTrack={setTrack}
        selectedTrack={track}
      />
      <Sidebar isFetching={isTracksLoading} />
    </main>
  )}

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
        search={searchInput}
        filter={filterButtons}
        data={searchedData || []}
        isFetching={isTracksLoading}
        onSelectTrack={setTrack}
        selectedTrack={track}
      />
      <Sidebar isFetching={isTracksLoading} />
      <Player track={track} changeTrack={handleChangeTrack} />
    </main>
  )
}
