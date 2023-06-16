/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react'
import * as S from "./Navigation-styles";

const navMenu = [
  {title: "Главное",
    link: '#',
  },
  {title: "Мой плейлист",
    link: '#',
  },
  {title: "Войти",
    link: '#',
  },
]

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
    <S.MainNav>
      <S.NavigationLogo>
        <S.LogoImage src="/logo.png" alt="logo" />
      </S.NavigationLogo>
      <S.FieldsetNavMenu ref={navMenuRef}>
      <S.NavigationBurger onClick={toggleNavBurger}>
        <S.BurgerLine/>
        <S.BurgerLine/>
        <S.BurgerLine/>
      </S.NavigationBurger>
      {navBurgerOpen && (
        <S.NavigationMenu>
          {navMenu.map((item)=> (
            <S.MenuItem key={item.title}>
              <S.MenuLink href={item.link}>
                {item.title}
              </S.MenuLink>
            </S.MenuItem>
          ))}
        </S.NavigationMenu>
      )}
      </S.FieldsetNavMenu>
    </S.MainNav>
  )
}
