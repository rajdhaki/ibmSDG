import React from 'react'
import feedback from '../Images/feedback.avif'
import Accordian from '../components/Accordian'
const Contact = () => {
  return (
<div className='p-0 m-0 box-content'>
      
    <div className='group flex justify-evenly items-center m-3 p-5 hover:bg-green-200 hover:rounded-xl hover:border-solid
     hover:border-2 hover:border-white'>
        <li className='text-xl font-semibold hover:cursor-pointer hover:underline underline-offset-8
        transform hover:scale-150 transition-all duration-150 ease-in-out group-hover:bg-blue-200 p-3 rounded
        hover:border-blue-400 hover:border-2'>Email:-sdgoal@gmail.com</li>
        <li className='text-xl font-semibold hover:cursor-pointer hover:underline underline-offset-8
        tranform hover:scale-150 transition-all duration-150 ease-in-out group-hover:bg-red-200 p-3 rounded
        hover:border-red-400 hover:border-2'>Contactus:-1010-2525-18</li>
    </div>
 
         <div className='flex justify-items-center items-center'>

    <div className='block m-auto rounded border-solid border-teal-600 border-4 h-2/5 w-2/5'>
        
        <div className='flex items-center justify-center h-32 w-auto bg-teal-400 border-black border-solid border-b-2'>
            <p className='text-center text-6xl  font-bold uppercase text-white'>Feedback Form</p>
        </div>

        <div className='h-auto w-auto bg-white text-center botton-b-3 pb-4'>

             <div className='flex h-auto items-center justify-center'> 
                        <label className='relative m-4 top-3'>
                            <input required type="text" className='px-6 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600
                            duration-200 peer focus:border-teal-600 bg-inherit '/>
                            <span className='absolute left-0 px-2 text-lg uppercase tracking-wide peer-focus:text-teal-500 pointer-events-none
                            duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-'>Firstname</span>
                        </label>
                        <label className='relative m-4 top-3'>
                            <input required type="text" className='px-6 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600
                            duration-200 peer focus:border-teal-600 bg-inherit'/>
                            <span className='absolute left-0 px-2 text-lg uppercase tracking-wide peer-focus:text-teal-500 pointer-events-none
                            duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-'>Lastname</span>
                        </label>
              </div>      
            
              <div className='flex h-auto items-center justify-center'> 
                        <label className='relative m-4 top-3'>
                            <input required type="text" className='px-12 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600
                            duration-200 peer focus:border-teal-600 bg-inherit '/>
                            <span className='absolute left-0 px-2 text-lg uppercase tracking-wide peer-focus:text-teal-500 pointer-events-none
                            duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-'>Your Email</span>
                        </label>
              </div>  

               <div className='flex h-auto items-center justify-center'> 
                        <label className='relative m-4 top-3'>
                            <textarea required type="text" className='px-16 py-12 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600
                            duration-200 peer focus:border-teal-600 bg-inherit '/>
                            <span className='absolute left-0 px-2 text-lg uppercase tracking-wide peer-focus:text-teal-500 pointer-events-none
                            duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-'>Your Feedback</span>
                        </label>
              </div>      
            

                    <button type="submit" className='block m-auto bg-teal-500
                    px-6 py-2 rounded-xl text-white uppercase font-bold text-lg border-2 border-solid border-teal-800 hover:text-teal-700 hover:border-black'>Submit</button>
           

        </div>

        </div>

        <div> 
          <img src={feedback} alt="none" />
        </div>




      </div>    

        <div>
          <p className='text-3xl hover:scale-150 transition-all duration-300 ease-in-out text-center tracking-widest 
          text-blue-950 p-1  hover:underline underline-offset-8 hover:text-teal-600  
          font-extrabold m-10'>Frequently Asked Questions</p>
        </div>

    <div className='w-full h-auto bg-gradient-to-r from-teal-400 to-teal-700'>
              <div className='p-7 m-7'>
                  <div className='p-4 bg-gray-200 rounded-lg'>
                  <Accordian question='What is your Biggest Achievement till now' answer='Quaerat libero dolores eius, fuga perferendis ipsam placeat pariatur cum voluptate excepturi quisquam? Dolorum aut natus amet ipsa, nam ab! Modi harum quo, eveniet praesentium totam quod est beatae molestiae cumque distinctio necessitatibus omnis iure vitae voluptates, tenetur autem architecto, temporibus expedita eum culpa deserunt animi. Unde deleniti a veritatis ad minus voluptatum odit, aspernatur maxime tenetur! Alias cupiditate perspiciatis aliquam quam placeat, ab illum neque ea excepturi aspernatur rem possimus, nostrum ipsam ullam recusandae repellendus ut quaerat corrupti eius nulla saepe quo. Voluptas laudantium atque nam quisquam odio, laborum labore totam quod, ducimus adipisci quia voluptates. Hic at ratione enim recusandae voluptate expedita placeat pariatur.'/>

                  <Accordian question='Objective and Goal' answer='i a veritatis ad minus voluptatum odit, aspernatur maxime tenetur! Alias cupiditate perspiciatis aliquam quam placeat, ab illum neque ea excepturi aspernatur rem possimus, nostrum ipsam ullam recusandae repellendus ut quaerat corrupti eius nulla saepe quo. Voluptas laudantium atque nam quisquam odio'/>

                  <Accordian question='Success Factors' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ispum color rusciprit?'/>
                  
                  <Accordian question='Future Planning' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ispum color rusciprit?um dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem ium dolor sit amet consectetur adipisicing elit.lorem'/>
                  </div>
              </div>
    </div>

</div>

  )
}
export default Contact
