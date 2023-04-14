// ===== PROPS =====
// * name: [string] Skill name / technology
// * exp: [string] "Experience points" hehe
// * know: [string] Knowledge points 
// * topics: [array] with topics I handle

// Icons
import { useState } from 'react';
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs';

const expBars = (level) => {
    var bars = []
    for (var i=0; i<level; i++){
        bars.push(<span key={i} className="min-w-4 h-5 border-2 dark:bg-green-600 bg-cyan-500 dark:border-green-700 border-cyan-500 mx-0.5">&nbsp;</span>)
    }

    for (i=5; i>level; i--){
        bars.push(<span key={i} className="min-w-4 h-5 border-2 dark:border-green-700 border-cyan-500 mx-0.5">&nbsp;</span>)
    }
    return bars;
}

const SkillCard = (props)  => {
    const [expand, setExpand] = useState(false)

    return (
        <div className="p-3 my-2 mx-2 h-min w-1/2 text-center shadow-lg rounded border dark:hover:shadow-lime-500/20 hover:shadow-cyan-600/20 transition-shadow  dark:bg-zinc-800 dark:border-lime-900">
            <div className="mb-3"><b>{props.name}</b></div>
            <div className='mb-3'>
                <span className="flex justify-center my-1"> <p className="mr-3" >Experience: </p> {expBars(props.exp)} </span>
                <span className="flex justify-center my-1"> <p className="mr-3" >Knowledge: </p> {expBars(props.know)} </span>
            </div>

            { props.topics && 
                <>
                    <div className={(expand ? null : "hidden") + " mt-7"}>
                        <p className='text-teal-500 dark:text-green-500'>I feel good at:</p>
                        <ul role="list" className='my-3 list-disc marker:text-sky-400 dark:marker:text-green-500 px-7 '>
                            {props.topics.map((top)=>{
                                return <li key={top} className='text-sm'>{top}</li>
                            })}
                        </ul>
                    </div>

                    <BsChevronCompactDown onClick={()=>{setExpand(!expand)}} className={(expand ? "hidden " : "") +  " m-auto cursor-pointer w-full"}/>
                    <BsChevronCompactUp onClick={()=>{setExpand(!expand)}} className={(expand ? "" : "hidden") +  " m-auto cursor-pointer w-full"}/>
                </>
            }
        </div>
    )
}

export default SkillCard;