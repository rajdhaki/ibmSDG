import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'

const Cursor = () => {
  


    return (
        <div  id="main" style={{"width":"100vw", "height":"100vh"}}>
        <div id='cursor' className='w-2.5 h-2.5 bg-blue-950 rota rounded-full fixed'></div>
        </div>
    )
}

export default Cursor
