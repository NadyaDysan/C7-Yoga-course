import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import * as S from './Enter-style'

export default function Enter({ user }) {
  const navigate = useNavigate()

  const signIn = () => {
    Cookies.set('token', '1234');
    navigate('/main')
  }

  return (
    <S.AuthBlock>
      <S.Logo src="img/logo_black.png" alt="logo" />
      <S.InputBlock>
        <S.Login name="Login" placeholder="Login" />
        <S.Password name="Password" placeholder="Password" />
          <S.EnterButton onClick={signIn}>
            {user ? 'Sign out' : 'Sign in'}
          </S.EnterButton>
        <NavLink to="/registration">
          <S.RegisterButton>Register</S.RegisterButton>
        </NavLink>
      </S.InputBlock>
    </S.AuthBlock>
  )
}
