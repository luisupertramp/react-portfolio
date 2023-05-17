import logo from './logo.svg';
import './App.css';

// Components
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';
import Courses from './components/Courses';

// Icons
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BiAtom} from  'react-icons/bi';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {HiOutlineRocketLaunch} from 'react-icons/hi2';
import {TbFileCertificate} from 'react-icons/tb';
import {FiGithub} from 'react-icons/fi';

import support from "./media/support.png";
import ba from "./media/ba.png";
import dev from "./media/dev.png";

// Certs
import pythonCourse from "./media/certs/Python.png"
import awsCourse from "./media/certs/Cloud_Practicioner_Essentials.png"
import awsWellArch from "./media/certs/Well-Architected-Framework.png"
import awsCCP from "./media/certs/AWS_CCP.png"
import linuxSysAdm from "./media/certs/Linux_sys_admin.png"

// Images
import memoji from './media/memoji_me.png';
import gitHub from "./media/github.png";
import aboutMe from "./media/about_me.jpg";
import awsBadge from "./media/AWS_CCP_Badge.png";

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

        <main className='bg-white px-10 md:px-20 text-black dark:text-white dark:bg-gradient-to-tr dark:from-slate-900 dark:from-30% dark:via-slate-800 dark:via-70% dark:to-slate-900 dark:to-100% '>

          {/* Main page */}
          <section className=' min-h-screen pb-24'>
            {/* Navigation bar */}
            <nav className='py-10 flex justify-between dark:text-zinc-200'>
              <h1 className=' text-xl font-burtons'>My resume</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
                
                <li><a className=' bg-cyan-500 shadow-lg dark:bg-green-600  text-white px-4 py-2 rounded ml-8 dark:shadow-green-500/30 dark:hover:shadow-green-500/40' href="Luis_Pedroza_Resume_v2.pdf" download>
                  PDF version
                </a></li>
                
              </ul>
            </nav>

            {/* Personal info */}
            <div className=' text-left p-8 lg:px-64 md:px-32'>
              <h2 className=' text-5xl py-2 text-cyan-500 dark:text-green-500 font-medium md:text-6xl'>Luis Pedroza</h2>
              <h3 className='text-2xl md:text-3xl'>Software engineer | Aspiring DevOps / Cloud Engineer</h3>
              <div className='lg:py-10'>
                <p className=' mx-auto text-md pt-5 leading-8 text-gray-800  dark:text-zinc-200 md:text-xl '>
                  Hello! I am a software engineer passionate about technology. I enjoy learning new things constantly.
                </p>
                <p className=' mx-auto text-md pt-5 leading-8 text-gray-800  dark:text-zinc-200 md:text-xl '>
                  I am preparing myself to become a DevOps Engineer, so if my current skills fit the requirements of a position you may know, or if you have any other inquiry, please contact me at <a href="mailto:luisfpedrozaa@gmail.com" className='underline text-cyan-600 dark:text-green-500'>luisfpedrozaa@gmail.com</a> or DM me via LinkedIn for a quicker response.
                </p>
                
              </div>
            </div>

            {/* Avatar and AWS Badge*/}
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-center md:px-32">

              {/* Avatar */}
              <div className='mx-auto lg:m-0 relative bg-gradient-to-b from-cyan-500  dark:from-green-500 rounded-full w-60 h-60 my-1 '>
                <a href="https://www.linkedin.com/in/luispedrozaa/" target={'_blank'} ><img src={memoji} width={180} height={180} className="mx-auto pt-3 transition transform hover:scale-105"/></a>
              </div>
              
              {/* Badge */}
              <div className='mx-auto lg:m-0 flex justify-center w-60'>
                <a href="https://www.credly.com/badges/1886a701-4cc5-413f-926c-0385bff12443" target={'_blank'} ><img src={awsBadge} className='transition transform hover:scale-105' width={215} height={215} /></a>
              </div>
            </div>

            {/* Icons */}
            <div className=' my-8 text-5xl flex justify-center gap-16  text-gray-600  dark:text-zinc-200' >
              <a href="https://www.linkedin.com/in/luispedrozaa/" target={'_blank'}><AiFillLinkedin className='transition transform hover:scale-150'/></a>
              <a href="https://github.com/luisupertramp" target={'_blank'}><AiFillGithub className='transition transform hover:scale-150'/></a>
            </div>
          </section>
          
          {/* Professional experience */}
          <section className='pb-24'>
            <div className='lg:px-64 md:px-32 py-5'>
              <h3 className='text-3xl py-5'>Professional experience</h3>
              <div className='flex justify-center'><HiOutlineDesktopComputer className='dark:text-green-500 text-cyan-500 h-12 w-12'/></div>
              <div className='text-left'>
                <p className=' mx-auto text-md pt-5 leading-8 text-gray-800  dark:text-zinc-200 md:text-xl'>
                  {/* Since 2017, I've been working mainly in 3 areas: <b>Support Engineer</b>, <b>Business Analayst</b> and <b>Web developer.</b> <br/> */}
                  I have 2+ yoE working as a web developer with tools such as React, Bootstrap, MaterialUI, Tailwind, JS, jQuery, and others.
                  <br/><br/>
                  Before that I had the opportunity to work as a Business Analyst for over a year, working directly with customers (mostly in the US) regarding issues they had with an internal ESG application, gathering requirements for customizations projects, testing in deployments and so on.
                  <br/><br/>
                  I have 2+ yoE as support engineer working with Windows servers and networking devices such as Cisco and Fortinet firewalls.
                </p>
                <p className=' mx-auto text-md pt-5 leading-8 text-gray-800  dark:text-zinc-200 md:text-xl '>
                  Right know I am getting prepared to work in the DevOps/Cloud areas. Have a look at my <a href='#courses_section' className='underline text-cyan-600 dark:text-green-500'>Courses and Certifications section</a> where you can go through my preparation process and see the courses I've taken. 
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="lg:flex gap-10 lg:px-24">

              {/* Support Engineer */}
              <ExperienceCard 
                image={support}
                pos="Support Engineer"
                company="Softtek"
                date="February 2017 - August 2019"
                desc={"Level 2 support engineer with Windows Server environments.\nWorking with GE engineers from around the world, I developed skills in efficient international communication, customer-oriented service, and teamwork across disciplines."}
                action="Tools I used"
                items={["Ticketing system management","Monitoring with Solar Winds","Windows Server administration","Basic Fortinet and Cisco configuration"]}
              />

              {/* Business Analyst */}
              <ExperienceCard 
                image={ba}
                pos="Business Analyst"
                company="Benchmark ESG (Before, Gensuite)"
                date="August 2019 - November 2020"
                desc={"Working in the EHS sector as a business analyst, I gained experience in understanding our customers' needs by gathering information for customization projects, testing features in deployment sessions, and creating proper documentation, among other duties."}
                action="Daily Activites"
                items={["Gathering requirements","Testing implementations","Validaton of bugs and errors","SQL queries for custom reports"]}
              />

              {/* Front-end Developer */}
              <ExperienceCard 
                image={dev}
                pos="Web Developer"
                company="Benchmark ESG, then KIUBIX"
                date="November 2020 - December 2022"
                desc={" As a front-end developer in Benchmark ESG, I acquired experience working with technologies such as Adobe ColdFusion, SQL Server, jQuery, and Bootstrap. Then I moved to Kiubix where I worked with React, Material UI, Sass and Scrum methodology."}
                action="Technologies I used"
                items={["React","Material UI","Sass (Styling sheets)","Git & Figma"]}
              />
              
            </div>
          </section>

          {/* Skills */}
          <section className='pb-24 lg:px-64 md:px-32' >
              <h3 className='text-3xl py-5'>Skills</h3>
              <div className='flex justify-center'><BiAtom className='dark:text-green-500 text-cyan-500 h-12 w-12'/></div>
              <p className=' text-left mx-auto text-md md:text-xl pt-5 leading-8 text-gray-800  dark:text-zinc-200  '>
                An easy way to understand my skill level is by considering two areas: <b>expertise</b> (in a job position or personal project) and <b>knowledge</b> (from courses I've taken and not necessarily applied in the professional field)
              </p>

              <div className='lg:flex lg:flex-wrap mt-6'>  
                <div className='flex lg:w-96 justify-around'>
                  <SkillCard 
                    name="Linux" 
                    exp={3} 
                    know={4} 
                    topics={["Solid console handling", "File system", "VIM editor", "User accounts and groups management" , "File permissions" , "Networking", "SSH configuration" , "Task automation (crontab and anacron)" , "Basic bash shell scripting", "Task automation with Ansible" ]}
                    shadow={true}
                  />
                  <SkillCard 
                    name="Python" 
                    exp={3} 
                    know={4} 
                    topics={["Dictionaries","Algorithms","Lists","Objects"]}
                  />
                </div>

                <div className='flex lg:w-96 justify-around'>
                  <SkillCard 
                    name="React" 
                    exp={3} 
                    know={3} 
                    topics={["Components segmentation","useState", "useEffect" , "useContext"]}
                  />
                  <SkillCard 
                    name="JS, HTML & CSS" 
                    exp={4} know={4} 
                    topics={["DOM manipulation", "CSS frameworks and tools (sass, tailwind)" , "Transitions / animations" , "Responsive design"]}
                  />
                </div>

                <div className='flex lg:w-96 justify-around'>
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

                <div className='flex lg:w-96 justify-around'>
                  <SkillCard 
                    name="Git" 
                    exp={3} 
                    know={3} 
                  />
                  <SkillCard 
                    name="AWS" 
                    exp={2} 
                    know={3}
                    topics={["Creating, managing and accessing EC2 instances", "Creating an Amazon Load Balancer" , "Creating Security Groups and rules" , "Creating Auto-Scaling Groups", "Creating S3 Buckets", "Hosting web sites using S3" , "Creating EBS volumes and snapshots" , "Creating VPCs", "Creating Endpoints", "Creating Flow Logs" , "Creating a CloudFront CDNs " , "Creating a RDS connection with MySQL Workbench as engine", "Creating Dynamo tables using console"]}                  
                  />
                </div>
              </div>
          </section>

          {/* Courses */}
          <section id="courses_section" className='pb-24'>
            <div>
              <h3 className='text-3xl py-7 '>Courses and Certifications</h3>
              <div className='flex justify-center'><TbFileCertificate className='dark:text-green-500 text-cyan-500 h-12 w-12'/></div>
              <p className=' text-left text-md md:text-xl lg:px-64 md:px-32 py-5 leading-8 text-gray-800 dark:text-zinc-200'>
                I am very glad <b>(and proud of myself)</b> to show some of the courses that I've been taking in the last few months, here is a brief summary:
              </p>
            </div>

            {/* Course component */}
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap lg:justify-center'>
              
              {/* AWS CCP */}
              <Courses 
                title = "AWS Certified Cloud Practitioner"
                cert = {awsCCP}
                desc = "The AWS Certified Cloud Practitioner offers a foundational understanding of AWS Cloud concepts, services, and terminology. This is a good starting point for people in non-technical roles with no prior IT or cloud experience or for those with on-premises IT experience looking for basic AWS Cloud fluency."
                topics = {["Cloud Concepts: Benefits and Cloud Architecture Design Principles","Security and Compliance: IAM, Shared Responsability Model","Compute Resources: EC2, ELB, Lambda, ECS, EKS, etc.","Storage: S3, EBS, EFS","Networking: VPC, ACL's and Security Groups, CloudFront","Route 53","Databases: RDS, Redshift, DynamoDB, Neptune, ElastiCache","Monitoring: CloudTrail, CloudWatch","Support, Billing and Pricing"]}
              />
              
              {/* Linux */}
              <Courses 
                title = "Learn Linux and Become SysAdmin"
                cert = {linuxSysAdm}
                desc = "This extensive, top-rated course consists of over 20 hours of content and more than 200 lessons. It is expertly designed to teach you how Linux works and guide you, step by step, towards becoming a Linux System Administrator."
                topics = {["File System","Account Management","File Permission","Process Management","Networking","System Administration","Bash Shell Scripting","Intro to Docker","Linux Security","Task automation with Ansible, crontab and anacron"]}
              />

              {/* Python */}
              <Courses 
                title = "Scientific computing with Python"
                cert = {pythonCourse}
                desc = "In this course, I learned Python fundamentals like variables, loops, conditionals, and functions. Then it all quickly ramp up to complex data structures, networking, relational databases, and data visualization. It was a great course for people like me that had previous experience with other programming languages, but needed to get familiar with the Python sintax."
                topics = {["Variables, Expressions, and Statements","Python Functions","Loops and Iterations","Reading Files","Dictionaries","Working with touples","Networking with Python","Web Scraping with Python","Python Objects","Visualizing Data with Python"]}
                certLink = "https://www.freecodecamp.org/certification/fcc0befd61f-f50d-42ff-8254-f28f4a0a454d/scientific-computing-with-python-v7"
              />

              {/* AWS Cloud Practitioner */}
              {/* <Courses 
                title = "AWS Cloud Practitioner Essentials Course"
                cert = {awsCourse}
                desc = "This course contains a general understanding of the AWS Cloud, regardless of your specific technical role. It provides a detailed overview of cloud concepts and AWS services, security, architecture, pricing, and support. The course also helps you prepare for the AWS Certified Cloud Practitioner exam."
                topics = {["AWS cloud: basic general infrastructure","Key services of the AWS platform","Basic architectural principles","Basic security and compliance aspects of the AW","Billing, account management and pricing models","Documentation or technical assistance","AWS Cloud Value Proposition","basic/core features of performing deployments and tasks in the AWS Cloud"]}
              /> */}

              {/* AWS Well-Architected */}
              {/* <Courses 
                title = "AWS Well-Architected Course"
                cert = {awsWellArch}
                desc = "This course is designed to provide a deep dive into the AWS Well-Architected Framework and its five pillars. It is divided into eight modules, which include overviews of the AWS Well-Architected Framework, as well as the Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization pillars."
                topics = {["Pillars, features, and common uses of the Well-Architected Framework.", "design principles, key services, and best practices for each pillar", "How to use the Well-Architected Framework and the AWS Well-Architected Tool to review your architecture."]}
              /> */}

              {/* <span className='mx-auto text-xs md:text-sm text-cyan-500 dark:text-green-500 italic font-semibold'>DISCLAIMER: AWS Certificates of Completion are not from the official Certificate Exams (yet) but still, from preparation courses of the AWS Skill Builder web site. </span> */}
              
            </div>
          </section>

          {/* About me */}
          <section className='pb-24'>
            <div className='lg:px-64 md:px-32'>
              <h3 className='text-3xl py-5 '>About me</h3>
              <div className='flex justify-center'><HiOutlineRocketLaunch className='dark:text-green-500 text-cyan-500 h-12 w-12'/></div>
              <div className='lg:justify-center lg:flex lg:gap-8 lg:mt-10'>
                <div className='lg:max-w-7xl text-start lg:flex lg:flex-col lg:justify-between lg:basis-1/2'>
                  <div>
                    <p className='text-md md:text-xl py-5 leading-8 lg:leading-9 text-gray-800 dark:text-zinc-200'>
                      I am 27 years old, Mexican software engineer. Graduated from the <a className='underline text-cyan-600 dark:text-green-500' href="https://upa.edu.mx">Universidad Politécnica de Aguascalientes</a>, where I studied the program "Information Strategic Systems Engineering" and got an specialization in Networks and Telecommunications, in 2017.
                      I enjoy photography, listening to audiobooks, hiking and spending some time in nature.
                    </p>
                    <p className=' text-md md:text-xl py-5 leading-8 lg:leading-9 text-gray-800 dark:text-zinc-200'>
                      I recently took a professional break and traveled to experience a Canadian winter. During this time, I devoted myself to studying the foundations of DevOps. I am truly excited to be part of a company again, being around a group of people that shares similar interests as I do, and above all, contribute to the society through my work. I'm more than ready.
                    </p>
                  </div>
                  <div className='mx-auto mb-10 text-xs md:text-sm text-cyan-500 dark:text-green-500 italic font-semibold'>View from the Toronto Islands. Behind me, the iconic skyline with the CN Tower</div>
                </div>
                <div className='lg:basis-1/2 lg:flex-1 lg:align-middle lg:my-auto'>
                  <img className='mx-auto' src={aboutMe} alt="A picture of myself with the CN tower behind, in Toronto, Canada."/>
                </div>
              </div>
            </div>
          </section>

          {/* GitHub */}
          <section className='pb-24 lg:px-64 md:px-32'>
            <div>
            <h3 className='text-3xl py-5 '>Checkout my GitHub!</h3>
            <div className=' flex justify-center'><FiGithub className='dark:text-green-500 text-cyan-500 h-12 w-12'/></div>
              <p className=' text-left text-md md:text-xl py-5 leading-8 text-gray-800 dark:text-zinc-200'>
                I'm always learning new things. Here you will find some projects like this exact website that I created using React and Tailwind, and deployed using nginx in a docker container running on a Ubuntu server. Also there are some HackerRank code challenges (in python) and Linux challenges.
              </p>
            </div>

            <div className='py-10 flex justify-center mx-auto'>
              <a href="https://github.com/luisupertramp" target={'_blank'} ><img src={gitHub} className='rounded-lg transition transform hover:scale-105' /></a>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
