import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

// style
import FontStyle from '../styles/fontStyle'
import GlobalStyle from '../styles/globalStyle'
import theme from '../styles/theme'

// redux
import { useDispatch } from 'react-redux'
import wrapper from '../redux/store'
import { getToken } from '../redux/actions/AuthAction'

import axios from 'axios'
import { backURL } from '../config/config'
axios.defaults.baseURL = backURL

// toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// markdown css
import '../styles/markdown.css'

function App({ Component, pageProps }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getToken())
  }, [])
  return (
    <>
      <FontStyle />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToastContainer autoClose={2000} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)