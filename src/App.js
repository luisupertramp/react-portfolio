import logo from './logo.svg';
import './App.css';

// Components
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';

// Icons
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BiAtom} from  'react-icons/bi';
import {FaReact} from 'react-icons/di';
import {HiOutlineRocketLaunch} from 'react-icons/hi2';
import {TbFileCertificate} from 'react-icons/tb';

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

        <main className=' bg-white px-10 text-black md:px-20 dark:bg-zinc-900 dark:text-white'>

          <section className=' min-h-screen'>
            {/* Navigation bar */}
            <nav className='py-10 flex justify-between dark:text-zinc-200'>
              <h1 className=' text-xl font-burtons'>My resume</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
                <li><a className=' bg-cyan-500 shadow-lg dark:bg-green-600  text-white px-4 py-2 rounded ml-8 dark:shadow-green-500/30 dark:hover:shadow-green-500/40' href="#">
                  PDF version
                </a></li>
              </ul>
            </nav>

            {/* Personal info */}
            <div className=' text-center p-8 '>
              <h2 className=' text-5xl py-2 text-cyan-500 dark:text-green-500 font-medium md:text-6xl'>Luis Pedroza</h2>
              <h3 className='text-2xl py-2 md:text-3xl'>Software engineer</h3>
              <p className=' mx-auto text-md pt-5 leading-8 text-gray-800  dark:text-zinc-200 md:text-xl '>
                Hi, there, I am a software engineer passionate about technology. I enjoy learning new things all the time.
              </p>
              <p className=' mx-auto text-md pt-5 leading-8 text-gray-800  dark:text-zinc-200 md:text-xl '>
                I'm currently in the process of learning all necessary skills to become a DevOps egineer, so if my current skills fits the requirements of a position you may know, or have any other inquirie, reach me at <a href="mailto:luisfpedrozaa@gmail.com" className='underline text-cyan-600 dark:text-green-500'>luisfpedrozaa@gmail.com</a> or DM me via LinkedIn for a quicker reply.
              </p>
            </div>

            {/* Avatar */}
            <div className='relative mx-auto bg-gradient-to-b from-cyan-500  dark:from-green-500 rounded-full w-60 h-60 mt-1 '>
              <img src={memoji} width={180} height={180} className="mx-auto pt-3"/>
            </div>

            {/* Icons */}
            <div className=' my-8 text-5xl flex justify-center gap-16  text-gray-600  dark:text-zinc-200' >
              <a href="https://www.linkedin.com/in/luispedrozaa/" target={'_blank'}><AiFillLinkedin className='transition transform hover:scale-150'/></a>
              <a href="https://github.com/luisupertramp" target={'_blank'}><AiFillGithub className='transition transform hover:scale-150'/></a>
            </div>
          </section>

          <section className='mt-10' >

            {/* Skills */}
            <div className='pb-24'>
              <h3 className='text-3xl py-5'>Skills</h3>
              <div className='flex justify-center'><BiAtom className='dark:text-green-500 text-cyan-500 h-12 w-12'/></div>
              <p className=' mx-auto text-md pt-5 leading-8 text-gray-800  dark:text-zinc-200 md:text-xl '>
                For me, an easy way to understand my skill level is by consiering two areas: <b>expertise</b> (in a job position or personal project) and <b>knowledge</b> (from courses I've taken and not necessarily apllied in the profesional field)
              </p>
              
              <div className='flex w-full justify-around mt-6'>
                <SkillCard 
                  name="React" 
                  exp={3} 
                  know={2} 
                  topics={["Components segmentation","useState", "useEffect" , "useContext"]}
                />
                <SkillCard 
                  name="JS, HTML & CSS" 
                  exp={4} know={4} 
                  topics={["DOM manipulation", "CSS frameworks and tools (sass, tailwind)" , "Transitions / animations" , "Responsive design"]}
                />
              </div>

              <div className='flex w-full justify-around'>
                <SkillCard 
                  name="Material UI" 
                  exp={2} 
                  know={2} 
                />
                <SkillCard 
                  name="SQL Server" 
                  exp={3} 
                  know={4} 
                />
              </div>

              <div className='flex w-full justify-around'>
                <SkillCard 
                  name="Linux" 
                  exp={3} 
                  know={4} 
                  topics={["Solid console handling", "File system", "VIM editor", "User accounts and groups management" , "File permissions" , "Networking", "SSH configuration" , "Task automation (crontab and anacron)" , "Basic bash shell scripting" ]}
                  shadow={true}
                />
                <SkillCard 
                  name="Python" 
                  exp={3} 
                  know={4} 
                  topics={["Dictionaries","Algorithms","Lists","Objects"]}
                />
              </div>

              <div className='flex w-full justify-around'>
                <SkillCard 
                  name="Git" 
                  exp={3} 
                  know={2} 
                />
                <SkillCard 
                  name="AWS" 
                  exp={0} 
                  know={2} 
                />
              </div>
                
            </div>
            
            {/* Professional experience */}
            <div>
              <h3 className='text-3xl py-1'>Professional experience</h3>
              <p className=' text-md py-5 leading-8 text-gray-800  dark:text-zinc-200'>
                Since 2017, I've been working mainly in 3 areas: <b>Support Engineer</b>, <b>Business Analayst</b> and <b>Web developer.</b> <br/>
                <span className=' text-xs text-cyan-500 dark:text-green-500 italic font-semibold'>{'('}For more information about dates and companies, feel free to download my PDF resume, from the button at the top of this page{')'}</span>
              </p>
            </div>

            {/* Cards */}
            <div className="lg:flex gap-10">

              {/* Support Engineer */}
              <ExperienceCard 
                image={support}
                pos="Support Engineer"
                desc={"L2 support engineer with Windows Server environments.\nWorking with GE engineers from around the world, I was able to develop efficient international communication, customer oriented service and the ability to work with multidisciplinary teams."}
                action="Tools I used"
                items={["Ticketing system management","Monitoring with Solar Winds","Windows Server administration","Basic Fortinet and Cisco configuration"]}
              />

              {/* Business Analyst */}
              <ExperienceCard 
                image={ba}
                pos="Business Analyst"
                desc={"Working in the EHS sector as a business analyst, I was able to understand the needs of our customers by gathering information for customization projects, testing features in deployment sessions and then the creation of proper documentation, among many other duties."}
                action="Daily Activites"
                items={["Gathering requirements","Testing implementations","Validaton of bugs and errors","SQL queries for custom reports"]}
              />

              {/* Front-end Developer */}
              <ExperienceCard 
                image={dev}
                pos="Web Developer"
                desc={" Working mainly as front-end developer, I've been able to work with different technologies such as Adobe ColdFusion, SQL Server, jQuery, Bootstrap and Agile methodologies like Scrum."}
                action="Technologies I used"
                items={["React","Material UI","Sass (Styling sheets)","Git","Figma"]}
              />
              
            </div>
          </section>

          {/* About me */}
          <section>
            <div>
              <h3 className='text-3xl py-5 '>About me</h3>
              <div className='flex justify-center'><HiOutlineRocketLaunch className='dark:text-green-500 text-cyan-500 h-12 w-12'/></div>
              <p className=' text-md py-5 leading-8 text-gray-800 dark:text-zinc-200'>
                I am 27 years old, Mexican software engineer. Graduated from the <a className='underline text-cyan-600 dark:text-green-500' href="https://upa.edu.mx">Universidad Politécnica de Aguascalientes</a>, where I studied the program "Information Strategic Systems Engineering" and got an specialization in Networks and Telecommunications, in 2017.
                I enjoy listening to audiobooks, photography, hiking and spending some time in nature.
              </p>
              <p className=' text-md py-5 leading-8 text-gray-800 dark:text-zinc-200'>
                Since December, I've been in what LinkedIn calls: a ~ <b>professional break</b> ~. I recently traveled to Canada to experience what a true winter feels like, and while I was not outside, I devoted all my time to study some of the DevOps foundation. I am truly excited to be part of a company again, being around a group of people that shares similar interests as I do, and avobe all, contribute to the society through my work. I'm more then ready.
              </p>
            </div>

          </section>

          {/* Courses */}
          <section className='mt-10'>
            <div>
              <h3 className='text-3xl py-5 '>Courses and Certifications</h3>
              <div className='flex justify-center'><TbFileCertificate className='dark:text-green-500 text-cyan-500 h-12 w-12'/></div>
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
                I'm always learning new things. Here you will find some projects like this exact website that I created using React and tailwind, and deployed using nginx in a docker container running in a Ubuntu server. Also there are  some hackerRank code challenges (in python) and Linux challenges.
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
