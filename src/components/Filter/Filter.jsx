/* eslint-disable react/button-has-type */
import { useEffect, useRef, useState } from 'react'

import * as S from './Filter-style'

const singers = [
  {
    label: 'Michael Jackson',
    value: 'michaelJackson',
  },
  {
    label: 'Frank Sinatra',
    value: 'frankSinatra',
  },
  {
    label: 'Calvin Harris',
    value: 'calvinHarris',
  },
  {
    label: 'Zhu',
    value: 'zhu',
  },
  {
    label: 'Arctic Monkeys',
    value: 'arcticMonkeys',
  },
  {
    label: 'Queen',
    value: 'queen',
  },
  {
    label: 'Aurora',
    value: 'aurora',
  },
]

const genres = [
  {
    label: 'Рок',
    value: 'rock',
  },
  {
    label: 'Хип-хоп',
    value: 'hip-Hop',
  },
  {
    label: 'Поп музыка',
    value: 'pop',
  },
  {
    label: 'Техно',
    value: 'techno',
  },
  {
    label: 'Инди',
    value: 'indi',
  },
  {
    label: 'Классическая',
    value: 'classic',
  },
]

const years = [
  {
    label: 'Более новые',
    value: 'newer',
  },
  {
    label: 'Более старые',
    value: 'older',
  },
]

export default function Filter() {
  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <DropdownFilter title="исполнителю" list={singers} name="singer" />
      <RadioFilter title="году выпуска" list={years} name="year" />
      <DropdownFilter title="жанру" list={genres} name="genre" />
    </S.CenterBlockFilter>
  )
}

function DropdownFilter(props) {
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false)
  const [selectedFilterItems, setSelectedFilterItems] = useState(
    props.list.reduce((obj, name) => ({ ...obj, [name.value]: false }), {})
  )

  const numberOfFilterItemsSelected =
    Object.values(selectedFilterItems).filter(Boolean).length

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

  return (
    <S.FilterDropdown ref={menuRef}>
      <S.FilterButton
        onClick={() => setIsDropdownDisplayed((prevState) => !prevState)}
      >
        {numberOfFilterItemsSelected > 0
          ? `${props.title} ${numberOfFilterItemsSelected}`
          : `${props.title}`}
      </S.FilterButton>
      {isDropdownDisplayed && (
        <S.FilterPanelWrapper>
          <S.FilterPanel>
            {props.list.map((name) => (
              <S.FilterPanelItems
                key={name.value}
                isSelected={selectedFilterItems[name.value]}
              >
                <input
                  onChange={(e) =>
                    setSelectedFilterItems({
                      ...selectedFilterItems,
                      [name.value]: e.target.checked,
                    })
                  }
                  id={`input-${name.value}`}
                  type="checkbox"
                  checked={selectedFilterItems[name.value]}
                />
                <S.FilterLabel htmlFor={`input-${name.value}`}>
                  {name.label}
                </S.FilterLabel>
              </S.FilterPanelItems>
            ))}
          </S.FilterPanel>
        </S.FilterPanelWrapper>
      )}
    </S.FilterDropdown>
  )
}

function RadioFilter(props) {
  const [isRadioDisplayed, setIsRadioDisplayed] = useState(false)
  const [selectedFilterItems, setSelectedFilterItems] = useState(
    props.list.reduce((obj, name) => ({ ...obj, [name.value]: false }), {})
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

  return (
    <S.FilterRadioMainFieldset ref={menuRef}>
      <S.FilterButton
        onClick={() => setIsRadioDisplayed((prevState) => !prevState)}
      >
        {props.title}
      </S.FilterButton>
      {isRadioDisplayed && (
        <S.FilterRadioPanel>
          {props.list.map((name) => (
            <S.FilterPanelItems
              key={name.value}
              isSelected={selectedFilterItems[name.value]}
            >
              <S.FilterRadioInput
                onChange={(e) =>
                  setSelectedFilterItems({
                    [name.value]: e.target.checked,
                  })
                }
                id={`input-${name.value}`}
                value={`radio-${name.value}`}
                type="radio"
                name="years"
                key={name.value}
              />
              <S.FilterLabel htmlFor={`input-${name.value}`}>
                {name.label}
              </S.FilterLabel>
            </S.FilterPanelItems>
          ))}
        </S.FilterRadioPanel>
      )}
    </S.FilterRadioMainFieldset>
  )
}
