import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <Router>
          <App />
        </Router>
    </ChakraProvider>
  </React.StrictMode>
)
