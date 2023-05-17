/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react'

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
      <div className="nav__logo logo">
        <img className="logo__image" src="src/img/logo.png" alt="logo" />
      </div>
      <fieldset className="fieldset_nav_menu" ref={navMenuRef}>
      <div className="nav__burger burger" onClick={toggleNavBurger}>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      {navBurgerOpen && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
      </fieldset>
    </nav>
  )
}
