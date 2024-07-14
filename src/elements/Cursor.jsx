import React, {useContext} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import context from '../context/Context'

const Cursor = () => {
    const cursor = useRef(null)

    const {setCursorRef} = useContext(context)
    setCursorRef(cursor)

    useGSAP(() => {
        window.addEventListener('mousemove', e => {
            gsap.to(cursor.current, {
                x: e.x,
                y: e.y,
                ease: "back.out(1.7)",
                duration: 2
            })
        })
    })

    return (
        
            <div ref={cursor} id='cursor' style={{"fontSize" : "5.2px", "textAlign": "center"}} className='w-2.5 h-2.5 bg-blue-950 rota rounded-full fixed flex justify-center'></div>
        
    )
}

export default Cursor
