import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="logo">Cuida tu mente</a>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="tratamientos">Tratamientos</a></li>
                    <li><a href="agendar">Agendar tu cita</a></li>
                    <li><a href="contactanos">Contactanos</a></li>
                </ul>
                <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            </div>
        </nav>
    );
};

export default NavBar;
