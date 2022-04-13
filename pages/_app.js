import wrapper from '../redux/store'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyle'
import theme from '../styles/theme'

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
