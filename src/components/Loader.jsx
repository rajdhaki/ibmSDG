import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='h-14 w-14 border-8 border-blue-500 border-r-transparent rounded-full animate-spin'></div>
        <p className='font-bold mx-2'>Loading</p>
        </div>
  )
}

export default Loader