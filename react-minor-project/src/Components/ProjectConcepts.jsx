
import './ProjectConcepts.css'
const ProjectConcepts = ({ concepts, color }) => {
    return (
        <div className="text-white border border-red-900 md:border-none p-4 ">
            <h1 className="text-bold text-2xl md:text-3xl md:text-center">Concepts I learned</h1>
            {
                concepts?.map((concept) => (
                    <li
                     style={{ color: color?.toLowerCase(), transition: 'all .5s' }}

                     className='border-2  bg-black font-bold  rounded-lg m-1 p-2 animated-border ' key={concept}>{concept}</li>
                ))
            }
        </div>
    )
}

export default ProjectConcepts
