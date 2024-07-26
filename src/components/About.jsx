import React from 'react'
import bg from '../Images/aboutbg.jpeg'
const About = () => {
  return (
    <>

        <div className='w-full bg-cover bg-fixed'>
        <img src={bg} alt="none" className='w-full max-h-96' />
        </div>

        <div className='mt-6 p-4'>
          <p className='text-center font-sans font-extrabold text-6xl uppercase text-blue-950 cursor-pointer tracking-wide hover:text-green-600
            transform hover:scale-105 transition-all duration-150 ease-in-out  hover:underline underline-offset-8 hover:decoration-green-600'>Welcome to our path story</p>
        </div>
        
        <div className='flex items-center m-6'>
          <div className='p-2 m-2'>
          <p className='font-sans text-justify font-bold text-xl text-blue-950 tracking-tight cursor-pointer hover:text-green-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium modi veniam, placeat, a reiciendis voluptatem explicabo eveniet perferendis ad non consectetur velit repellendus aliquid corrupti neque. Natus, dolor inventore, quas dolore facere aliquid fuga, tempore nostrum cumque cupiditate voluptatem tempora doloribus! Doloremque similique officiis deserunt non consectetur dolore, repellendus molestiae ipsa, omnis mollitia aspernatur obcaecati error veritatis porro quasi cupiditate eius expedita voluptate sunt, asperiores ab itaque? Culpa, laboriosam.</p>
          </div>
          <div className='p-2 m-2'>
          <p className='font-sans text-justify font-bold text-xl text-blue-950 tracking-tight cursor-pointer hover:text-green-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium modi veniam, placeat, a reiciendis voluptatem explicabo eveniet perferendis ad non consectetur velit repellendus aliquid corrupti neque. Natus, dolor inventore, quas dolore facere aliquid fuga, tempore nostrum cumque cupiditate voluptatem tempora doloribus! Doloremque similique officiis deserunt non consectetur dolore, repellendus molestiae ipsa, omnis mollitia aspernatur obcaecati error veritatis porro quasi cupiditate eius expedita voluptate sunt, asperiores ab itaque? Culpa, laboriosam.</p>
        </div>
        </div>
       
    </>
  )
}

export default About
