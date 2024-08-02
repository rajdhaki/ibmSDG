import React,{useState} from 'react'

const Accordian = ({question,answer}) => {
    const[accordianOpen,setAccordianOpen] = useState(false)
  return (
    <div className='py-2'>
      <button onClick={()=> setAccordianOpen(!accordianOpen)} className='flex justify-between w-full'>
        <span>{question}</span>
        {accordianOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordianOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0] opacity-0'
        }`}>
        <div className='overflow-hidden'>
            {answer}
        </div>
      </div>
    </div>
  )
}

export default Accordian
