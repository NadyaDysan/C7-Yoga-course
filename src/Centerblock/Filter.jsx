/* eslint-disable react/button-has-type */
import { useEffect, useRef, useState } from 'react'

import './Filter.css'

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <DropdownFilter title="исполнителю" list={singers} name="singer" />
      <RadioFilter title="году выпуска" list={years} name="year" />
      <DropdownFilter title="жанру" list={genres} name="genre" />
    </div>
  )
}


function DropdownFilter(props) {
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false)
  const [selectedFilterItems, setSelectedFilterItems] = useState(
    props.list.reduce((obj, name) => ({ ...obj, [name.value]: false }), {})
  )

  const numberOfFilterItemsSelected =
    Object.values(selectedFilterItems).filter(Boolean).length

  console.log('selectedFilterItems', selectedFilterItems)

  const menuRef = useRef();

  useEffect(() => {
    const closeFilter = (e) =>{
      if (!menuRef.current.contains(e.target)) {
        setIsDropdownDisplayed(false);
      }
    };
    document.addEventListener("mousedown", closeFilter);
    return () => document.removeEventListener("mousedown", closeFilter);
  }, [])

  
  return (
    <fieldset className="filter_dropdown" ref={menuRef}>
      <button
        className="filter__button _btn-text"
        onClick={() => setIsDropdownDisplayed((prevState) => !prevState)}
      >
        {numberOfFilterItemsSelected > 0
          ? `${props.title} ${numberOfFilterItemsSelected}`
          : `${props.title}`}
      </button>
      {isDropdownDisplayed && (
        <div className="filter_panel">
          {props.list.map((name) => (
            <fieldset
              key={name.value}
              className={
                selectedFilterItems[name.value]
                  ? `selected filter_panel_items`
                  : 'filter_panel_items'
              }
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
              <label className="filter_label" htmlFor={`input-${name.value}`}>
                {name.label}
              </label>
            </fieldset>
          ))}
        </div>
      )}
    </fieldset>
  )
}

function RadioFilter(props) {
  const [isRadioDisplayed, setIsRadioDisplayed] = useState(false)
  const [selectedFilterItems, setSelectedFilterItems] = useState(
    props.list.reduce((obj, name) => ({ ...obj, [name.value]: false }), {})
  )

  console.log('selectedFilterItems', selectedFilterItems)

  const menuRef = useRef();

  useEffect(() => {
    const closeFilter = (e) =>{
      if (!menuRef.current.contains(e.target)) {
        setIsRadioDisplayed(false);
      }
    };
    document.addEventListener("mousedown", closeFilter);
    return () => document.removeEventListener("mousedown", closeFilter);
  }, [])

  return (
    <fieldset className="filter_radio_main_fieldset" ref={menuRef}>
      <button
        className="filter__button button-year _btn-text button_radio_filter"
        onClick={() => setIsRadioDisplayed((prevState) => !prevState)}
      >
        {props.title}
      </button>
      {isRadioDisplayed && (
        <div className="filter_radio_panel">
          {props.list.map((name) => (
            <fieldset
              key={name.value}
              className={
                selectedFilterItems[name.value]
                  ? `selected filter_panel_items`
                  : 'filter_panel_items'
              }
            >
              <input
                onChange={(e) =>
                  setSelectedFilterItems({
                    [name.value]: e.target.checked,
                  })
                }
                id={`input-${name.value}`}
                type="radio"
                checked={selectedFilterItems[name.value]}
                key={name.value}
                className="filter_radio_input"
              />
              <label className="filter_radio_label" htmlFor={`input-${name.value}`}>
                {name.label}
              </label>
            </fieldset>
          ))}
        </div>
      )}
    </fieldset>
  )
}
