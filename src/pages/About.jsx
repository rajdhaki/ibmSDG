import React from "react";
// import Carousel from 'react-multi-carousel';
import ProfileCard from "../components/ProfileCard";
import "react-multi-carousel/lib/styles.css";
import bg from "../Images/aboutbg.jpeg";
import bgtwo from "../Images/about2.jpeg";
import bgthree from "../Images/about3.jpg";
import bgfour from "../Images/about4.jpg";
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
    <div className="px-32">
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

      <div className="py-7">
        <p className=" py-2 border-b-2 border-solid border-blue-900 text-4xl uppercase font-extrabold">
          Summary
        </p>
        <p>
          Sustainable development focuses on meeting the needs of the present
          without compromising the ability of future generations to meet their
          own needs. It is built on three key pillars: environmental protection,
          social equity, and economic growth. Environmental Protection
          emphasizes conserving natural resources, reducing pollution, and
          promoting biodiversity. Social Equity ensures that all individuals
          have access to essential needs, such as clean water, education, and
          healthcare, while also promoting justice and inclusivity. Economic
          Growth in sustainable development aims to create long-term
          opportunities and stability without depleting natural resources. The
          concept of sustainable development advocates for a holistic approach,
          where environmental, social, and economic factors are interconnected
          and equally significant. This integrated approach drives efforts
          toward a more sustainable and equitable world.
        </p>
        <p>
          In today’s rapidly evolving world, there is an overwhelming amount of
          data and information related to global sustainability,
          country-specific metrics, real-time developments, and critical news.
          However, this information is often fragmented, difficult to access,
          and lacks a cohesive platform that integrates these diverse data
          points into a single, user-friendly interface. Individuals,
          policymakers, and organizations face challenges in staying informed
          about global and local progress on sustainability, tracking real-time
          data, and accessing reliable news and insights. The Sustainable
          Development Tracker aims to address this issue by providing a
          centralized platform that consolidates comprehensive country data,
          real-time tracking, educational content on the Sustainable Development
          Goals (SDGs), and accurate news. This platform will empower users to
          stay informed, engage with global and local issues, and make
          data-driven decisions, all while navigating an interactive and
          user-friendly interface.
        </p>
      </div>

      <div className="bg-slate-300 rounded-xl shadow-lg shadow-zinc-800/50"></div>

      <div className="  ">
        <p className="text-3xl text-blue-800  tracking-wide font-extrabold uppercase my-4 py-3 border-b-2 border-solid border-blue-900 ">
          Objective
        </p>
        <div className="bg-slate-300 shadow-lg shadow-zinc-900/50 py-9 ">
          <h1 className="text-center font-bold text-2xl">
            The project aims to achieve the following objectives:
          </h1>
          <ol className="m-4 p-3 list-disc">
            <li>
              Provide Comprehensive Country Data: Offer detailed, up-to-date
              information and statistics for various countries, enabling users
              to gain insights into global and local contexts.
            </li>
            <li>
              Enable Real-Time Data Tracking: Implement real-time monitoring and
              updates for key data points, ensuring users have access to the
              latest information on topics such as economic indicators, health
              metrics, and environmental conditions.
            </li>
            <li>
              Facilitate User Reviews and Ratings: Create a platform where users
              can share their opinions, rate content or services, and contribute
              to a community-driven feedback system.
            </li>
            <li>
              Integrate APIs for Diverse Data Access: Seamlessly connect with
              multiple external APIs to pull in various data sets, enhancing the
              platform’s ability to provide rich, diverse, and reliable
              information across different domains.
            </li>
            <li>
              Generate and Download PDF Reports: Allow users to generate
              comprehensive reports based on the data available on the platform,
              with easy-to-use options for downloading these reports in PDF
              format.
            </li>
            <li>
              Provide Accurate and Reliable News: Curate and present news that
              is fact-checked and relevant, ensuring users stay informed about
              important global and local developments.
            </li>
            <li>
              Offer Current Weather Data: Provide accurate, real-time weather
              updates for various locations, helping users stay informed about
              current and forecasted weather conditions.
            </li>
            <li>
              Deliver a Highly Interactive UI/UX: Design an intuitive,
              user-friendly interface that enhances user engagement, making it
              easy to navigate the platform, access information, and interact
              with various features.
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-14 mb-8">
        <p className=" border-b-2 border-solid border-blue-900 py-3 text-blue-900  text-4xl font-extrabold my-16 uppercase">
          About Team Member
        </p>
        <div className="grid md:grid-cols-3 grid-col-1 gap-4">
          <ProfileCard
            name="Divyang"
            description="My expertise lies in full-stack development, with proficiency in HTML, CSS,JavaScript, and backend technologies such as Node.js (Express) and MongoDB (Mongoose)."
          />
          <ProfileCard
            name="Sneha Malik"
            description="I'm Sneha, an aspiring web developer driven by curiosity and a passion for innovation. Currently, I'm deeply engaged in exploring the realm of computer applications at GGSIPU, with ambitions to evolve into a proficient full-stack developer."
          />
          <ProfileCard name="Raj Dhaki" description="" />
          <ProfileCard name="Jasleen Kaur" description="" />
          <ProfileCard name="Jatin Rawat" description="" />
          <ProfileCard name="Manoj Jaiswal" description="" />
        </div>
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
    </div>
  );
};

export default About;