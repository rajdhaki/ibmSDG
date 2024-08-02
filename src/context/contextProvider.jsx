import React from 'react'

import context from './Context'

const ContextProvider = ({children})=>{

    const [cursorRef, setCursorRef] = React.useState(null)
    const [ countryData, setCountryData] = React.useState({})

 return (
    <>

    <context.Provider value={{cursorRef, setCursorRef, countryData, setCountryData }}>
    {children}
    </context.Provider>

    </>
 )
}

export default ContextProvider