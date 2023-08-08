import styled from 'styled-components'

export const ErrorList = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
`

export const ErrorItem = styled.div`
  display: ${(props) => (props.isHidden ? 'none' : 'grid')};
  grid-template-columns: 150px;
  align-items: center;
  width: 100%;
  height: 42px;
  border-style: solid;
  border-width: 1px;
  &:nth-child(n + 1) {
    border-top: none;
  }
  padding-left: 21px;
  padding-right: 12px;
`
