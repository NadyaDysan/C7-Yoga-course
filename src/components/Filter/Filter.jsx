/* eslint-disable prefer-const */
import { useEffect, useRef, useState } from 'react'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'

import * as S from './Filter-style'

const years = ['Более новые', 'Более старые']

const getFilter = () => {
  const filter = localStorage.getItem('filter')
  return filter ? JSON.parse(filter) : {}
}

const storeFilter = (filter) => {
  localStorage.setItem('filter', JSON.stringify(filter))
}

export default function Filter({ data, updateFilter }) {
  const { theme } = useThemeContext()

  const [filter, setFilter] = useState(null)
  const [authors, setAuthors] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    if (!filter) return
    if (updateFilter) updateFilter(filter)
    const forStoring = {
      authors: filter.authors ? [...filter.authors] : [],
      genres: filter.genres ? [...filter.genres] : [],
      years: filter.years ? filter.years : years[0],
    }
    storeFilter(forStoring)
  }, [filter])

  useEffect(() => {
    if (!data) return
    let autorsSet = new Set()
    let genresSet = new Set()
    data.forEach((item) => {
      const { author, genre } = item
      if (author && author !== '-') autorsSet.add(author)
      if (genre && genre !== '-') genresSet.add(genre)
    })
    setAuthors([...autorsSet].sort())
    setGenres([...genresSet].sort())
  }, [data])

  useEffect(() => {
    const stored = getFilter()
    stored.authors = new Set(stored.authors || [])
    stored.genres = new Set(stored.genres || [])
    stored.years = stored.years || years[0]
    setFilter(stored)
  }, [])

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle theme={theme}>Искать по:</S.FilterTitle>
      <DropdownFilter
        title="исполнителю"
        list={authors}
        filterName="authors"
        filter={filter}
        setFilter={setFilter}
      />
      <RadioFilter title="году выпуска" list={years} name="years" filter={filter}
        setFilter={setFilter} />
      <DropdownFilter
        title="жанру"
        list={genres}
        filterName="genres"
        filter={filter}
        setFilter={setFilter}
      />
    </S.CenterBlockFilter>
  )
}

function DropdownFilter({ list, title, filter, setFilter, filterName }) {
  const { theme } = useThemeContext()

  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false)
  const [selectedFilterItems, setSelectedFilterItems] = useState(
    list.reduce((obj, item) => ({ ...obj, [item]: false }), {})
  )

  const numberOfFilterItemsSelected = filter? filter[filterName].size : 0

  
  const menuRef = useRef()

  useEffect(() => {
    const closeFilter = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsDropdownDisplayed(false)
      }
    }
    document.addEventListener('mousedown', closeFilter)
    return () => document.removeEventListener('mousedown', closeFilter)
  }, [])

  const addFilterItems = () => {
    let filterCopy = { ...filter }
    let keys = Object.keys(selectedFilterItems)
    keys.forEach((key) => {
      if (selectedFilterItems[key] === true) {
        filterCopy[filterName].add(key)
      }
      if (selectedFilterItems[key] === false) {
        filterCopy[filterName].delete(key)
      }
    })
    setFilter(filterCopy)
  }

  useEffect(() => {
    addFilterItems(selectedFilterItems);
  }, [selectedFilterItems]);

  return (
    <S.FilterDropdown ref={menuRef}>
      <S.FilterButton
        theme={theme}
        onClick={() => setIsDropdownDisplayed((prevState) => !prevState)}
      >
        {title}
        {numberOfFilterItemsSelected > 0 && (
          <S.FilterButtonNumber theme={theme}>
            {numberOfFilterItemsSelected}
          </S.FilterButtonNumber>
        )}
      </S.FilterButton>
      {isDropdownDisplayed && (
        <S.FilterPanelWrapper theme={theme}>
          <S.FilterPanel theme={theme}>
            {list.map((name) => (
              <S.FilterPanelItems
                key={name}
                selected={filter? filter[filterName].has(name) : false}
              >
                <input
                  onChange={(e) => {
                    setSelectedFilterItems({
                      ...selectedFilterItems,
                      [name]: e.target.checked,
                    })
                  }}
                  id={`input-${name}`}
                  value={`input-${name}`}
                  type="checkbox"
                  checked={filter? filter[filterName].has(name) : false}
                />
                <S.FilterLabel htmlFor={`input-${name}`}>{name}</S.FilterLabel>
              </S.FilterPanelItems>
            ))}
          </S.FilterPanel>
        </S.FilterPanelWrapper>
      )}
    </S.FilterDropdown>
  )
}

function RadioFilter(props) {
  const { theme } = useThemeContext()

  const [isRadioDisplayed, setIsRadioDisplayed] = useState(false)
  const [selectedFilterItems, setSelectedFilterItems] = useState(
    props.list.reduce((obj, name) => ({ ...obj, [name]: false }), {})
  )
  
  const menuRef = useRef()

  useEffect(() => {
    const closeFilter = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsRadioDisplayed(false)
      }
    }
    document.addEventListener('mousedown', closeFilter)
    return () => document.removeEventListener('mousedown', closeFilter)
  }, [])

  const addFilterItems = () => {
    let entry = Object.entries (selectedFilterItems) [0]; 
    // eslint-disable-next-line no-shadow
    let years = entry [0];
    props.setFilter({...props.filter, years})
  }

  useEffect(() => {
    addFilterItems(selectedFilterItems);
  }, [selectedFilterItems]);

  return (
    <S.FilterRadioMainFieldset ref={menuRef}>
      <S.FilterButton
        theme={theme}
        onClick={() => setIsRadioDisplayed((prevState) => !prevState)}
      >
        {props.title}
      </S.FilterButton>
      {isRadioDisplayed && (
        <S.FilterRadioPanel theme={theme}>
          {props.list.map((name) => (
            <S.FilterPanelItems
              key={name}
              selected={selectedFilterItems[name]}
            >
              <S.FilterRadioInput
                onChange={(e) =>{
                  setSelectedFilterItems({
                    [name]: e.target.checked,
                  })
                  addFilterItems()
                }}
                id={`input-${name}`}
                value={`radio-${name}`}
                type="radio"
                name="years"
                key={name}
              />
              <S.FilterLabel htmlFor={`input-${name}`}>{name}</S.FilterLabel>
            </S.FilterPanelItems>
          ))}
        </S.FilterRadioPanel>
      )}
    </S.FilterRadioMainFieldset>
  )
}
