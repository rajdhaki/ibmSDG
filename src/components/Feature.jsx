import React from 'react'
import earth from '../Images/smallearth1.gif'

const Feature = (props) => {
 const{title, para} = props

    return (
        <>

          <div className='flex justify-center items-center py-12 gap-4' >
          <div className=' w-3/6 flex flex-col justify-center items-center text-5xl font-semibold py-10 leading-snug' >
            <h1>SUSTAINABLE</h1>
            <h1 className='flex'>DEVEL<span > <img style={{"width":"3.6rem" }} src={earth} alt="" /> </span>PMENT</h1>
            <h1>{title}</h1>
          </div>
          <div className=' w-3/6 flex justify-center items-center text-lg py-10 px-8'>
          {para}
          </div >
          </div>
        </>
    )
}

export default Feature
