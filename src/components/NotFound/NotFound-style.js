import styled from 'styled-components/macro'

export const NotFoundBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`

export const Title = styled.h1`
  font-weight: normal;
`
export const PageNotFound = styled.h2`
  font-size: 32px;
  font-weight: normal;
  display: flex;
  align-items: center;
`
export const PageNotFoundSvg = styled.img`
  width: 50px;
  height: 50px;
  margin: 0.5em;
  fill: transparent;
  stroke: ${props => props.theme.lightGreyColor};
`

export const PageNotFoundDescription = styled.h3`
  font-size: 18px;
  font-weight: normal;
  color: ${props => props.theme.lightGreyColor};
  text-align: center;
`
export const ReturnHomeButton = styled.button`
  font-family: 'StratosSkyeng';
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  border: none;
  border-radius: 6px;
  color: #fff;
  margin-top: 34px;
  font-size: 16px;
`
