import React from 'react'
import Globe from '../components/Globe'
import Earth from '../Images/Earth.jpg'

const Index = () => {
  return (
    <>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh', padding:'1vh 4vw' }}>
          <div style={{ flex: 1, padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
                <p>This is another content area next to the globe.</p>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Globe />
            </div>
            <div style={{ flex: 1, padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
                <p>This is another content area next to the globe.</p>
            </div>
        </div>
    </>
  )
}

export default Index
