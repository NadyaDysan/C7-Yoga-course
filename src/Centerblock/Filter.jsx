/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react'

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
]

export default function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <DropdownFilter
        name="singer"
        title="исполнителю"
        list={singers}
        onChange={this.onChange}
        searchable={['Искать по исполнителю', 'Нет результатов']}
      />

      <div className="filter__button button-year _btn-text">году выпуска</div>
      <button className="filter__button button-genre _btn-text">жанру</button>
    </div>
  )
}

function DropdownFilter({ id, searchable, styles }) {
  const [isListOpen, setListOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [selectedItems, setSelectedItems] = useState([])
  const [keyword, setKeyword] = useState('')
  const searchField = useRef(null)

  const { wrapper, header, headerTitle, list, listSearchBar, scrollList } =
    styles
  const handleTitle = () => {
    const { length } = selectedItems

    if (!length) {
      setTitle(title)
    } else if (length === 1) {
      setTitle(`${title} ${length}`)
    } else {
      setTitle(`${title} ${length}`)
    }
  }

  const handleSelection = ({ item, name, onChange }) => {
    const index = selectedItems.findIndex((i) => i.value === item.value)

    if (index !== -1) {
      const selectedItemsCopy = [...selectedItems]
      selectedItemsCopy.splice(index, 1)
      setSelectedItems(
        () => selectedItemsCopy,
        () => {
          onChange(selectedItems, name)
          handleTitle()
        }
      )
    } else {
      setSelectedItems(
        (prevState) => [...prevState.selectedItems, item],
        () => {
          onChange(selectedItems, name)
          handleTitle()
        }
      )
    }
  }

  const selectItem = (item, closeOnSelection, noCloseOnSelection = false) => {
    setListOpen((!noCloseOnSelection && !closeOnSelection) || false, () =>
      handleSelection(item, selectedItems)
    )
  }
  const selectMultipleItems = (items) => {
    items.forEach((item) => {
      const selectedItem = list.find((i) => i.value === item.value)
      setTimeout(() => {
        selectItem(selectedItem, true)
      })
    })
  }

  const close = () => {
    setListOpen(false)
  }

  useEffect(() => {
      
      if (isListOpen.select.length) {
        selectMultipleItems(isListOpen.select)
      };
    
      return () => window.removeEventListener('click', close) ;
       },
    [isListOpen]
  )


  // const selectAll = (name, onChange) => {
  //   setListOpen(
  //     (prevState) => ({
  //       selectedItems: prevState.list,
  //     }),
  //     () => {
  //       handleTitle()
  //       onChange(selectedItems, name)
  //     }
  //   )
  // }
  // selectAll()

  // const deselectAll = (name, onChange) => {
  //   setSelectedItems([], () => {
  //     handleTitle()
  //     onChange(selectedItems, name)
  //   })
  // }
  // deselectAll()

  const toggleList = () => {
    searchField.current.focus()
    setListOpen(
      (prevState) => !prevState.isListOpen,
      () => {
        if (isListOpen && searchField.current) {
          searchField.current.focus()
          setKeyword('')
        }
      }
    )
  }

  const filterList = (e) => {
    setKeyword(e.target.value.toLowerCase())
  }

  const listItems = () => {
    const { listItem, listItemNoResult } = styles
    let tempList = [...list]

    if (keyword.length) {
      tempList = list.filter((item) =>
        item.label.toLowerCase().includes(keyword.toLowerCase())
      )
    }

    if (tempList.length) {
      return tempList.map((item) => (
        <button
          type="button"
          className={`dd-list-item ${id}`}
          style={listItem}
          key={item.value}
          onClick={() => selectItem(item)}
        >
          {item.label}{' '}
          {
            selectedItems.some((i) => i.value === item.value)
            // &&
            // (<button style={color: "B672FF"; textDecorationLine: 'underline'}>
            // </button>)
          }
        </button>
      ))
    }

    return (
      <div className={`dd-list-item no-result ${id}`} style={listItemNoResult}>
        {searchable[1]}
      </div>
    )
  }

  return (
    <div className={`dd-wrapper ${id}`} style={wrapper}>
      <button
        type="button"
        className={`dd-header ${id}`}
        style={header}
        onClick={toggleList}
      >
        <div className={`dd-header-title ${id}`} style={headerTitle}>
          {title}
        </div>
        {/* {isListOpen
            ? <button style={color: "#9A48F1"}></button>
            : <button style={color: "#FFFFFF"}></button>} */}
      </button>
      {isListOpen && (
        <div
          role="list"
          type="button"
          className={`dd-list ${searchable ? ' searchable' : ''} ${id}`}
          style={list}
          onClick={(e) => e.stopPropagation()}
        >
          {searchable && (
            <input
              ref={searchField}
              className={`dd-list-search-bar ${id}`}
              style={listSearchBar}
              placeholder={searchable[0]}
              onChange={(e) => filterList(e)}
            />
          )}
          <div className={`dd-scroll-list ${id}`} style={scrollList}>
            {listItems()}
          </div>
        </div>
      )}
    </div>
  )
}

DropdownFilter.defaultProps = {
  id: '',
  select: [],
  closeOnSelection: false,
  titlePlural: undefined,
  searchable: undefined,
  styles: {},
}
