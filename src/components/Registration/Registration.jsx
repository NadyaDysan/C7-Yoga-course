import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useLoginMutation,
  useSignupMutation,
  useTokenMutation,
} from '../../redux/api/userApi'
import { isLoggedInSelector } from '../../redux/store'
import { addError } from '../../redux/features/authSlice'
import * as S from './Registration-style'


export default function Registration() {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(isLoggedInSelector)

  const [isSignUp, setIsSignUp] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

  const [signUp, { isLoading: isSignUpReceiving, isSuccess: isSingUpSuccess }] =
    useSignupMutation()
  const [signIn, { isLoading: isSignInReceiving, isSuccess: isSignInSuccess }] =
    useLoginMutation()
  const [
    receiveToken,
    { isLoading: isTokenReceiving, isSuccess: isTokenSuccess },
  ] = useTokenMutation()

  useEffect(() => {
    if (isSingUpSuccess) {
      setPassword('')
      setRepeatedPassword('')
      setIsSignUp(false)
    }
  }, [isSingUpSuccess])

  useEffect(() => {
    if (isSignInSuccess) {
      receiveToken({
        username,
        email: `${username}@mail.ru`,
        password,
      })
    }
  }, [isSignInSuccess])

  const handleSignUp = () => {
    if (password !== repeatedPassword) {
      dispatch(
        addError({
          error: 'password',
          message: 'Оба введеных пороля должны совпадать',
          unique: 'noPasswordMessage',
        })
      )
      return
    }
    signUp({
      username,
      email: `${username}@mail.ru`,
      password,
    })
  }

  const handleSignIn = () => {
    signIn({
      username,
      email: `${username}@mail.ru`,
      password,
    })
  }

  const handleOnSignUpClick = () => {
    setIsSignUp(true)
  }

  const handleOnSubmit = () => {
    if (isSignUp) {
      handleSignUp()
    } else {
      handleSignIn()
    }
  }

  if (isTokenSuccess) {
    return <Navigate to="/main" />
  }

  if (isLoggedIn) {
    return <Navigate to="/main" />
  }

  return (
    <S.FormContainer
      disabled={isSignUpReceiving || isSignInReceiving || isTokenReceiving}
    >
      <S.RegisterBlock
        component="form"
        noValidate
        autoComplete="off"
      >
        <S.Logo src="img/logo_black.png" alt="logo" />
        <S.InputBlock>
          <S.Login
            name="login"
            placeholder="Логин"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <S.Password
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete={isSignUp ? 'new-password' : 'current-password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {isSignUp && (
            <S.RepeatPassword
              type="password"
              name="password-repeat"
              placeholder="Повторите пароль"
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              value={repeatedPassword}
              onChange={(event) => setRepeatedPassword(event.target.value)}
            />
          )}
          <S.EnterButton
            variant="contained"
            type="submit"
            value={isSignUp ? 'Зарегистрироваться' : 'Войти'}
            onClick={handleOnSubmit}
          />
          {!isSignUp && (
            <S.RegisterButton
              variant="contained"
              type="submit"
              value="Зарегистрироваться"
              onClick={handleOnSignUpClick}
            />
          )}
        </S.InputBlock>
      </S.RegisterBlock>
    </S.FormContainer>
  )
}
