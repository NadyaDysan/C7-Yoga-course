import { useEffect, useState } from 'react'
import * as S from './Search-style'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'

export default function Search({ updateSearch }) {
  const { theme } = useThemeContext()

  const [value, setValue] = useState('')

  const handleOnChange = (e) => setValue(e.target.value)

  useEffect(() => {
    if (updateSearch) updateSearch(value)
  }, [value])

  return (
    <S.CenterBlockSearch>
      <S.SearchSvg theme={theme}>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        onChange={handleOnChange}
        value={value}
        theme={theme}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterBlockSearch>
  )
}
