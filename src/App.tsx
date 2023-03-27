import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header, Loader } from './components';
import Router from './pages/router';
import GlobalStyle, { Container } from './theme/globalStyles';

import theme from './theme/schema'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  )
}

export default App
