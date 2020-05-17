import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
      query: {
          min: string
      }
  
      colors: {
        primary: string
        nav: string
        footer: string
        btnGradient: string
      }
      
      margin: string
    }
  }