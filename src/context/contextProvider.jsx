import React from 'react'

import context from './Context'

const ContextProvider = ({children})=>{

    const [cursorRef, setCursorRef] = React.useState(null)

 return (
    <>

    <context.Provider value={{cursorRef, setCursorRef}}>
    {children}
    </context.Provider>

    </>
 )
}

export default ContextProvider