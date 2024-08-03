import React, { useRef } from 'react'
import "../home.css";
import Globe from '../components/Globe'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(
  ArcElement,
  Tooltip,
  Legend
)
import { Doughnut } from 'react-chartjs-2'
import context from '../context/Context'
import Feature from '../components/Feature'
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const { cursorRef } = React.useContext(context)

  const SDG = useRef(null)
  const sdgBtn = useRef(null)
  const featureRef = useRef(null)
  const reloadHomeRef = useRef(null)

  const Navigate = useNavigate()

  useGSAP(() => {
    gsap.from(SDG.current, {
      x: -160,
      duration: 2,
      opacity: 0
    })
  })

  const cursorSize = () => {
    cursorRef.current.innerHTML = "Tab"
    gsap.to(cursorRef.current, {
      scale: 3,
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


  const data = {
    labels: ["Tree", "Land", "Water"],
    datasets: [{
      label: "poll",
      data: [1, 2, 7],
      backgroundColor: ["#66CC66", "#CC9966", "#3399CC"],
      borderColor: ["white"]
    }]
  }

  const data2 = {
    labels: ["India population", "other"],
    datasets: [{
      label: "poll",
      data: [2.1, 7.9],
      backgroundColor: ["#971D1D", "#57514B"],
      borderColor: ["white"]
    }]
  }

  const slides = [
    { title: "RANKING", para: "Sustainable development ranking evaluates and compares the progress of countries, cities, or organizations toward achieving sustainable development goals (SDGs). These rankings consider various factors that contribute to sustainability, including economic performance, social well-being, and environmental health. By assessing indicators such as GDP growth, innovation, education access, healthcare quality, carbon emissions, and resource management, sustainable development rankings provide a comprehensive overview of how well entities are balancing economic growth, social inclusion, and environmental protection." },
    { title: "REPORTS", para: "Sustainable development reports are comprehensive documents that track and analyze the progress, challenges, and strategies related to achieving sustainable development goals (SDGs). These reports are produced by governments, organizations, and institutions to provide a detailed overview of their sustainability efforts. They cover a wide range of areas, including economic performance, social progress, and environmental sustainability. Economic indicators such as GDP growth, innovation, and employment rates are evaluated to assess economic development.  " },
    { title: "NEWS", para: "Sustainable development news encompasses updates, stories, and analyses related to the ongoing efforts and progress toward achieving sustainable development goals (SDGs). This news covers a broad spectrum of topics, including economic, social, and environmental aspects of sustainability. It includes reports on new policies, initiatives, and projects implemented by governments, organizations, and communities to promote sustainable development." }
  ];
  const clickToReport = () => {
    Navigate('reports')
  }

  return (
    <>

      <div className='home-container' ref={reloadHomeRef} >

        <section className='main-content-1'>

          <div className='inner-c-1' ref={SDG}>
            <div className='inner1-child-c-1'>
              <h1>SUSTAINABLE</h1>
              <h1>DEVELOPMENT</h1>
              <h1>TRACKER</h1>
            </div>

            <div className='inner2-child-c-1'>
              <h3 className='text-xl font-bold'>"Our Goals, Our Planet, Our Future"</h3>
              <p className=' text-lg'>This text emphasizes collective responsibility and future-focused thinking.</p>
              <button ref={sdgBtn} onClick={clickToReport} onMouseEnter={cursorSize} onMouseLeave={defaultCursor} className='mt-4 px-6 py-1 rounded-full border-blue-950 border-2 p-2 self-center text-[#ffcdab] bg-gradient-to-r  from-[#003366] to-[#3399CC]' >Know More</button>
            </div>

            <div className='inner3-child-c-1'>
              <h3 className='text-xl font-bold'>"Our Goals, Our Planet, Our Future"</h3>
              <p className=' text-lg'>This text emphasizes collective responsibility and future-focused thinking.</p>
              <button ref={sdgBtn} onClick={clickToReport} onMouseEnter={cursorSize} onMouseLeave={defaultCursor} className='mt-4 px-6 py-1 rounded-full border-blue-950 border-solid border-2 p-2 self-center text-[#ffcdab] bg-gradient-to-r from-[#003366] to-[#3399CC] ' >Know More</button>
            </div>

          </div>

          <div className='inner-c-2'>

            <Globe />

            <div className='inner1-child-c-2'>
              <h3 className='text-3xl font-bold text-center '>"Innovate, Implement, Sustain"</h3>
              <p className=' text-xl text-center px-14'>This option focuses on the process of achieving sustainability—through innovation, implementation, and ongoing commitment.</p>
            </div>

          </div>

          <div className='inner-c-3'>

            <div className="inner1-child-c-3">
              <Doughnut
                data={data}
              />

              <p className='pt-2 px-2 '>Plant a Tree, Grow a Future.” “Keep the Earth Green, Save Trees.” “Trees Are Life's Lungs, Protect Them.”</p>

              <button ref={sdgBtn} onMouseEnter={cursorSize} onMouseLeave={defaultCursor} onClick={clickToReport} className=' px-2 rounded-full border-blue-950 border-solid border-2 self-center bg-slate-300 text-sm text-[#ffcdab] bg-gradient-to-r from-[#003366] to-[#3399CC]' >Know More</button>
            </div>

            <div className="inner2-child-c-3">
              <Doughnut
                data={data2}
              />
            </div>

          </div>
        </section>

        <section className='main-content-2'>
          <div >
            <h1 className=' text-5xl font-bold border-solid border-b-2 border-blue-900'>Features</h1>
            <div ref={featureRef} className='flex justify-center items-center ' >
              <Feature slides={slides} />
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home
