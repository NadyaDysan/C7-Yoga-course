import styled from 'styled-components/macro'

export const NavigationLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`

export const NavigationBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`

export const NavigationMenu = styled.div`
  display: block;
  visibility: visible;
  position: absolute;
  background-color: ${props => props.theme.background};
`

export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
`

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  list-style-type: none;
`

export const MenuLink = styled.a`
  color: ${props => props.theme.color};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
export const FieldsetNavMenu = styled.fieldset`
  border: none;
  width: 24px;
`
export const MainNav = styled.nav`
width: 244px;
  background-color: ${props => props.theme.background};
  padding: 20px 0 20px 36px;
`