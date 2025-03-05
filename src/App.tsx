import { ThemeProvider } from 'styled-components'
import './App.css'
import { theme } from './theme/theme'
import { GlobalStyles } from './theme/GlobalStyles'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
