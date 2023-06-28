import * as S from "./Registration-style";


export default function Registration() {

  return (
    <S.RegisterBlock>
        <S.Logo src="img/logo.png" alt="logo"/>
        <S.Login name="Login" placeholder="Логин"/>
        <S.Password name="Password" placeholder="Пароль"/>
        <S.RepeatPassword name="RepeatPassword" placeholder="Повторить пароль"/>
        <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
    </S.RegisterBlock>
  )
}
