import styled from 'styled-components/macro'


export const ProgressBarContainer = styled.div`
--progress-bar-height: 5px;

position: relative;
width: 100%;

&::before {
    content: '';
    background-color: ${props => props.theme.lightGreyColor};
    width: 100%;
    height: var(--progress-bar-height);
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 1;
}
`
export const ProgressBarCover = styled.div`
 background-color: #D9B6FF;
 width: 20%;
 height: var(--progress-bar-height);
 display: block;
 position: absolute;
 border-radius: 10px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 user-select: none;
 pointer-events: none;
`


export const ProgressBarThumb = styled.div`
width: 16px;
height: 16px;
z-index: 3;
background: ${props => props.theme.background};
border: 3px solid ${props => props.theme.lightGreyColor};
position: absolute;
border-radius: 50%;
pointer-events: none;
user-select: none;
top: 0;
bottom: 0;
margin: auto 0;
`
export const ProgressBarInputRange = styled.input`
-webkit-appearance: none;
background-color: ${props => props.theme.lightGreyColor};
height: var(--progress-bar-height);
width: 100%;
cursor: pointer;
opacity: 0;
margin: 0 auto
`