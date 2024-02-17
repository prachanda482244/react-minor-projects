import { useState } from "react"
import { accordianData } from "./data"

const Project5Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [enablemultipleSelection, setEnableMultipleSelection] = useState(false)
    const [multipleSelected, setMultipleSelected] = useState([])
    const handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId)
    }
    const handleMultipleSelection = (currentId) => {
        const copyMultipleId = [...multipleSelected]
        const findIndexOf = copyMultipleId.indexOf(currentId)
        findIndexOf == -1 ? copyMultipleId.push(currentId) : copyMultipleId.splice(findIndexOf, 1)
        setMultipleSelected(copyMultipleId)
        console.log(findIndexOf);
    }
    return (
        < div className="flex flex-col items-center" >
            <h1 className="p-2 text-3xl font-bold text-center">Accordian</h1>
            <div className="flex  items-center p-4 gap-10 flex-wrap">
                {
                    accordianData && accordianData.length > 0 && accordianData?.map(data => (
                        <div className=" flex gap-5 p-4 rounded-lg flex-col items-center w-1/3 mx-auto  shadow-2xl" key={data.id}>
                            <div className="flex items-center gap-6">
                                <h1 className="text-xl font-bold">{data.question}</h1>
                                <span onClick={
                                    enablemultipleSelection ?
                                        () => handleMultipleSelection(data.id) :
                                        () => handleSingleSelection(data.id)
                                } className="text-2xl cursor-pointer border-2 rounded-full border-black flex items-center justify-center h-8 w-8">+</span>
                            </div>
                            {
                                selected === data.id || multipleSelected.indexOf(data.id) !== -1
                                    ?
                                    <p className="font-semibold text-slate-800">{data.answer}</p>
                                    : null}
                        </div>
                    ))
                }
            </div>
            <button onClick={() => setEnableMultipleSelection(!enablemultipleSelection)} className={`px-10 py-3 rounded-lg text-white font-semibold ${enablemultipleSelection ? 'bg-black' : 'bg-purple-700'}`}>{enablemultipleSelection ? 'MultiSelectionOn' : 'MultiSelectionOff'}</button>
        </ div>
    )
}

export default Project5Accordian
