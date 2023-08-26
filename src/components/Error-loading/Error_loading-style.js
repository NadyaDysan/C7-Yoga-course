import styled from 'styled-components'

export const LoadingErrorContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const LoadingErrorTextContainer = styled.div`
  max-width: 268px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoadingErrorButtonContainer = styled.div`
  width: 178px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
`
export const LoadingErrorHeader = styled.h1`
  letter-spacing: -0.008em;
  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  font-size: 125px;
`

export const LoadingErrorText = styled.p`
  letter-spacing: -0.008em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 36px;
`

export const IconSmileSad = styled.img``

export const LoginSubmit = styled.input.attrs({ type: 'submit' })`
  font-family: 'StratosSkyeng';
  height: 52px;
  border-radius: 6px;
  border: none;
  background-image: none;
  background-color: #580ea2;
  color: white;
  box-shadow: none;
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;
`
