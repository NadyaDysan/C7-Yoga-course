/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'

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

// onChange = (item, name) => {
//   ...
// }

export default function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <DropdownFilter
        name="singer"
        title="исполнителю"
        list={singers}
        // onChange={this.onChange}
        searchable={["Искать по исполнителю", "Нет результатов"]}
      />
      
      <div className="filter__button button-year _btn-text">
        году выпуска
      </div>
      <button className="filter__button button-genre _btn-text">жанру</button>
    </div>
  )
}

class DropdownFilter extends Component {
  constructor(props) {
    super(props)
    const { title, list } = this.props

    this.state = {
      isListOpen: false,
      title,
      keyword: '',
      selectedItems: [],
      list,
    }

    this.searchField = React.createRef()
  }

  componentDidMount() {
    const { select } = this.props

    if (select.length) {
      this.selectMultipleItems(select)
    }
  }

  componentDidUpdate() {
    const { isListOpen } = this.state

    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener('click', this.close)
      } else {
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { list } = nextProps

    if (JSON.stringify(list) !== JSON.stringify(prevState.list)) {
      return { list }
    }

    return null
  }

  close = () => {
    this.setState({
      isListOpen: false,
    })
  }

  selectAll = () => {
    const { name, onChange } = this.props

    this.setState(
      (prevState) => ({
        selectedItems: prevState.list,
      }),
      () => {
        this.handleTitle()
        onChange(this.state.selectedItems, name)
      }
    )
  }

  deselectAll = () => {
    const { name, onChange } = this.props

    this.setState(
      {
        selectedItems: [],
      },
      () => {
        this.handleTitle()
        onChange(this.state.selectedItems, name)
      }
    )
  }

  selectMultipleItems = (items) => {
    const { list } = this.state

    items.forEach((item) => {
      const selectedItem = list.find((i) => i.value === item.value)
      setTimeout(() => {
        this.selectItem(selectedItem, true)
      })
    })
  }

  selectItem = (item, noCloseOnSelection = false) => {
    const { closeOnSelection } = this.props

    this.setState(
      {
        isListOpen: (!noCloseOnSelection && !closeOnSelection) || false,
      },
      () => this.handleSelection(item, this.state.selectedItems)
    )
  }

  handleSelection = (item, selectedItems) => {
    const { name, onChange } = this.props

    const index = selectedItems.findIndex((i) => i.value === item.value)

    if (index !== -1) {
      const selectedItemsCopy = [...selectedItems]
      selectedItemsCopy.splice(index, 1)
      this.setState(
        () => ({
          selectedItems: selectedItemsCopy,
        }),
        () => {
          onChange(this.state.selectedItems, name)
          this.handleTitle()
        }
      )
    } else {
      this.setState(
        (prevState) => ({
          selectedItems: [...prevState.selectedItems, item],
        }),
        () => {
          onChange(this.state.selectedItems, name)
          this.handleTitle()
        }
      )
    }
  }

  handleTitle = () => {
    const { selectedItems } = this.state
    const { title } = this.props

    const { length } = selectedItems

    if (!length) {
      this.setState({
        title,
      })
    } else if (length === 1) {
      this.setState({
        title: `${title} ${length}`,
      })
    } else {
      this.setState({
        title: `${title} ${length}`,
      })
    }
  }

  toggleList = () => {
    this.setState(
      (prevState) => ({
        isListOpen: !prevState.isListOpen,
      }),
      () => {
        if (this.state.isListOpen && this.searchField.current) {
          this.searchField.current.focus()
          this.setState({
            keyword: '',
          })
        }
      }
    )
  }

  filterList = (e) => {
    this.setState({
      keyword: e.target.value.toLowerCase(),
    })
  }

  listItems = () => {
    const { id, searchable, styles } = this.props
    const { listItem, listItemNoResult } = styles
    const { keyword, list, selectedItems } = this.state
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
          onClick={() => this.selectItem(item)}
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

  render() {
    const { id, searchable, styles } = this.props
    const { isListOpen, title } = this.state

    const { wrapper, header, headerTitle, list, listSearchBar, scrollList } =
      styles

    return (
      <div className={`dd-wrapper ${id}`} style={wrapper}>
        <button
          type="button"
          className={`dd-header ${id}`}
          style={header}
          onClick={this.toggleList}
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
                ref={this.searchField}
                className={`dd-list-search-bar ${id}`}
                style={listSearchBar}
                placeholder={searchable[0]}
                onChange={(e) => this.filterList(e)}
              />
            )}
            <div className={`dd-scroll-list ${id}`} style={scrollList}>
              {this.listItems()}
            </div>
          </div>
        )}
      </div>
    )
  }
}

DropdownFilter.defaultProps = {
  id: '',
  select: [],
  closeOnSelection: false,
  titlePlural: undefined,
  searchable: undefined,
  styles: {},
}

