import React from 'react'
import context from '../context/Context'

const Index = () => {
    const {cursorRef} =  React.useContext(context)
    setTimeout(() => {
        console.log(cursorRef.current);
    }, 3000);
    
  return (
    <div>
      <h1>I am From Home</h1>
    </div>
  )
}

export default Index
