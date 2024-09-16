import {Outlet} from 'react-router-dom';
import {Nav, Footer} from './components';

export default function Layout() {
    return (
        <div className="font-satoshi w-[1440px] mx-auto">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}