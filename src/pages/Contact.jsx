import React from 'react'
import feedback from '../Images/feedback.avif'
import Accordian from '../components/Accordian'
const Contact = () => {
  return (
    <div className='px-32  box-content'>

      <div className='group flex justify-evenly items-center py-5
     '>
        <li className='text-xl font-semibold hover:cursor-pointer hover:underline underline-offset-8
        transform hover:scale-150 transition-all duration-150 ease-in-out group-hover:bg-blue-200 p-3 rounded
        hover:border-blue-400 hover:border-2 text-bold'>Email:-sdgoal@gmail.com</li>
        <li className='text-xl font-semibold hover:cursor-pointer hover:underline underline-offset-8
        tranform hover:scale-150 transition-all duration-150 ease-in-out group-hover:bg-red-200 p-3 rounded
        hover:border-red-400 hover:border-2 text-bold'>Contactus:-1010-2525-18</li>
      </div>

      <div className='flex justify-center items-center'>

        <form action="https://formsubmit.co/rajdhaki5@gmail.com" method="POST" className=' rounded border-solid border-blue-800 border-4 w-2/5'>

          <div className='flex items-center justify-center py-6 w-full bg-slate-300 border-black border-solid border-b-2'>
            <p className='text-center text-5xl w-full font-bold uppercase '>Feedback Form</p>
          </div>

          <div className=' bg-white text-center pb-4 w-full'>

            <div className='flex items-center justify-center w-full'>
              <label className=' relative m-4 w-6/12 '>
                <input required name='First Name' type="text" className='w-6/12 px-6 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600
                            duration-200 peer focus:border-teal-600 bg-inherit '/>
                <span className='absolute left-0 px-2 text-lg uppercase tracking-wide peer-focus:text-teal-500 pointer-events-none
                            duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-'>Firstname</span>
              </label>
              <label className='relative m-4 w-6/12 '>
                <input required name='Last Name' type="text" className=' w-6/12 px-6 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600
                            duration-200 peer focus:border-teal-600 bg-inherit'/>
                <span className='absolute left-0 px-2 text-lg uppercase tracking-wide peer-focus:text-teal-500 pointer-events-none
                            duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-'>Lastname</span>
              </label>
            </div>

            <div className='flex items-center justify-center w-full'>
              <label className='relative m-4  w-full'>
                <input required name='Email' type="email" className='w-full px-12 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600
                            duration-200 peer focus:border-teal-600 bg-inherit '/>
                <span className='absolute left-0 px-2 text-lg uppercase tracking-wide peer-focus:text-teal-500 pointer-events-none
                            duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-'>Your Email</span>
              </label>
            </div>

            <div className='flex items-center justify-center w-full'>
              <label className='relative m-4 w-full'>
                <textarea required name='Feedback' type="text" className=' w-full px-16 py-12 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600
                            duration-200 peer focus:border-teal-600 bg-inherit '/>
                <span className='absolute left-0 px-2 text-lg uppercase tracking-wide peer-focus:text-teal-500 pointer-events-none
                            duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-'>Your Feedback</span>
              </label>
            </div>


            <button type="submit" className=' bg-slate-300
                    px-6 py-2 rounded-xl  uppercase font-bold text-lg border-2 border-solid border-teal-800 hover:text-teal-700 hover:border-black'>Submit</button>


          </div>

        </form>

        <div>
          <img src={feedback} alt="none" />
        </div>




      </div>

      <div>
        <p className='text-3xl underline transition-all duration-300 ease-in-out text-center tracking-widest 
          text-blue-950 p-1  
          font-extrabold my-10'>Frequently Asked Questions</p>
      </div>

      <div className='w-full  '>
        <div className=''>
          <div className='p-4 bg-slate-300 rounded-lg'>
            <Accordian question='What is your Biggest Achievement till now' answer='Quaerat libero dolores eius, fuga perferendis ipsam placeat pariatur cum voluptate excepturi quisquam? Dolorum aut natus amet ipsa, nam ab! Modi harum quo, eveniet praesentium totam quod est beatae molestiae cumque distinctio necessitatibus omnis iure vitae voluptates, tenetur autem architecto, temporibus expedita eum culpa deserunt animi. Unde deleniti a veritatis ad minus voluptatum odit, aspernatur maxime tenetur! Alias cupiditate perspiciatis aliquam quam placeat, ab illum neque ea excepturi aspernatur rem possimus, nostrum ipsam ullam recusandae repellendus ut quaerat corrupti eius nulla saepe quo. Voluptas laudantium atque nam quisquam odio, laborum labore totam quod, ducimus adipisci quia voluptates. Hic at ratione enim recusandae voluptate expedita placeat pariatur.' />

            <Accordian question='Objective and Goal' answer='i a veritatis ad minus voluptatum odit, aspernatur maxime tenetur! Alias cupiditate perspiciatis aliquam quam placeat, ab illum neque ea excepturi aspernatur rem possimus, nostrum ipsam ullam recusandae repellendus ut quaerat corrupti eius nulla saepe quo. Voluptas laudantium atque nam quisquam odio' />

            <Accordian question='Success Factors' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ispum color rusciprit?' />

            <Accordian question='Future Planning' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ispum color rusciprit?um dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem' />
          </div>
        </div>
      </div> 
    </div>

  )
}
export default Contact
