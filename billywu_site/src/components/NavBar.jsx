import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled || menuOpen ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero" onClick={closeMenu}>
                    Billy Wu | billyyythekid21
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav>

                <a className="contact-btn group hidden lg:flex" href="#contact">
                    <div className="inner">
                        <span>Contact Billy</span>
                    </div>
                </a>

                <button
                    className="hamburger lg:hidden"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`bar ${menuOpen ? 'open' : ''}`} />
                    <span className={`bar ${menuOpen ? 'open' : ''}`} />
                    <span className={`bar ${menuOpen ? 'open' : ''}`} />
                </button>
            </div>

            <nav className={`mobile ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name}>
                            <a href={link} onClick={closeMenu}>
                                {name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" onClick={closeMenu} className="mobile-contact-btn">
                            Contact Billy
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
