import { Outlet, Route, Routes } from 'react-router-dom';
import P4Navbar from './components/P4Navbar';

const AboutComponent = () => <div>About</div>;

const Project4Routing = () => {
    return (
        <div>
            <P4Navbar />
            <Routes>
                <Route path='/' element={<Outlet />}>
                    <Route index element={"Home"} />
                    <Route path="about" element={<AboutComponent />} />
                    <Route path="contact" element={"COntact"} />
                    <Route path="services" element={"COntact"} />
                </Route>
            </Routes>
        </div>
    );
}

export default Project4Routing;
