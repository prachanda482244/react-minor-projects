import { useLocation } from "react-router-dom"

const P4Lorem = ({ data }) => {

    const location = useLocation()
    return (
        <div className="border-2 border-purple-700 min-h-screen md:min-h-80 animate-pulse p-4 rounded-lg m-3">
            <h2 className="text-2xl text-center border-2 border-black rounded-lg m-2">Url: {location.pathname}</h2>
            <div>

                {data}
            </div>
        </div>
    )
}

export default P4Lorem
