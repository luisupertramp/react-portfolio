import logo from './logo.svg';
import './App.css';

// Components
import SkillCard from './components/SkillCard';

// Icons
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import support from "./media/support.png";
import ba from "./media/ba.png";
import dev from "./media/dev.png";

// Certs
import pythonCourse from "./media/Python.png"
import awsCourse from "./media/Cloud_Practicioner_Essentials.png"
import awsWellArch from "./media/Well-Architected-Framework.png"

// Images
import memoji from './media/memoji_me.png';
import gitHub from "./media/github.png"

import { useState } from 'react';

function App() {
  
  const[darkMode, setDarkMode] = useState(true)
  
  return (
    <div className="App">
      <div className={darkMode ? 'dark' : '' }>

        <head>
          <title>Luis Pedroza Online Resume</title>
          <meta name="description" content="Luis Pedroza Resume. Software engineer." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </head>

        <main className=' bg-white px-10 text-black md:px-20 dark:bg-neutral-800 dark:text-white'>

          <section className=' min-h-screen'>
            {/* Navigation bar */}
            <nav className='py-10 flex justify-between dark:text-zinc-200'>
              <h1 className=' text-xl font-burtons'>My resume</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
                <li><a className=' bg-gradient-to-b from-cyan-500 to-cyan-600 dark:from-green-600 dark:to-green-700 text-white px-4 py-2 rounded ml-8' href="#">
                  PDF version
                </a></li>
              </ul>
            </nav>

            {/* Personal info */}
            <div className=' text-center p-8 '>
              <h2 className=' text-5xl py-2 text-teal-500 dark:text-green-500 font-medium md:text-6xl'>Luis Pedroza</h2>
              <h3 className='text-2xl py-2 md:text-3xl'>Software engineer</h3>
              <p className=' mx-auto text-md pt-5 leading-8 text-gray-800  dark:text-zinc-200 md:text-xl '>
                Hi, welcome to my online resume. I am a software engineer passionate about technology and innovation. I enjoy learning new things all the time. My experience in application development and support roles has led me to prepare for Cloud Computing.
                <br/>
                Listening to music, taking long walks and hanging out with my friends are a few of my favorite activities to do. 
              </p>
            </div>

            {/* Avatar */}
            <div className='relative mx-auto bg-gradient-to-b from-teal-500  dark:from-green-500 rounded-full w-60 h-60 mt-1 '>
              <img src={memoji} width={180} height={180} className="mx-auto pt-3"/>
            </div>

            {/* Icons */}
            <div className=' my-8 text-5xl flex justify-center gap-16  text-gray-600  dark:text-zinc-200' >
              <a href="https://www.linkedin.com/in/luispedrozaa/" target={'_blank'}><AiFillLinkedin className='transition transform hover:scale-150'/></a>
              <a href="https://github.com/luisupertramp" target={'_blank'}><AiFillGithub className='transition transform hover:scale-150'/></a>
            </div>
          </section>

          <section className='mt-10'>

            {/* Skills */}
            <div className='pb-24'>
              <h3 className='text-3xl py-5'>Skills</h3>
              
              <div className='flex w-full justify-around'>
                <SkillCard name="React" exp={3} know={2} />
                <SkillCard name="JS, HTML & CSS" exp={3} know={3}/>
              </div>
              <div className='flex w-full justify-around'>
                <SkillCard name="Material UI" exp={2} know={2}/>
                <SkillCard name="CSS" exp={3} know={3}/>
              </div>
              <div className='flex w-full justify-around'>
                <SkillCard name="Linux" exp={2} know={4}/>
                <SkillCard name="Git" exp={3} know={2}/>
              </div>
              <div className='flex w-full justify-around'>
                <SkillCard name="Python" exp={3} know={4}/>
                <SkillCard name="AWS" exp={1} know={3}/>
              </div>
                
            </div>
            
            {/* Professional experience */}
            <div>
              <h3 className='text-3xl py-1'>Professional experience</h3>
              <p className=' text-md py-5 leading-8 text-gray-800  dark:text-zinc-200'>
                Since 2017, I've been working mainly in 3 roles: <b>Support Engineer</b>, <b>Business Analayst</b> and <b>Web developer.</b> <br/>
                <span className=' text-xs text-teal-500 dark:text-green-500 italic font-semibold'>{'('}For more information about dates and companies, feel free to download my PDF resume, from the button at the top of this page{')'}</span>
              </p>
            </div>

            {/* Cards */}
            <div className="lg:flex gap-10">

              {/* Support Engineer */}
              <div className="text-center shadow-lg p-10 rounded my-10  dark:bg-neutral-600 flex-1">
                <img className='mx-auto' src={support} width={100} height={100} />

                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Support Engineer
                </h3>

                <p className="py-2">
                  L2 support engineer with Windows Server environments.
                  Working with GE engineers from around the world, I was able to develop efficient international communication, customer oriented service and the ability to work with multidisciplinary teams.
                </p>

                <h4 className="py-4 text-teal-600 dark:text-green-500 dark:font-semibold">Tools I used</h4>

                <p className="text-gray-800 dark:text-zinc-200 py-1">Ticketing system management</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Monitoring with Solar Winds</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Windows Server administration</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Basic Fortinet and Cisco configuration</p>
              </div>

              {/* Business Analyst */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-neutral-600 flex-1">
                <img className='mx-auto' src={ba} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Business Analyst 
                </h3>
                <p className="py-2">
                  Working in the EHS sector as a business analyst, I was able to understand the needs of our customers by gathering information for customization projects, testing features in deployment sessions and then the creation of proper documentation, among many other duties.
                </p>

                <h4 className="py-4 text-teal-600 dark:text-green-500 dark:font-semibold">Daily Activites</h4>

                <p className="text-gray-800 dark:text-zinc-200 py-1">Gathering requirements</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Testing implementations</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Validaton of bugs and errors</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">SQL queries for custom reports</p>
              </div>

              {/* Front-end Developer */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-neutral-600 flex-1">
                <img className='mx-auto' src={dev} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Web Developer</h3>
                <p className="py-2">
                  Working mainly as front-end developer, I've been able to work with different technologies such as Adobe ColdFusion, SQL Server, jQuery, Bootstrap and Agile methodologies like Scrum.
                </p>

                <h4 className="py-4 text-teal-600 dark:text-green-500 dark:font-semibold">Technologies I used</h4>

                <p className="text-gray-800 dark:text-zinc-200 py-1">React</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Material UI</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Sass {'('}Styling sheets{')'}</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Git</p>
                <p className="text-gray-800 dark:text-zinc-200 py-1">Figma</p>
              </div>
            </div>
          </section>

          {/* About me */}
          <section>
            <div>
              <h3 className='text-3xl py-1 '>About me</h3>
              <p className=' text-md py-5 leading-8 text-gray-800 dark:text-zinc-200'>
                I am 27 years old, Mexican software engineer. Graduated from the <a className='underline text-cyan-600 dark:text-green-500' href="https://upa.edu.mx">Universidad Politécnica de Aguascalientes</a>, where I studied the program "Information Strategic Systems Engineering" and got an specialization in Networks and Telecommunications, in 2017.
                I enjoy listening to audiobooks, photography, hiking and spending some time in nature.
                I am in the process of learning all necessary skills to become a DevOps egineer, so if you know of any position related to that field, or have any other inquirie, feel free to reach me at <a href="mailto:luisfpedrozaa@gmail.com" className='underline text-cyan-600 dark:text-green-500'>luisfpedrozaa@gmail.com</a> or DM me via LinkedIn for a quicker reply.
              </p>
            </div>

          </section>

          {/* Courses */}
          <section className='mt-10'>
            <div>
              <h3 className='text-3xl py-1 '>Courses and Certifications</h3>
              <p className=' text-md py-5 leading-8 text-gray-800 dark:text-zinc-200'>
                I am very glad <b>(and proud of myself)</b> to show some of the courses that I've been taking in the last few months, here is a brief summary:
              </p>
            </div>

            <div className='flex flex-col gap-10 pb-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <img width={'100%'} height={'100%'} src={pythonCourse}/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img width={'100%'} height={'100%'} src={awsCourse}/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img width={'100%'} height={'100%'} src={awsWellArch}/>
              </div>
            </div>
          </section>

          <section>
            <div>
            <h3 className='text-3xl py-1 '>Checkout my GitHub!</h3>
              <p className=' text-md py-5 leading-8 text-gray-800 dark:text-zinc-200'>
                I'm always learning new things. Here you will find some code challenges from HackerRank and code exercises from courses online :)
              </p>
            </div>

            <div className='pb-8'>
              <a href="https://github.com/luisupertramp" target={'_blank'}><img src={gitHub} className='rounded-lg transition transform hover:scale-105' /></a>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
