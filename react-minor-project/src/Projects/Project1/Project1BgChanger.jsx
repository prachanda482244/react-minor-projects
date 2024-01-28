import { useState } from "react"
import ProjectConcepts from "../../Components/ProjectConcepts";
import Button from "../../Components/Button";

const Project1BgChanger = () => {
    const [show, setShow] = useState(false)
    const [color, setColor] = useState('black')
    const popularColors = [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Teal",
        "Brown",
        "Cyan",
        "Magenta",
        "Lime",
        "Indigo",
        "Violet",
        "Gray",
        "Olive",
        "Maroon",
        "Turquoise",
        "Gold",
        "Silver",
        "SlateBlue",
        "Coral",
        "DarkGreen",
        "SkyBlue",
        "NavajoWhite",
        "Sienna",
        "Tomato",
        "SteelBlue",
        "MediumSpringGreen",
    ];

    const concepts = [
        "Learned About useState Hook",
        "How to pass dynamic value to background"
    ]

    const handleBgChange = (e) => {
        setColor(e.target.value)
    }
    return (
        <div style={{ backgroundColor: color, transition: "background-color .5s" }} className="min-w-screen relative  p-2 min-h-screen md:min-h-[545px]">
            <div className="text-white flex border-2 p-2 items-center justify-center rounded-lg flex-wrap gap-2  top-2">
                {
                    popularColors.map((color) => (
                        <button
                            value={color.toLowerCase()}
                            style={{ backgroundColor: color.toLowerCase() }}
                            className="px-2 py-1 transition-colors delay-300 ease-in-out rounded-lg font-semibold uppercase text-black"
                            key={color}
                            onClick={handleBgChange}
                        >{color}</button>
                    ))
                }
            </div>
            <h1 className="text-center text-2xl text-white p-3">Background - Changer </h1>
            <div className="absolute right-2">
                <Button show={show} setShow={setShow} />
            </div>
            {
                show ?
                    <div className="mt-16 md:mt-0">
                        <ProjectConcepts color={color} concepts={concepts} />
                    </div>
                    : null
            }
        </div>
    )
}

export default Project1BgChanger
