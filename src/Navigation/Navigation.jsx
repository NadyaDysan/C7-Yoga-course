/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react'
import * as S from "./Navigation-styles";

export default function Navigation() {
  const [navBurgerOpen, setNavBurgerOpen] = useState(false)
  const toggleNavBurger = () => setNavBurgerOpen(!navBurgerOpen)

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
    <nav className="main__nav nav">
      <S.NavigationLogo>
        <S.LogoImage src="src/img/logo.png" alt="logo" />
      </S.NavigationLogo>
      <fieldset className="fieldset_nav_menu" ref={navMenuRef}>
      <S.NavigationBurger onClick={toggleNavBurger}>
        <S.BurgerLine/>
        <S.BurgerLine/>
        <S.BurgerLine/>
      </S.NavigationBurger>
      {navBurgerOpen && (
        <S.NavigationMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink>
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink>
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink>
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavigationMenu>
      )}
      </fieldset>
    </nav>
  )
}
