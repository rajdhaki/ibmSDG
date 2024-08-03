import React from 'react'

import context from './Context'

const ContextProvider = ({children})=>{

    const [cursorRef, setCursorRef] = React.useState(null)
    const [ countryData, setCountryData] = React.useState({})
    const [ handleSidebar, setHandleSidebar] = React.useState(Boolean)

 return (
    <>

    <context.Provider value={{cursorRef, setCursorRef, countryData, setCountryData, handleSidebar, setHandleSidebar }}>
    {children}
    </context.Provider>

    </>
 )
}

export default ContextProvider