import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from './theme/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   <ChakraProvider theme={customTheme}>
      <RouterProvider router={router}/>
   </ChakraProvider>,
)
