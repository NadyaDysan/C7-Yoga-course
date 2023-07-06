import { NavLink } from 'react-router-dom'
import * as S from './Registration-style'


export default function Registration() {
  return (
    <S.RegisterBlock>
      <S.Logo src="img/logo_black.png" alt="logo" />
      <S.InputBlock>
        <S.Login name="Login" placeholder="Логин" />
        <S.Password name="Password" placeholder="Пароль" />
        <S.RepeatPassword
          name="RepeatPassword"
          placeholder="Повторить пароль"
        />
        <NavLink to="/">
        <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
        </NavLink>
      </S.InputBlock>
    </S.RegisterBlock>
  )
}
