import * as S from './Search-style'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'


export default function Search() {
const { theme } = useThemeContext()

  return (
    <S.CenterBlockSearch>
      <S.SearchSvg theme={theme}>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText theme={theme} type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
  )
}
