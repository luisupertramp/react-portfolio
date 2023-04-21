// ===== PROPS =====
// * pos: [string] position name
// * desc: [string] description of position
// * company: [string] company name
// * date: [string] dates working in that position
// * action: [string] title for items
// * actionItems: [array] description of activities/technologies
// * image: [img imported]

const ExperienceCard = (props) => {
    return (
        <div className="p-10 my-10 flex-1 text-center shadow-lg rounded border dark:bg-zinc-800 dark:border-lime-900">
            <img className='mx-auto' src={props.image} width={100} height={100} />

            <h3 className=' text-xl pt-7 '>
                {props.company}
            </h3>

            <h3 className="text-lg font-light dark:text-neutral-300">
                {props.pos}
            </h3>

            <h3 className=" text-sm  dark:text-green-600 pb-5  ">
                {props.date}
            </h3>

            <p className="py-2 font-light">
                {props.desc}
            </p>

            <h4 className="py-4 text-cyan-600 dark:text-green-500 dark:font-semibold">{props.action}</h4>

            <ul role="list" className='my-3 list-disc marker:text-sky-400 dark:marker:text-green-500 px-1 list-inside '>
                {props.items.map((activityName) => {
                    return <li key={"card_"+activityName} className="text-gray-800 font-light dark:text-zinc-200 py-1">{activityName}</li>
                })}
            </ul>
        </div>
    )
}

export default ExperienceCard;