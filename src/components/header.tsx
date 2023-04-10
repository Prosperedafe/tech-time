import logo from '../../techtime.png'
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";

const Header = () => {

    const [showNav, setShowNav] = useState<boolean>(false);
    // const menuRef = useRef<HTMLUListElement>(null!);
    // useOnClickOutside(menuRef, () => setShowNav(false));

    // function useOnClickOutside(menuRef, handler) {
    //     useEffect(() => {
    //         const listener = (event) => {
    //             // Do nothing if clicking menuRef's element or descendent elements
    //             if (!menuRef.current || menuRef.current.contains(event.target)) {
    //                 return;
    //             }
    //             handler(event);
    //         };
    //         document.addEventListener("mousedown", listener);
    //         document.addEventListener("touchstart", listener);
    //         return () => {
    //             document.removeEventListener("mousedown", listener);
    //             document.removeEventListener("touchstart", listener);
    //         };
    //     }, [menuRef, handler]);
    // }

    return (
        <header>
            <nav className='header__nav'>
                <img src={logo} alt="" />
                <ul className={showNav ? 'header__nav__links' : 'header__nav__links nav-close'}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Testimonial</li>
                    <li>Community</li>
                    <li role='button' className='enroll-btn'>Enroll Now</li>
                </ul>
                {showNav ? < FaTimes className='menu-bar' onClick={() => setShowNav(!showNav)} size={25} color='#ffffff' /> : < FaBars className='menu-bar' onClick={() => setShowNav(!showNav)} size={25} color='#ffffff' />}
            </nav>
        </header>
    )
}

export default Header;