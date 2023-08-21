import * as React from 'react'
import * as S from './ThemeSwitcher-style'

export const themes = {
  light: {
    color: '#000000',
    background: '#fff',
    lightGreyColor: '#B1B1B1',
    lighterGreyColor: '#F6F4F4',
    BtnIconSvg1: '#B1B1B1',
    BtnIconSvg2: '#707070',
    purple: '#c29deb',
    TrackListItem: '#ad61ff',
    TrackListItemSelected: '#000000',
  },
  dark: {
    color: '#fff',
    background: '#181818',
    lightGreyColor: '#4E4E4E',
    lighterGreyColor: '#313131',
    BtnIconSvg1: '#D9D9D9',
    BtnIconSvg2: '#696969',
    purple: '#ad61ff',
    TrackListItem: '#ad61ff',
    TrackListItemSelected: '#000000',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const fadedStyle = {
  display: 'none',
}

export const useThemeContext = () => {
  const theme = React.useContext(ThemeContext)

  if (!theme) return theme.dark

  return theme
}

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <S.ThemeSwitcherButton type="button" onClick={toggleTheme}>
      <S.ThemeSwitcherIconSvg
        theme={theme}
        height="40"
        width="40"
        viewBox="0 0 40 40"
        aria-labelledby="button-label"
        focusable="false"
      >
        <title id="button-label">Theme-Switcher</title>
        {theme === themes.dark ? (
          <use xlinkHref="/img/icon/sprite.svg#theme-light" />
        ) : (
          <use xlinkHref="/img/icon/sprite.svg#theme-dark" />
        )}
      </S.ThemeSwitcherIconSvg>
    </S.ThemeSwitcherButton>
  )
}
