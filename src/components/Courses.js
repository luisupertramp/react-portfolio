// ===== PROPS =====
// * cert: [image] course certificate
// * title: [string] course title
// * desc: [string] course description
// * topics: [array] topics in the course


const Courses = (props) => {
    return (
        <div className="flex gap-10">
            {/* Certificate image */}
            <div className='basis-1/2 flex-1 align-middle my-auto'>
                <img src={props.cert}/>
            </div>

            {/* Certificate details */}
            <div className="basis-1/2 text-start align-middle my-auto">

                {/* Title */}
                <h3 className=' text-2xl text-cyan-500 dark:text-green-500'>
                    {props.title}
                </h3>
                
                {/* Description */}
                
                <p className=" text-md md:text-xl py-2 font-light text-gray-800 dark:text-zinc-200">
                    {props.desc}
                </p>

                <h4 className='text-lg pt-3 '>
                    Course content:
                </h4>

                <ul role="list" className=' text-md md:text-lg font-light my-3 list-disc marker:text-sky-400 dark:marker:text-green-500 pl-4 pr-2 list-inside text-start'>
                    {props.topics.map((top)=>{
                        return <li key={top} className='text-md'>{top}</li>
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Courses;