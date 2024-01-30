import { NavLink } from 'react-router-dom'

const P4Navbar = () => {
    const navLinks = [
        { url: '/project4/home', name: 'home' },
        { url: '/project4/about', name: 'about' },
        { url: '/project4/contact', name: 'contact' },
        { url: '/project4/greeting', name: 'Greeting' },
    ]
    return (
        <nav className='flex items-center bg-purple-800 shadow-lg p-3 text-slate-300 justify-between'>
            <div className='bg-white max-sm:text-sm p-2 text-slate-800 border border-white rounded-lg font-semibold shadow-xl'>Routing</div>
            <ul className='flex -items-center font-semibold gap-3 uppercase'>
                {
                    navLinks?.map((link) => (
                        <NavLink className={({ isActive }) => `${isActive ? 'text-black' : 'text-slate-200'}`} key={link.url} to={link.url}>{link.name}</NavLink>
                    ))
                }
            </ul>
            <div className="search">
                <button className='border-2 transition-all delay-200 ease-linear  hover:text-gray-800 hover:border-white border-gray-800 text-white font-bold px-4 py-2 rounded-lg '>Login</button>
            </div>
        </nav>
    )
}

export default P4Navbar
