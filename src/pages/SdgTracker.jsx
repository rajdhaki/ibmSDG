import React from 'react';
import CountryTable from '../components/CountryTable';
import { BiSearchAlt } from "react-icons/bi";
import { TbRefresh } from "react-icons/tb";
import gsap from 'gsap'
import Sidebar from '../components/Sidebar';
import context from '../context/Context';


const SdgTracker = () => {

  const [heading, setHeading] = React.useState('OVERALL')
  // const [subHeading, setSubHeading] = React.useState('The Overall performance of all 193 UN Member States')
  // const [para, setPara] = React.useState('Countries are ranked by their overall score. The overall score measures the total progress towards achieving all 17 SDGs. The score can be interpreted as a percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.')
  const _17SdgGoals = ["OVERALL", "NO POVERTY", "ZERO HUNGERS", "GOOD HEALTH", "EDUCATION", "EQUALITY", "SANITATION", "CLEAN ENERGY", "ECO GROWTH", "INFRASTRUCTURE", "INEQUALITIES", "COMMUNAITIES", "PRODUCTION", "CLIMATE", "LIFE BELOW WATER", "LIFE ON LAND", "PEACE", "PARTNERSHIPS"]
  const [sliceNum, setSliceNum] = React.useState(8)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [activeSearch, setActiveSearch] = React.useState('')
  const refreshButtonRef = React.useRef(null);
  const {countryData, cursorRef,handleSidebar} = React.useContext(context)
  
  const changeHandler = e => {
    setHeading(e.target.value)
    // if (e.target.value === 'OVERRALL') {
    //   setSubHeading('The Overall performance of all 193 UN Member States')
    //   setPara('Countries are ranked by their overall score. The overall score measures the total progress towards achieving all 17 SDGs. The score can be interpreted as a percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.')
    // } else {
    //   setSubHeading('The spillover performance of all 193 UN Member States')
    //   setPara('Countries are ranked by their spillover score. Each countrys actions can have positive or negative effects on other countries abilities to achieve the SDGs. The Spillover Index assesses such spillovers along three dimensions: environmental & social impacts embodied into trade, economy & finance, and security. A higher score means that a country causes more positive and fewer negative spillover effects.')
    // }
  }
  const handleSearchSubmit = e => {
    e.preventDefault()
    setActiveSearch(searchTerm)
  }

  const refreshRotateHandler = () => {
    gsap.to(refreshButtonRef.current, {
      rotation: '+=360',
      duration: 2,
      ease: 'power2.inOut',
      onComplete: () => {
        window.location.reload();
      }
    });
  };

  const cursorSize = () => {
    cursorRef.current.innerHTML = "Tab"
    gsap.to(cursorRef.current, {
      scale: 2,
      backgroundColor: "rgb(71 85 105)",
      pointerEvents: "none"
    })
  }

  const defaultCursor = () => {
    cursorRef.current.innerHTML = ""
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "#172554",
      pointerEvents: "none"
    })
  }
  return (
    <>
    <div >
       { handleSidebar && <div  className={`backdrop-blur-md w-full h-full fixed top-0 left-0 overflow-y-hidden ${ Object.keys(countryData).length===0 ?   'invisible': 'visible '}`}>
      <Sidebar/>
      </div>}
    
      <div className='md:px-32 py-8 w-full px-10'>
        <div >
          <h1 className='text-5xl' >{heading}</h1>
          <h4 className='text-xl '>The {heading.toLowerCase()} performance of all 180 UN Member States</h4>
        </div>

        <div className='py-8'  >
          <div className='flex items-center flex-wrap' style={{ "borderBottom": " 1px solid #101f77" }}>
            {
              _17SdgGoals.slice(0, sliceNum).map((e, i) => {
                return <button onMouseEnter={cursorSize} onMouseLeave={defaultCursor}  key={i} className='px-3 py-2' value={e} onClick={changeHandler} > {e} </button>
              })
            }
            <button onMouseEnter={cursorSize} onMouseLeave={defaultCursor} className='bg-slate-300 px-1 rounded ms-3 ' style={{ "border": "1px solid #bababa" }} onClick={e => sliceNum === 8 ? setSliceNum(16) : setSliceNum(8)}> View more </button>
          </div>

        </div>

        <div>
          <h4 className='text-lg'>Countries are ranked by their overall score. The overall score measures the total progress towards achieving all 17 SDGs. The score can be interpreted as a percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.</h4>
          <p className='py-1 text-blue-800'>Click on a country for details.</p>
        </div>

        <div className=' py-6 flex justify-start items-center gap-3 ' style={{ "width": "100%" }}>

          <div className='flex items-center justify-between rounded border-black border-solid border-2 bg-white px-4 py-3  ' style={{ "width": "70%" }}>
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder='Search Country' className='focus:outline-none' style={{ "width": "100%" }} />
            <BiSearchAlt onClick={handleSearchSubmit} style={{ cursor: 'pointer' }} size={25} />
          </div>

          <div onMouseEnter={cursorSize} onMouseLeave={defaultCursor} style={{ "width": "30%" }}>
            <button name="" id="" className=' flex items-center justify-center gap-2 font-bold rounded border-black border-solid border-2 px-4 py-3 text-[#ffcdab] bg-gradient-to-r from-[#003366] to-[#3399CC]' onClick={refreshRotateHandler}  style={{ "width": "100% " }}> Refresh <span ref={refreshButtonRef}><TbRefresh /></span>  </button>
          </div>

        </div>
        <CountryTable heading={heading} activeSearch={activeSearch} />
      </div>
      </div>
    </>
  );
};

export default SdgTracker;