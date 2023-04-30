import logo from '../../../techtime.png'
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from "react";
import { Button } from '../button';

const Header = () => {

    const [showNav, setShowNav] = useState<boolean>(false);

    const closeMenu = () => setShowNav(!showNav)

    const ref = useRef<HTMLUListElement>(null);

    useOnClickOutside(ref, () => setShowNav(false));

    function useOnClickOutside(ref: any, handler: any) {
        useEffect(() => {
            const listener = (event: any) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }, [ref, handler]);
    }



    return (
        <header>
            <nav className='header__nav'>
                <img className='header__logo' src={logo} alt="logo" />
                <ul ref={ref} className={showNav ? 'header__nav__links' : 'header__nav__links nav-close'}>
                    <li onClick={closeMenu}>Home</li>
                    <li onClick={closeMenu}>About Us</li>
                    <li onClick={closeMenu}>Courses</li>
                    <li onClick={closeMenu}>Testimonial</li>
                    <li onClick={closeMenu}>Community</li>
                    <li onClick={closeMenu}>
                        <Button className='enroll-btn' content='Enroll Now' />
                    </li>
                </ul>
                {showNav ? < FaTimes className='menu-bar' onClick={closeMenu} size={25} color='#ffffff' /> : < FaBars className='menu-bar' onClick={() => setShowNav(!showNav)} size={25} color='#ffffff' />}
            </nav>
        </header>
    )
}

export default Header