import * as React from 'react'
import * as S from './ThemeSwitcher-style'

export const themes = {
  light: {
    color: '#000000',
    background: '#fff',
  },
  dark: {
    color: '#fff',
    background: '#282c34',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = React.useContext(ThemeContext)

  if (!theme) return theme.dark

  // return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  return theme
}

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <S.ThemeSwitcherButton type="button" onClick={toggleTheme}>
      <S.ThemeSwitcherIconSvg
        height="40"
        width="40"
        viewBox="0 0 40 40"
        aria-labelledby="button-label"
        focusable="false"
      >
        <title id="button-label">Theme-Switcher</title>
        {theme === themes.dark ? (
          <use xlinkHref="img/icon/sprite.svg#theme-light" />
        ) : (
          <use xlinkHref="img/icon/sprite.svg#theme-dark" />
        )}
      </S.ThemeSwitcherIconSvg>
    </S.ThemeSwitcherButton>
  )
}
