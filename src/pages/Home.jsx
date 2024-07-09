import React from 'react'
import Globe from '../components/Globe'

const Home = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', padding: '1vh 4vw' }}>
        <div style={{ flex: 1, padding: '0px 20px', position: 'relative' }}>
          <div className='flex flex-col absolute -top-40 start-10 text-5xl font-extrabold'>
            <h1>SUSTAINABLE</h1>
            <h1>DEVELOPMENT</h1>
            <h1>GOELS</h1>
          </div>
          <div className='absolute  px-6'>

            <h3 className='pb-2 text-xl font-bold'>"Our Goals, Our Planet, Our Future"</h3>
            <p className=' text-lg'>This text emphasizes collective responsibility and future-focused thinking.</p>
          </div>
        </div>
        <div style={{ flex: 1, marginTop: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection:'column' }}>
          <Globe />
          <div>
          <h3 className='pb-2 text-3xl font-bold text-center'>"Innovate, Implement, Sustain"</h3>
          <p className=' text-xl text-center'>This option focuses on the process of achieving sustainability—through innovation, implementation, and ongoing commitment.</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '20px', }}>
          
        </div>
      </div>
    </>
  )
}

export default Home
