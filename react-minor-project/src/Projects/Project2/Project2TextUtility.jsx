import { useRef, useState } from "react"
import Button from "../../Components/Button"
import ProjectConcepts from "../../Components/ProjectConcepts"

const Project2TextUtility = () => {
    const [textData, setTextData] = useState('')
    const [show, setShow] = useState(true)
    const copyRef = useRef(null)

    const handleUppercase = () => setTextData(textData.toUpperCase())
    const handleLowercase = () => setTextData(textData.toLowerCase())
    const handleRemoveSpaces = () => setTextData(textData.split(/[ ]+/).join(' '))
    const handleCopyText = () => {
        window.navigator.clipboard.writeText(textData)
        copyRef.current.select()
    }
    const handlePasteText = async () => {
        const text = await window.navigator.clipboard.readText()
        setTextData((prev) => [...prev, text])
    }
    const handleClearText = () => setTextData('')

    const concepts = [
        'State Management with useState',
        'Ref Hook Usage for managing textarea reference (useRef)',
        'Event Handling with onClick and onChange',
        'Clipboard Interaction using navigator.clipboard API',
        'Dynamic UI with conditional rendering and transitions',
        'CSS Styling with Tailwind CSS classes',
        'Logic Building for text transformation functions',
        'Component Organization with modular sections',
        'Custom Button Component Usage',
        'Dynamic Content Update and Preview Display',
    ];

    return (
        <div className="flex pb-28 relative bg-gray-700 flex-col gap-2 ">
            <div className={`border-2 absolute ${show ? '-left-[1800px]' : 'left-0'} transition-all delay-300 ease-in-out    min-h-full min-w-full bg-black`}>
                <ProjectConcepts concepts={concepts} />
            </div>
            <h1 className="md:text-4xl text-2xl mt-3 md:mt-0  text-center text-white ">Text Utility</h1>
            <div className="absolute top-2 right-2">
                <Button show={show} setShow={setShow} />
            </div>
            <div className="flex flex-col p-3 md:p-0 max-w-5xl mx-auto" >
                <textarea ref={copyRef} value={textData} onChange={(e) => setTextData(e.target.value)} placeholder="Enter the text here . . ." className="md:w-[70vw] w-full p-3 rounded-lg font-semibold outline-none  h-56" cols={30} rows={10}></textarea>
                <div className="buttons flex flex-wrap text-sm items-center justify-center gap-3 mt-3">
                    <button
                        disabled={textData.length === 0}
                        className="shadow-lg py-2 disabled:bg-blue-700 px-4 font-semibold bg-blue-600 hover:bg-blue-500 rounded-lg text-black"
                        onClick={handleUppercase}
                    >Convert To Uppercase</button>

                    <button
                        disabled={textData.length === 0}
                        className="shadow-lg py-2 px-4 font-semibold disabled:bg-sky-700 bg-sky-600 hover:bg-sky-500 rounded-lg text-black"
                        onClick={handleLowercase}
                    >Convert To Lowercase</button>
                    <button
                        disabled={textData.length === 0}

                        className="shadow-lg py-2 px-4 disabled:bg-green-700 font-semibold bg-green-600 hover:bg-green-500 rounded-lg text-black"
                        onClick={handleRemoveSpaces}
                    >Remove Extra space</button>
                    <button
                        disabled={textData.length === 0}

                        className="shadow-lg py-2 px-4 disabled:bg-orange-700 font-semibold bg-orange-600 hover:bg-orange-500 rounded-lg text-black"
                        onClick={handleCopyText}
                    >Copy Text</button>
                    <button
                        disabled={textData.length === 0}

                        className="shadow-lg py-2 px-4 disabled:bg-gray-700 font-semibold bg-gray-600 hover:bg-gray-500 rounded-lg text-black"
                        onClick={handlePasteText}
                    >Paste Text</button>
                    <button
                        disabled={textData.length === 0}

                        className="shadow-lg py-2 px-4 font-semibold disabled:bg-red-700 bg-red-600 hover:bg-red-500 rounded-lg text-white"
                        onClick={handleClearText}

                    >Clear Text</button>
                </div>
                <div className="text-white font-bold" >
                    <div className=" text-2xl">Preview</div>
                    <div className="border border-sky-300 rounded-lg p-2 mt-2 mb-2 font-semibold pt-2 ">{textData.length === 0 ? 'Nothing to preview' : textData}</div>
                    <div className="text-sm">Total words: {textData.split(/\s+/).filter((elem) => elem.length !== 0).length} <br />
                        Total characters: {textData.length}</div>
                </div>
            </div>
        </div>
    )
}

export default Project2TextUtility
