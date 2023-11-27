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
<<<<<<< HEAD
                <a href="#Hero">Home</a>
                <a href="#">Store</a>
                <a href="#Mission">About</a>
                <a href="#CTA">Contact</a>
                <a href="#Donate">Donate</a>
=======
                <a href="#">Home</a>
                <a href="#">Store</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Donate</a>
>>>>>>> dfe3d6552db3f3cba18efd422ac6b6f3300db809
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