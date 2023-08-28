import styled from 'styled-components/macro'

export const CenterBlockGradient = styled.div`
  position: fixed;
  left: 0;
  bottom: ${p => p.bottom || 0};
  width: 100vw;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column nowrap;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  z-index: 1;
`

export const Gradient = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${props => props.theme.background} 100%);
  width: 100%;
  height: calc(44 * 100vw / 1920);
`
