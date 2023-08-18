import { SkeletonTheme } from 'react-loading-skeleton'
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import AppRoutes from './routes'
import { themes, ThemeContext } from './components/ThemeSwitcher/ThemeSwitcher'
import { isLoggedInSelector } from './redux/store'
import { useRefreshMutation } from './redux/api/userApi'
import { getRefresh, isRefreshExists } from './redux/features/refresh'

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
  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const isLoggedIn = useSelector(isLoggedInSelector)

  const [refresh, { isLoading: isRefreshFetching, isError: isRefreshError }] =
    useRefreshMutation()

  const handleRefreshAccess = () => {
    if (isRefreshExists()) {
      refresh({ refresh: getRefresh() })
    }
  }

  useEffect(() => {
    handleRefreshAccess()
    const timer = setInterval(handleRefreshAccess, 50000)
    return () => clearInterval(timer)
  }, [])

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
      {(!isLoggedIn || isRefreshFetching) &&
      !isRefreshError &&
      isRefreshExists() ? (
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <GlobalStyle />
          <StyledWrapper>
            <StyledContainer>
              <AppRoutes />
            </StyledContainer>
          </StyledWrapper>
        </SkeletonTheme>
      ) : (
        <>
          <GlobalStyle />
          <StyledWrapper>
            <StyledContainer>
              <AppRoutes isAuth={isLoggedIn} />
            </StyledContainer>
          </StyledWrapper>
        </>
      )}
    </ThemeContext.Provider>
  )
}

export default App
