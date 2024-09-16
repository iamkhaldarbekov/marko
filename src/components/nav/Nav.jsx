import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="px-[40px] py-[16px] flex justify-between items-center border-b-[1px] border-[#D9D9D9]">
            <p className="font-medium text-[28px] text-dark">Marko.</p>
            <ul>
                <Link to='/' className="text-[14px] text-dark mr-[36px] hover:underline">HOME</Link>
                <Link to='/about' className="text-[14px] text-dark mr-[36px] hover:underline">ABOUT</Link>
                <Link to='/projects' className="text-[14px] text-dark mr-[36px] hover:underline">PROJECTS</Link>
                <Link to='/blog' className="text-[14px] text-dark mr-[36px] hover:underline">BLOG</Link>
                <Link to='/pricing' className="text-[14px] text-dark mr-[36px] hover:underline">PRICING</Link>
                <Link to='/contact' className="text-[14px] text-dark hover:underline">CONTACT</Link>
            </ul>
        </nav>
    )
}