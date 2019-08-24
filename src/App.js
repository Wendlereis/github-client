import React from 'react'
import StoreProvider from './store'

import Routes from './routes'

export default function App() {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  )
}
