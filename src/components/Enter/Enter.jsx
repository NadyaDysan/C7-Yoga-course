
import { NavLink } from "react-router-dom";
import * as S from "./Enter-style";



export default function Enter({ user, onEnterButtonClick }) {


  return (
    <S.RegistrationBlock>
        <S.Logo src="img/logo.png" alt="logo"/>
        <S.Login name="Login" placeholder="Login"/>
        <S.Password name="Password" placeholder="Password"/>
        <S.EnterButton onClick={onEnterButtonClick}>
          {user ? "Sign out" : "Sign in"}</S.EnterButton>
          <NavLink to="/registration" >
          <S.RegisterButton >Register</S.RegisterButton>
          </NavLink>
    </S.RegistrationBlock>
  )
}
