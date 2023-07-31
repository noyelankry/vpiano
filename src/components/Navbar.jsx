import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        < div className='fixed w-full h-[50px] z-[2] flex justify-between items-center px-4 bg-blue-200 text-slate-800 ' >

            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar