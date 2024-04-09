import GlobalStyle from './components/GlobalStyle'
import { BodyWrapper } from './components/layout/BodyLayout.styled'
import Forecast from './components/Forecast/Forecast'
import { GlobalContextProvider } from './contexts/GlobalContext/GlobalContext'

function App() {
  return (
    <GlobalContextProvider>
      <BodyWrapper>
        <Forecast />
      </BodyWrapper>
      <GlobalStyle />
    </GlobalContextProvider>
  )
}

export default App
