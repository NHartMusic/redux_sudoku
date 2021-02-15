import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {Content} from './components'

import { unregister } from './core'
import { GlobalStyles, theme } from './styles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>
      <div>hello</div>
      </Content>
      
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()
