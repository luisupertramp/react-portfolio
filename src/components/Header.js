// ===== PROPS =====
// * title: [string] Title of Header / NavBar
// * showButton: [boolean] Display PDF version button or not
// * : []
// * : [] 

// Icons
import {BsFillMoonStarsFill} from 'react-icons/bs';

// Components
// using Context to toggle between darkMode and lightMode across all website
import ThemeContext from "../ThemeContext";
import { useContext } from "react";
import ResumePDF from '../Luis_Pedroza_Resume_v2.pdf'

const Header = (props) => {
  
    const {toggleMode} = useContext(ThemeContext)

    return (
        <nav className='py-10 flex justify-between dark:text-zinc-200'>
            <h1 className=' text-xl font-burtons'>{props.title}</h1>
            <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => toggleMode()} className='cursor-pointer text-2xl'/></li>
                
                {props.showButton && 
                    <li><a className=' bg-cyan-500 shadow-lg dark:bg-green-600  text-white px-4 py-2 rounded ml-8 dark:shadow-green-500/30 dark:hover:shadow-green-500/40' href={ResumePDF} download="Luis Pedroza Resume.pdf">
                        PDF version
                    </a></li>
                }
            </ul>
        </nav>
    )
}

export default Header;