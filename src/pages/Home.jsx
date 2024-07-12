import React, {useRef} from 'react'
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


const Home = () => {

const {cursorRef} = React.useContext(context)

const SDG = useRef(null)
const sdgBtn = useRef(null)

useGSAP(()=>{
  gsap.from(SDG.current, {
    x : -150,
    duration : 2,
    opacity: 0
  })
})

const cursorSize = ()=>{
  cursorRef.current.innerHTML = "Tab"
   gsap.to(cursorRef.current,{
    scale: 3,
    backgroundColor: "#00FFFFFF"
  })
}

const defaultCursor = ()=>{
  cursorRef.current.innerHTML = ""
  gsap.to(cursorRef.current,{
    scale: 1,
    backgroundColor : "#172554"
  })
}

// useGSAP(()=>{
// sdgBtn.current.addEventListener('mouseenter', ()=>{
//   gsap.to(cursorRef.current,{
//     x:1000
//   })
// })
//   })


  const data = {
    labels: ["Yes", "NO"],
    datasets: [{
      label: "poll",
      data: [3, 6],
      backgroundColor: ["orange", "blue"],
      borderColor: ["white"]
    }]
  }

  const data2 = {
    labels: ["red", "purple", "blue"],
    datasets: [{
      label: "poll",
      data: [3, 6, 2],
      backgroundColor: ["red", "blue", "purple"],
      borderColor: ["white"]
    }]
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', padding: '1vh 7vw' }}>
        <div ref={SDG} style={{ flex: 1, padding: '0px 20px', position: 'relative' }}>
          <div className='flex flex-col absolute -top-44 start-10 text-5xl font-extrabold tracking-wide'>
            <h1>SUSTAINABLE</h1>
            <h1>DEVELOPMENT</h1>
            <h1>GOELS</h1>
          </div>

          <div className='absolute -top-4 px-6'>
            <h3 className='pb-2 text-xl font-bold'>"Our Goals, Our Planet, Our Future"</h3>
            <p className=' text-lg'>This text emphasizes collective responsibility and future-focused thinking.</p>
            <button ref={sdgBtn} onMouseEnter={cursorSize} onMouseLeave={defaultCursor} className='mt-4 px-6 py-1 rounded-full border-blue-950 border-solid border-2 ms-16' >Know More</button>
          </div>
          <div className='absolute top-52 px-6'>
            <h3 className='pb-2 text-xl font-bold'>"Our Goals, Our Planet, Our Future"</h3>
            <p className=' text-lg'>This text emphasizes collective responsibility and future-focused thinking.</p>
            <button ref={sdgBtn} onMouseEnter={cursorSize} onMouseLeave={defaultCursor} className='mt-4 px-6 py-1 rounded-full border-blue-950 border-solid border-2 ms-16' >Know More</button>
          </div>
      
        </div>
        <div style={{ flex: 2, marginTop: '38vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Globe />
          <div>
            <h3 className='pb-2 text-3xl font-bold text-center '>"Innovate, Implement, Sustain"</h3>
            <p className=' text-xl text-center px-14'>This option focuses on the process of achieving sustainability—through innovation, implementation, and ongoing commitment.</p>
          </div>
        </div>
        <div style={{ flex: 0, padding: '20px', marginTop: '34vh'}}>

          <div>
            <Doughnut
              data={data}
            />
            <p className='py-4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur et incidunt magni eos pariatur ex.</p>
          </div>

          <div className='mt-14 w-44 ms-14'>
            <Doughnut
              data={data2}
            />
          </div>




        </div>
      </div>
    </>
  )
}

export default Home
