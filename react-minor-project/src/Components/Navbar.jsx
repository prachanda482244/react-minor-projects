import { NavLink } from "react-router-dom"

const Navbar = () => {
    const navLinks = [
        {
            url: '/project1',
            name: 'Project 1'
        },
        {
            url: '/project2',
            name: 'Project 2'
        },
        {
            url: '/project3',
            name: 'Project 3'
        }
    ]
    return (
        <nav className="flex items-center bg-black border-b-2 text-white p-3 justify-between">
            <div className="font-semi-bold text-xl text-sky-500 uppercase ">
                Projects
            </div>
            <ul className="flex items-center flex-wrap md:mr-40 gap-5">
                {
                    navLinks.map((link) => (
                        <NavLink key={link.name} className={({ isActive }) => `py-1 px-4 rounded-lg font-semibold text-black ${isActive ? 'bg-blue-900' : 'bg-white '} `} to={link.url}>{link.name}</NavLink>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
