import styled from 'styled-components/macro'

export const ThemeSwitcherIconSvg = styled.svg`
  position: relative;
  top: 0.125em;
  flex-shrink: 0;
  height: 1em;
  width: 1em;
  fill: ${props => props.theme.color};
  transition: fill 0.3s;
`

export const ThemeSwitcherButton = styled.button`
  font-size: 2.25em;
  position: relative;
  background: transparent;
  transition: background 0.3s;
  border: none;
`
