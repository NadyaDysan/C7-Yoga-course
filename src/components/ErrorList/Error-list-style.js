import styled from 'styled-components'

export const ErrorList = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
`

export const ErrorItem = styled.div`
  display: ${(props) => (props.isHidden ? 'none' : 'flex')};
  border-style: solid;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 4px;
  font-size: 20px;
  gap: 34px;
`
export const ErrorClose = styled.p`
  cursor: pointer;
`
