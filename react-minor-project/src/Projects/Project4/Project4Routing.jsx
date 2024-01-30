import { Outlet, Route, Routes } from 'react-router-dom';
import P4Navbar from './components/P4Navbar';
import P4Home from './pages/P4Home';
import P4ABout from './pages/P4ABout';
import P4Lorem from './components/P4Lorem';
import P4Contacts from './pages/P4Contacts';
import { lorem, randomQuote } from './constants';


const Project4Routing = () => {
    return (
        <div>
            <P4Navbar />
            <Routes>
                <Route path='/' element={<Outlet />}>
                    <Route path='home' element={<P4Home />} />
                    <Route path="about" element={<P4ABout />}>
                        <Route path='loremtext' element={<P4Lorem data={lorem} />} />
                        <Route path='randomtext' element={<P4Lorem data={randomQuote} />} />
                    </Route>
                    <Route path="contact" element={<P4Contacts />} />
                    <Route path="greeting" element={"Greeting"} />
                </Route>
                <Route path='/dashboard' >
                    <Route index element={'Dashboard'} />
                    <Route path='create' element={'Create User'} />
                    <Route path='update' element={'update User'} />
                    <Route path='delete' element={'delete User'} />
                </Route>
            </Routes>
        </div>
    );
}

export default Project4Routing;
