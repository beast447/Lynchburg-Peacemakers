// Desc: This is the navbar component for the website
// It contains the logo, the toggle button, and the links to the other pages.
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'; // FaBars is the hamburger icon, FaTimes is the X icon
import Logo from '../assets/logo.jpg';

function Navbar() {
    const navRef = useRef();

    const toggleNav = () => {
        navRef.current.classList.toggle("show-nav");
    }

    return(
        <header>
            <nav ref={navRef} className="navbar">
                <img className="navbar-img" src={Logo} alt="Lynchburg peacemakers logo"/>
                <a href="#">Home</a>
                <a href="#">Store</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Donate</a>
                <button className="navbar-toggle-cancel-btn" onClick={toggleNav}>
                    <FaTimes />
                </button>
                <button className="navbar-toggle" onClick={toggleNav}>
                    <FaBars />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;