import React from 'react'
import './App.css'
import Cursor from './elements/Cursor'
import ContextProvider from './context/contextProvider'
import Home from './pages/Home'


function App() {
  return (
    <ContextProvider>
      <Cursor />
      <Home/>
    </ContextProvider>
  )
}

export default App
