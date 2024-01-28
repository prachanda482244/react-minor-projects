import { useState } from "react"

const Project1BgChanger = () => {
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


    const handleBgChange = (e) => {
        setColor(e.target.value)
    }
    return (
        <div style={{ backgroundColor: color }} className="min-w-screen p-2 min-h-screen">
            <div className="text-white flex border-2 p-2 items-center justify-center rounded-lg flex-wrap gap-2  top-2">
                {
                    popularColors.map((color) => (
                        <button
                            value={color.toLowerCase()}
                            style={{ backgroundColor: color.toLowerCase() }}
                            className="px-2 py-1 rounded-lg font-semibold uppercase text-black"
                            key={color}
                            onClick={handleBgChange}
                        >{color}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Project1BgChanger
