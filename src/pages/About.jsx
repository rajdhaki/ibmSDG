import React from 'react'
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg from '../Images/aboutbg.jpeg'
import bgtwo from '../Images/about2.jpeg'
import bgthree from '../Images/about3.jpg'
import bgfour from '../Images/about4.jpg'
const About = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  return (
   <div className='px-32'>

          {/* <div className='m-10'>
            <Carousel responsive={responsive}>

            <div style={{border:"1px solid black",height:"50vh", width:"30vw",backgroundColor:"lightgrey",cursor:"pointer", borderRadius: "55px"}}>
              <img src={bg} alt="Image1" style={{height:"50vh", width:"30vw"}}/>
            </div>

            <div style={{border:"2px solid black",height:"50vh", width:"30vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
              <img src={bgtwo} alt="Image1" style={{height:"50vh", width:"30vw"}}/>
            </div>

            <div style={{border:"2px solid black",height:"50vh", width:"30vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
              <img src={bgthree} alt="Image1" style={{height:"50vh", width:"30vw"}}/>
            </div>

            <div style={{border:"2px solid black",height:"50vh", width:"30vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
              <img src={bgfour} alt="Image1" style={{height:"50vh", width:"30vw"}}/>
            </div>

            <div style={{border:"2px solid black",height:"50vh", width:"30vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
              <img src={bgtwo} alt="Image1" style={{height:"50vh", width:"30vw"}}/>
            </div>

        </Carousel>
        </div> */}

        <div className='py-7'>
          <p className=' py-2 border-b-2 border-solid border-blue-900 text-4xl uppercase font-extrabold'>Summary</p>
          
        </div>

          <div className='bg-slate-300 rounded-xl shadow-lg shadow-zinc-800/50'>
            <p className='text-justify font-semibold font-sans text-blue-800 overflow-hidden p-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis iusto veniam voluptate doloremque accusamus, quia sed at! Fugit commodi voluptates impedit recusandae mollitia dolor magni culpa eos ratione eius. Nam dolore porro laborum ipsam pariatur possimus, quod eos fugit. Nulla consectetur, nesciunt corporis distinctio culpa unde ullam, enim animi similique numquam accusantium inventore. Laboriosam laudantium illum voluptates omnis earum mollitia nihil quisquam aperiam similique ratione iusto, optio accusantium quibusdam assumenda quaerat rem vero aut a. Temporibus ratione voluptas quas tempora pariatur, debitis repellat iure dolore ipsa, magni excepturi recusandae iste ipsum soluta unde?
              
              <ul className='list-decimal p-8 text-justify'>
                <li className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat ipsam molestias ducimus voluptates eveniet ipsum dolorem tenetur rem sequi, molestiae doloribus assumenda modi, voluptatum sit minima cum cumque quaerat!</li>
                <li className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, atque fugit. Dolore maxime laborum repellendus aut obcaecati nostrum nulla sunt optio ratione, voluptates ad accusamus est iusto odit voluptatibus consequuntur? Harum saepe minima, itaque fuga minus quia aspernatur veritatis aliquam alias quae magnam mollitia nulla ducimus sequi tenetur qui magni.</li>
              </ul>

              distinctio, officiis error neque officia. Excepturi nihil vel qui. Placeat beatae voluptatibus optio explicabo non doloremque tempora itaque dolore sapiente rerum enim repudiandae possimus odio consectetur quidem delectus maxime vitae pariatur aliquid ipsa excepturi laborum? Est, nisi modi laudantium, delectus obcaecati eius doloribus possimus iusto neque doloremque reiciendis? Adipisci, ipsum nihil tempora possimus, vitare culpa molestias vel eos cum provident facere earum nisi quam nobis eaque esse, aliquam maxime reprehenderit odio, aperiam mollitia, error quidem. Aliquid, adipisci aperiam nostrum perspiciatis explicabo corporis error mollitia quod fuga cum eos possimus quia similique suscipit magni eligendi labore dolorum sed enim ea natus, eius unde. Temporibus quasi nihil quae, deleniti quibusdam et repellendus, nostrum quia tempora similique ad.Lorem ipsum dolor sit,amet consectetur adipsicsing elit.</p>            
        </div>

        <div className='  '>
          <p className=' text-3xl text-blue-800  tracking-wide font-extrabold
           uppercase my-4 py-3 border-b-2 border-solid border-blue-900 '>Objective</p>
          <div className='bg-slate-300 shadow-lg shadow-zinc-900/50 py-9 '>
            <p className='text-justify'></p>
          <ul className='m-4 p-3 list-disc'>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ispum color rusciprit?</li>
          </ul>
          </div>
        </div>

        <div className='mt-14'>
          <p className=' border-b-2 border-solid border-blue-900 py-3 text-blue-900  text-4xl font-extrabold 
           my-16 uppercase'>About Team Member</p>

            {/* <div className='m-14'>
            <Carousel responsive={responsive}>

            <div style={{border:"2px solid black",height:"42vh", width:"20vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
            <img src={bg} alt="Image1" style={{height:"20vh", width:"20vw"}}/>
            <h2 style={{textAlign:"center",color:'black',fontSize:"18px",fontFamily:"cursive"}}>Member 1</h2>
            <p style={{textAlign:"center",color:'black'}}>Raj</p>
            <p style={{textAlign:"center",color:'black'}}>Some description about the yourself</p>
            </div>

          <div style={{border:"2px solid black",height:"42vh", width:"20vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
            <img src={bgtwo} alt="Image1" style={{height:"20vh", width:"20vw"}}/>
            <h2 style={{textAlign:"center",color:'black',fontSize:"18px",fontFamily:"cursive"}}>Member 2</h2>
            <p style={{textAlign:"center",color:'black'}}>Jatin</p>
            <p style={{textAlign:"center",color:'black'}}>Some description about the yourself</p>
          </div>

          <div style={{border:"2px solid black",height:"42vh", width:"20vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
            <img src={bgthree} alt="Image1" style={{height:"20vh", width:"20vw"}}/>
            <h2 style={{textAlign:"center",color:'black',fontSize:"18px",fontFamily:"cursive"}}>Member 3</h2>
            <p style={{textAlign:"center",color:'black'}}>Sneha</p>
            <p style={{textAlign:"center",color:'black'}}>Some description about the yourself</p>
          </div>

          <div style={{border:"2px solid black",height:"42vh", width:"20vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
            <img src={bgfour} alt="Image1" style={{height:"20vh", width:"20vw"}}/>
            <h2 style={{textAlign:"center",color:'black',fontSize:"18px",fontFamily:"cursive"}}>Member 4</h2>
            <p style={{textAlign:"center",color:'black'}}>Divyang</p>
            <p style={{textAlign:"center",color:'black'}}>Some description about the yourself</p>
          </div>

          <div style={{border:"2px solid black",height:"42vh", width:"20vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
            <img src={bgtwo} alt="Image1" style={{height:"20vh", width:"20vw"}}/>
            <h2 style={{textAlign:"center",color:'black',fontSize:"18px",fontFamily:"cursive"}}>Member 5</h2>
            <p style={{textAlign:"center",color:'black'}}>Manoj</p>
            <p style={{textAlign:"center",color:'black'}}>Some description about the yourself</p>
          </div>

          <div style={{border:"2px solid black",height:"42vh", width:"20vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
            <img src={bgthree} alt="Image1" style={{height:"20vh", width:"20vw"}}/>
            <h2 style={{textAlign:"center",color:'black',fontSize:"18px",fontFamily:"cursive"}}>Member 6</h2>
            <p style={{textAlign:"center",color:'black'}}>Jasleen Kaur</p>
            <p style={{textAlign:"center",color:'black'}}>Some description about the yourself</p>
          </div>

          </Carousel>
          </div> */}
      

        </div>
   </div >
  )
}

export default About
