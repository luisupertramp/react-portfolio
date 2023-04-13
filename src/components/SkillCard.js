// Props:
// * name: Skill name / technology
// * exp: "Experience points" hehe
// * know: Knowledge points 

const expBars = (level) => {
    var bars = []
    for (var i=0; i<level; i++){
        bars.push(<span key={i} className="min-w-4 h-5 border-2 dark:bg-green-600 bg-teal-500 dark:border-green-700 border-teal-500 mx-0.5">&nbsp;</span>)
    }

    for (i=5; i>level; i--){
        bars.push(<span key={i} className="min-w-4 h-5 border-2 dark:border-green-700 border-teal-500 mx-0.5">&nbsp;</span>)
    }
    return bars;
}

const SkillCard = (props)  => {
    return (
        <div className="text-center shadow-lg p-3 rounded my-2 mx-2 dark:bg-neutral-600 w-1/2">
            <div className="mb-3"><b>{props.name}</b></div>
            <span className="flex justify-center my-1"> <p className="mr-3" >Experience: </p> {expBars(props.exp)} </span>
            <span className="flex justify-center my-1"> <p className="mr-3" >Knowledge: </p> {expBars(props.know)} </span>
        </div>
    )
}

export default SkillCard;