// ===== PROPS =====
// * : [] 
// * : [] 
// * : []
// * : [] 

// Components
import ThemeContext from "../ThemeContext";
import Header from "./Header";

import { useContext } from 'react';

const BlogsList = () => {
    const {darkMode} = useContext(ThemeContext)

    // Until I find a better way to get the files automatically, this list will contain the name of files for each blog
    const blogs = [
        
    ]
  
    return (
        <div className={darkMode ? 'dark' : '' }>

            <main className='bg-white text-black dark:text-white dark:bg-gradient-to-tr dark:from-slate-900 dark:from-30% dark:via-slate-800 dark:via-70% dark:to-slate-900 dark:to-100% min-h-screen'>

                <div className='w-10/12 2xl:w-8/12 m-auto'>

                    {/* Header */}
                    <Header 
                        title="Blog"
                        showButton={false}
                    />

                    {/* Title and Desc */}
                    <div className=' text-left p-8'>
                        <h2 className=' text-5xl py-2 text-cyan-500 dark:text-green-500 font-medium md:text-6xl'>Blogs and stuff</h2>
                        <h3 className='text-2xl md:text-3xl'>A few things that I've learned while creating this website:</h3>    
                    </div>

                    <section>
                        <h2>Some stuff here</h2>
                    </section>
                    
                </div>
            </main>
            
        </div>
    )
}

export default BlogsList;