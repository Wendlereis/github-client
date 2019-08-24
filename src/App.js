import React from 'react'
import StoreProvider from './store'
import { Auth } from './components/pages/auth'

export default function App() {
  return (
    <StoreProvider>
      <Auth />
    </StoreProvider>
  )
}
