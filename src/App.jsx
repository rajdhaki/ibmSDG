import React from 'react'
import './App.css'
import Index from './components/Index'
import Cursor from './elements/Cursor'
import ContextProvider from './context/contextProvider'


function App() {
  return (
    <ContextProvider>
      <Index />
      <Cursor />
    </ContextProvider>
  )
}

export default App
