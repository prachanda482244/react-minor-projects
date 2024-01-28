
const ProjectConcepts = ({ concepts, color }) => {
    return (
        <div className="text-white border border-red-900 md:border-none  p-4">
            <h1 className="text-bold text-2xl md:text-3xl md:text-center">Concepts</h1>
            {
                concepts.map((concept) => (
                    <li style={{ color: color.toLowerCase(), transition: 'color .5s' }} className='border-2 bg-black font-bold border-purple-700 rounded-lg m-1 p-2' key={concept}>{concept}</li>
                ))
            }
        </div>
    )
}

export default ProjectConcepts
