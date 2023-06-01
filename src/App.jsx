/* eslint-disable import/no-extraneous-dependencies */
import { SkeletonTheme } from 'react-loading-skeleton';
import { createGlobalStyle } from 'styled-components';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import Player from './Player/Player';
import Centerblock from './Centerblock/Centerblock';

import './App.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  }
  @font-face {
    font-family: 'StratosSkyeng';
    src: local("StratosSkyeng"), local("StratosSkyeng"), url("./src/fonts/Stratos-Regular.woff2") format("woff2"), url("./src/fonts/Stratos-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  *:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #FFFFFF;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
}

.container {
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
}

._btn-text:hover {
  border-color: #D9B6FF;
  color: #D9B6FF;
  cursor: pointer;
}

._btn-icon:hover svg {
  fill: transparent;
  stroke: #ACACAC;
  cursor: pointer;
}

._btn-text:active {
  border-color: #AD61FF;
  color: #AD61FF;
  cursor: pointer;
}

._btn-icon:active svg {
  fill: transparent;
  stroke: #FFFFFF;
  cursor: pointer;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  fill: #696969;
  stroke: #FFFFFF;
  cursor: pointer;
}

.main {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.fieldset_nav_menu {
  border: none;
  width: 24px;
}

.main__nav {
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
}

.main__centerblock {
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
}

.main__sidebar {
  max-width: 418px;
  padding: 20px 90px 20px 78px;
}
`;


function App() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
    <GlobalStyle />
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <Centerblock />
          <Player />
        </main>
        <Sidebar />
      </div>
    </div>
    </SkeletonTheme>
  )
}

export default App
