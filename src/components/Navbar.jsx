import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import Logo from '../Images/logo.webp'
import { TweenMax,Power3 } from 'gsap';
import { NavLink } from 'react-router-dom';

const Navbar=(()=>{
    let textItem = useRef(null);
    let navItem = useRef(null);
    const [open , setOpen] = useState(false)
    const Menus= ["Home","News","Education","About us"]

    useEffect(()=>{
        TweenMax.from(textItem,.4,{ocapcity:0,x:40,ease:Power3.easeOut,delay:.4})
        TweenMax.from(navItem,.4,{ocapcity:0,x:40,ease:Power3.easeOut,delay:.6})
    },[])

    return(
        <div ref={el=>{textItem=el}} className='flex justify-evenly items-center mt-3' id='parent'>
            <div className='flex items-center gap-3'>
            <div>
                <img src={Logo} alt='logo' className='h-28 cursor-pointer transform hover:scale-150 transition-all duration-150 ease-in-out'/>
            </div>
            <div>
                <p className='text-3xl text-blue-950
                font-extrabold p-3 tracking-tight text-center
                 cursor-pointer hover:underline underline-offset-8 
                ext-blue-900 hover:text-green-600 
                transform hover:scale-150 transition-all duration-150 ease-in-out'>SDG</p>
            </div>
            </div>
            <div ref={el=>{navItem=el}} className='flex'> 
                <ul className='hidden lg:flex items-center gap-12
                text-xl text-black font-bold cursor-pointer font-sans '>
                    <NavLink to="/"><li className='text-blue-950 p-1  hover:underline underline-offset-8
                    hover:text-green-600 transform hover:scale-150 transition-all duration-150 ease-in-out'>HOME</li></NavLink>
                    <NavLink to="/News"><li className='text-blue-950 p-1 hover:underline underline-offset-8  hover:text-green-600
                    transform hover:scale-150 transition-all duration-150 ease-in-out'>NEWS</li></NavLink>
                    <NavLink to="/education"><li className='text-blue-950 p-1 hover:underline underline-offset-8  hover:text-green-600
                    transform hover:scale-150 transition-all duration-150 ease-in-out'>EDUCATION</li></NavLink>
                   <NavLink to="/aboutus"><li className='text-blue-950 p-1 hover:underline underline-offset-8  hover:text-green-600
                    transform hover:scale-150 transition-all duration-150 ease-in-out'>ABOUT US</li></NavLink> 
                    </ul>
            </div>
            {
                open && <div className="bg-orange p-4 h-screen w-64 shadow-lg absolute top-20 -right-1 font-sans font-medium tracking-wider">
                <ul>
                    {
                        Menus.map((menu)=>(
                            <li onClick={()=>setOpen(false)} 
                            className='p-4 text-lg cursor-pointer rounded hover:bg-green-200 hover:text-blue-950 text-blue-800 hover:underline underline-offset-8 hover:font-bold hover:tracking-widest hover:text-center'  key={menu}>{menu}</li>
                        ))
                    }
                </ul>
            </div>
            }
            <div className='lg:hidden'>
            <FaBars className='hover:border-double border-2 border-black ring-offset-8 h-9 w-10 mr-6 rounded' id='drop-down'
            onClick={()=>setOpen(!open)}/>
           
            </div>
        </div>
    )
})
export default Navbar;

