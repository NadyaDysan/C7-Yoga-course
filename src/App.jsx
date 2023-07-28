import { SkeletonTheme } from 'react-loading-skeleton'
import styled, { createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import Cookies from 'js-cookie'
import AppRoutes from './routes'
import { themes, ThemeContext } from './components/ThemeSwitcher/ThemeSwitcher'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  padding: 0;
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
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

h1 {
font-size: 160px;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #FFFFFF;
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

main {
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
}
`

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`

const StyledContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

function App() {
  const userToken = Cookies.get('token') // => '1234'
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <GlobalStyle />
        <StyledWrapper>
          <StyledContainer>
            <AppRoutes user={userToken} />
          </StyledContainer>
        </StyledWrapper>
      </SkeletonTheme>
    </ThemeContext.Provider>
  )
}

export default App
