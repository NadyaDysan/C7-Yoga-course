import styled from 'styled-components/macro'

export const FormContainer = styled.div`
`

export const RegisterBlock = styled.div`
  width: 360px;
  height: 433px;
  background-color: #ffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 43px;
`
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  align-content: flex-start;
  justify-content: space-between;
  margin-top: 43px;
  margin-bottom: 41px;
`

export const Logo = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`
export const Login = styled.input`
  font-family: 'StratosSkyeng';
  border: none;
  border-bottom: 1px solid #d0cece;
  box-sizing: border-box;
  width: 278px;
  height: 26px;
  padding: 2px;
`
export const Password = styled.input`
  font-family: 'StratosSkyeng';
  border: none;
  border-bottom: 1px solid #d0cece;
  box-sizing: border-box;
  width: 278px;
  height: 26px;
  padding: 2px;
`
export const RepeatPassword = styled.input`
  font-family: 'StratosSkyeng';
  border: none;
  border-bottom: 1px solid #d0cece;
  box-sizing: border-box;
  width: 278px;
  height: 26px;
  padding: 2px;
`
export const RegisterButton = styled.input.attrs({ type: 'button' })`
  font-family: 'StratosSkyeng';
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  margin-top: 34px;
  font-size: 16px;
  cursor: pointer;
`
export const EnterButton = styled.input.attrs({ type: 'submit' })`
  font-family: 'StratosSkyeng';
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  margin-top: 34px;
  font-size: 16px;
  cursor: pointer;
  `