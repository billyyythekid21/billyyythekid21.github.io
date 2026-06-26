import React from 'react'
import { socialImgs } from '../constants/index.js'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="/">
                        Billy Wu!
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map(({ name, url, icon }) => (
                        <a
                            className="icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={url}
                            key={name}
                            aria-label={name}
                            dangerouslySetInnerHTML={{ __html: icon }}
                        />
                    ))}
                </div>
                <div className="flex flex-col justify-center md:items-end items-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Billy Wu | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
