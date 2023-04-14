// ===== PROPS =====
// * pos: [string] position name
// * desc: [string] description of position
// * action: [string] title for items
// * actionItems: [array] description of activities/technologies
// * image: [img imported]

const ExperienceCard = (props) => {
    return (
        <div className="p-10 my-10 flex-1 text-center shadow-lg rounded border dark:bg-zinc-800 dark:border-lime-900">
            <img className='mx-auto' src={props.image} width={100} height={100} />

            <h3 className="text-lg font-medium pt-8 pb-2  ">
                {props.pos}
            </h3>

            <p className="py-2">
                {props.desc}
            </p>

            <h4 className="py-4 text-cyan-600 dark:text-green-500 dark:font-semibold">{props.action}</h4>

            <ul>
                {props.items.map((activityName) => {
                    return <p key={"card_"+activityName} className="text-gray-800 dark:text-zinc-200 py-1">{activityName}</p>
                })}
            </ul>
        </div>
    )
}

export default ExperienceCard;