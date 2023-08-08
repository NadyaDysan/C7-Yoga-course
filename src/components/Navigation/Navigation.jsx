/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react'
import * as S from './Navigation-styles'
import ThemeSwitcher, {
  useThemeContext,
  themes,
} from '../ThemeSwitcher/ThemeSwitcher'


const navMenu = [
  { id: 0, title: 'Главное', link: '/main' },
  { id: 1, title: 'Мой плейлист', link: '/my_tracks/:id' },
  { id: 2, title: 'Выйти', link: '/logout' },
]

export default function Navigation() {

  const [navBurgerOpen, setNavBurgerOpen] = useState(false)
  const toggleNavBurger = () => setNavBurgerOpen(!navBurgerOpen)
  const { theme } = useThemeContext()

  const navMenuRef = useRef()

  useEffect(() => {
    const closeNavMenu = (e) => {
      if (!navMenuRef.current.contains(e.target)) {
        setNavBurgerOpen(false)
      }
    }
    document.addEventListener('mousedown', closeNavMenu)
    return () => document.removeEventListener('mousedown', closeNavMenu)
  }, [])

  return (
    <S.MainNav theme={theme}>
      <S.NavigationLogo to="/main">
        {theme === themes.dark ? (
          <S.LogoImage src="/img/logo.png" alt="logo" href="/main" />
        ) : (
          <S.LogoImage src="/img/logo_black.png" alt="logo" href="/main" />
        )}
      </S.NavigationLogo>
      <S.FieldsetNavMenu ref={navMenuRef}>
        <S.NavigationBurger onClick={toggleNavBurger}>
          <S.BurgerLine />
          <S.BurgerLine />
          <S.BurgerLine />
        </S.NavigationBurger>
        {navBurgerOpen && (
          <S.NavigationMenu theme={theme}>
            {navMenu.map((item) => (
              <S.MenuItem key={item.id}>
                <S.MenuLink theme={theme} href={item.link}>
                  {item.title}
                </S.MenuLink>
              </S.MenuItem>
            ))}
            <ThemeSwitcher />
          </S.NavigationMenu>
        )}
      </S.FieldsetNavMenu>
    </S.MainNav>
  )
}
