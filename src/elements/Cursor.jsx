import React, {useContext} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import context from '../context/Context'

const Cursor = () => {
    var main = useRef(null)
    const cursor = useRef(null)

    const {setCursorRef} = useContext(context)
    setCursorRef(cursor)

    useGSAP(() => {
        main.current.addEventListener('mousemove', e => {
            gsap.to(cursor.current, {
                x: e.x,
                y: e.y,
                ease: "back.out(1.7)",
                duration: 2
            })
        })
    })

    return (
        <div ref={main} id="main" style={{ "width": "100vw", "height": "100vh" }}>
            <div ref={cursor} id='cursor' className='w-2.5 h-2.5 bg-blue-950 rota rounded-full fixed'></div>
        </div>
    )
}

export default Cursor
