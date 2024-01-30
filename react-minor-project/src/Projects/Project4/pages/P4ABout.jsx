import { Link, Outlet } from 'react-router-dom'
const P4ABout = () => {
    let baseUrl = '/project4/about'
    return (
        <div className="bg-gray-800 text-slate-300 flex flex-col items-center font-semibold p-2">
            <h2 className='md:text-2xl texl-xl'>Get Some Random texts</h2>
            <div className='flex items-center gap-3 mt-2'>
                <Link className='bg-slate-200 text-black font-semibold p-2 rounded-lg' to={`${baseUrl}/loremtext`}>Lorem Text</Link>
                <Link className='bg-slate-200 text-black font-semibold p-2 rounded-lg' to={`${baseUrl}/randomtext`}>Random Text</Link>
            </div>
            <Outlet />
        </div >
    )
}

export default P4ABout
