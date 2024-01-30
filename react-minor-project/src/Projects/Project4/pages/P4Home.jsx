import { jsxCodeArray } from "../constants"
const P4Home = () => {
    return (
        <div className="bg-gray-800 text-slate-300 flex flex-col  ml- items-center font-semibold p-2">
            <h1 className="mx-auto text-xl my-2">This is a nested routing application where you can navigate through any routes given below</h1>
            <div>
                <h2 className="text-center text-2xl font-bold">Routes</h2>
                <div className="flex flex-col border-black animate-pulse border-2 py-4 px-10">

                    {jsxCodeArray?.map((element) => (
                        <div className={` ${element.classes !== 'ml-0' ? element.classes : 'ml-0'} font-semibold text-xs sm:text-sm md:text-xl hover:text-black cursor-pointer transition-all delay-100 ease-linear `} key={element.name}>{element.name}</div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default P4Home
