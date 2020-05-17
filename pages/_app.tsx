import { AppProps } from "next/app"
import 'normalize.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
`

export default function App({Component, pageProps}: AppProps) {
    return (
      <>
        <GlobalStyle></GlobalStyle>
        <Component {...pageProps} />    
      </>
    )
}