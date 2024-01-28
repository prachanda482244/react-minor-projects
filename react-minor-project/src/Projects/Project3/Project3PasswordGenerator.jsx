import { useCallback, useEffect, useRef, useState } from "react"
import ProjectConcepts from "../../Components/ProjectConcepts"

const Project3PasswordGenerator = () => {
    const [password, setPassword] = useState('sdfsdfd')
    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [characters, setCharacters] = useState(false)
    const passRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if (number) str += '0123456789'
        if (characters) str += '!@#$%^&*()_'

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, characters, number])

    const handleCopy = () => {
        window.navigator.clipboard.writeText(password)
        passRef.current.select()
    }
    useEffect(() => {
        passwordGenerator()
    }, [length, number, characters, passwordGenerator])


    const concepts = [
        'State Management with useState',
        'Random Password Generation',
        'Use of useEffect and useCallback hooks',
        'Handling Copy to Clipboard',
        'Input Handling with checkboxes and range slider',
        'CSS Styling with Tailwind CSS',
        'Project Concepts Array',
        'Clipboard Interaction with navigator.clipboard API',
        'React Ref Usage for managing input field reference',
        'Component Structure and organization',
        'Better Optimization'
    ];

    return (
        <div className="bg-black">
            <div className="bg-purple-800 flex flex-col gap-2 p-3 md:w-1/2 mx-auto">
                <h1 className="text-2xl uppercase text-center font-bold text-white p-2 ">Password Generator</h1>
                <div className="flex items-center justify-between gap-2 ">
                    <input ref={passRef} value={password} type="text" readOnly className="p-2 rounded-lg w-full focus:border-none outline-purple-800" />
                    <button onClick={handleCopy} className="bg-sky-500 py-2 px-4 rounded-lg shadow-lg font-semibold">Copy</button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <input type="range" id="length" min={8} max={60} value={length} onChange={(e) => setLength(e.target.value)} />
                        <label htmlFor="length" className="text-slate-200 font-semibold">Length : {length}</label>
                    </div>
                    <div className="flex items-center gap-1">
                        <input type="checkbox" id="numbers" className="w-4 h-4 " checked={number} onChange={(e) => setNumber(e.target.checked)} />
                        <label htmlFor="numbers" className="text-slate-200 font-semibold">Numbers</label>
                    </div>
                    <div className="flex items-center gap-1">
                        <input type="checkbox" id="characters" className="w-4 h-4 " checked={characters} onChange={(e) => setCharacters(e.target.checked)} />
                        <label htmlFor="characters" className="text-slate-200 font-semibold">Characters</label>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <ProjectConcepts concepts={concepts} color={'white'} />
            </div>
        </div>
    )
}

export default Project3PasswordGenerator
