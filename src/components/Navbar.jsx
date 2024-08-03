import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import Logo from '../Images/logo.webp'
import { TweenMax, Power3 } from 'gsap';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

const Navbar = (() => {
    // let textItem = useRef(null);
    // let navItem = useRef(null);
    const [open, setOpen] = useState(false)
    const Menus = ["Home", "News", "Education", "About us"]

    // gsap.registerPlugin(TweenMax)
    //     useEffect(()=>{
    //         TweenMax.from(textItem,.4,{ocapcity:0,x:40,ease:Power3.easeOut,delay:.4})
    //         TweenMax.from(navItem,.4,{ocapcity:0,x:40,ease:Power3.easeOut,delay:.6})
    //     },[])

    return (
        <div className='flex justify-between items-center px-16 backdrop-blur-md sticky top-0 left-0 z-50' id='parent'>
            <div className='flex items-center gap-3 backdrop-blur-lg '>
                <div className='backdrop-blur-lg' >
                    <img src={Logo} alt='logo' className='h-16 cursor-pointer transform hover:scale-125 transition-all duration-150 ease-in-out' />
                </div>
                <div className='backdrop-blur-lg' >
                    <p className='text-3xl font-extrabold px-3 tracking-tight text-center cursor-pointer hover:underline hover:text-blue-700
                transform hover:scale-125 transition-all duration-150 ease-in-out ' >SDG</p>
                </div>
            </div>
            <div >
                <ul className='hidden md:flex md:items-center md:gap-10
                text-xl font-extrabold cursor-pointer'>
                    <li className=' py-1 px-2
                     hover:bg-slate-400  hover:rounded-full '><NavLink to="/">Home</NavLink></li>
                    <li className=' py-1 px-2
                     hover:bg-slate-400 hover:rounded-full '><NavLink to="/rank">Ranking</NavLink></li>
                    <li className=' py-1 px-2
                     hover:bg-slate-400 hover:rounded-full '><NavLink to="/reports">Reports</NavLink></li>
                    <li className=' py-1 px-2
                     hover:bg-slate-400  hover:rounded-full '><NavLink to="/news">News</NavLink></li>
                    <li className=' py-1 px-2
                     hover:bg-slate-400 hover:rounded-full'><NavLink to="/aboutus">Aboutus </NavLink></li>
                    <li className=' py-1 px-2
                     hover:bg-slate-400 hover:rounded-full'><NavLink to="/contact">Contactus </NavLink></li>
                </ul>
            </div>
            {
                open && <div className="bg-orange p-4 h-screen w-64 shadow-lg absolute top-20 -right-1 font-sans font-medium tracking-wider">
                    <ul>
                        {
                            Menus.map((menu) => (
                                <li onClick={() => setOpen(false)}
                                    className=' text-lg cursor-pointer rounded  ' key={menu}>{menu}</li>
                            ))
                        }
                    </ul>
                </div>
            }
            <div className='lg:hidden'>
                <FaBars className='hover:border-double border-2 border-black ring-offset-8 h-9 w-10 mr-6 rounded' id='drop-down'
                    onClick={() => setOpen(!open)} />

            </div>
        </div>
    )
})
export default Navbar;

