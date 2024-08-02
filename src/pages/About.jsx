import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg from '../Images/aboutbg.jpeg'
import bgtwo from '../Images/about2.jpeg'
import bgthree from '../Images/about3.jpg'
import bgfour from '../Images/about4.jpg'
const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
   <div>

          <div className='m-10'>
            <Carousel responsive={responsive}>

            <div style={{border:"2px solid black",height:"50vh", width:"30vw",backgroundColor:"lightgrey",cursor:"pointer"}}>
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
        </div>

        <div>
          <p className='text-center text-blue-800 text-4xl uppercase hover:text-amber-900 hover:underline underline-offset-8 
          p-1 m-7 font-serif font-extrabold hover:scale-150 transition-all duration-200 ease-in-out'>Summary</p>
        </div>

          <div className='bg-gray-300 hover:bg-gray-400 h-1/5 w-4/5 block m-auto shadow-lg shadow-zinc-800/50'>
            <p className='text-justify font-semibold font-sans text-blue-800 overflow-hidden hover:text-red-900 m-3 p-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis iusto veniam voluptate doloremque accusamus, quia sed at! Fugit commodi voluptates impedit recusandae mollitia dolor magni culpa eos ratione eius. Nam dolore porro laborum ipsam pariatur possimus, quod eos fugit. Nulla consectetur, nesciunt corporis distinctio culpa unde ullam, enim animi similique numquam accusantium inventore. Laboriosam laudantium illum voluptates omnis earum mollitia nihil quisquam aperiam similique ratione iusto, optio accusantium quibusdam assumenda quaerat rem vero aut a. Temporibus ratione voluptas quas tempora pariatur, debitis repellat iure dolore ipsa, magni excepturi recusandae iste ipsum soluta unde?
              
              <ul className='list-decimal m-10 text-justify'>
                <li className='m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat ipsam molestias ducimus voluptates eveniet ipsum dolorem tenetur rem sequi, molestiae doloribus assumenda modi, voluptatum sit minima cum cumque quaerat!</li>
                <li className='m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, atque fugit. Dolore maxime laborum repellendus aut obcaecati nostrum nulla sunt optio ratione, voluptates ad accusamus est iusto odit voluptatibus consequuntur? Harum saepe minima, itaque fuga minus quia aspernatur veritatis aliquam alias quae magnam mollitia nulla ducimus sequi tenetur qui magni.</li>
              </ul>

              distinctio, officiis error neque officia. Excepturi nihil vel qui. Placeat beatae voluptatibus optio explicabo non doloremque tempora itaque dolore sapiente rerum enim repudiandae possimus odio consectetur quidem delectus maxime vitae pariatur aliquid ipsa excepturi laborum? Est, nisi modi laudantium, delectus obcaecati eius doloribus possimus iusto neque doloremque reiciendis? Adipisci, ipsum nihil tempora possimus, vitare culpa molestias vel eos cum provident facere earum nisi quam nobis eaque esse, aliquam maxime reprehenderit odio, aperiam mollitia, error quidem. Aliquid, adipisci aperiam nostrum perspiciatis explicabo corporis error mollitia quod fuga cum eos possimus quia similique suscipit magni eligendi labore dolorum sed enim ea natus, eius unde. Temporibus quasi nihil quae, deleniti quibusdam et repellendus, nostrum quia tempora similique ad.Lorem ipsum dolor sit,amet consectetur adipsicsing elit.</p>            
        </div>

        <div className='shadow-lg shadow-zinc-900/50 h-full w-3/5 block m-auto'>
          <p className='text-center text-3xl text-blue-800 hover:underline underline-offset-8 tracking-wide font-extrabold
          hover:text-amber-900 uppercase m-8 p-4 hover:scale-150 transition-all duration-200 ease-in-out'>Objective</p>
          <p className='bg-gray-300 hover:bg-gray-400 w-fit h-80 overflow-scroll block m-auto text-justify p-8 shadow-lg shadow-zinc-900/50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis itaque expedita aperiam eligendi saepe neque ea nesciunt dolorem. Ab cumque, maxime iste accusamus pariatur eligendi ipsam modi nostrum ratione quae fugiat nobis harum exercitationem explicabo ut eius quos officiis voluptas nesciunt earum, dolorum facilis.
          <ul className='m-4 p-3 list-disc'>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ispum color rusciprit?</li>
          </ul>
          
          
          Quaerat libero dolores eius, fuga perferendis ipsam placeat pariatur cum voluptate excepturi quisquam? Dolorum aut natus amet ipsa, nam ab! Modi harum quo, eveniet praesentium totam quod est beatae molestiae cumque distinctio necessitatibus omnis iure vitae voluptates, tenetur autem architecto, temporibus expedita eum culpa deserunt animi. Unde deleniti a veritatis ad minus voluptatum odit, aspernatur maxime tenetur! Alias cupiditate perspiciatis aliquam quam placeat, ab illum neque ea excepturi aspernatur rem possimus, nostrum ipsam ullam recusandae repellendus ut quaerat corrupti eius nulla saepe quo. Voluptas laudantium atque nam quisquam odio, laborum labore totam quod, ducimus adipisci quia voluptates. Hic at ratione enim recusandae voluptate expedita placeat pariatur.</p>
        </div>

        <div className='mt-14'>
          <p className='text-center text-blue-900 hover:text-amber-900 text-4xl font-extrabold hover:underline underline-offset-8
          hover:scale-150 transition-all duration-200 ease-in-out m-16 uppercase'>About Team Member</p>

            <div className='m-14'>
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
          </div>
      

        </div>
   </div>
  )
}

export default About
