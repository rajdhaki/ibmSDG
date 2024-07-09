import React from 'react'
import './App.css'
import Cursor from './elements/Cursor'
import ContextProvider from './context/contextProvider'
import Globe from './components/Globe'
import Index from './pages/Index'


function App() {
  return (
    <ContextProvider>
      <Cursor />
      <Index/>
    </ContextProvider>
  )
}

export default App
