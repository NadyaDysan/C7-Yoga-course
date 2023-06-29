import { NavLink } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie'
import * as S from './Enter-style'

export default function Enter({ user }) {
  
  return (
      <S.AuthBlock>
        <S.Logo src="img/logo_black.png" alt="logo" />
        <S.InputBlock>
          <S.Login name="Login" placeholder="Login" />
          <S.Password name="Password" placeholder="Password" />
          <S.EnterButton onClick={Cookies.set('token', '1234')}>
            {user ? 'Sign out' : 'Sign in'}
          </S.EnterButton>
          <NavLink to="/registration">
            <S.RegisterButton>Register</S.RegisterButton>
          </NavLink>
        </S.InputBlock>
      </S.AuthBlock>
  )
}
