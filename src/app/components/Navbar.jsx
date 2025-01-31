"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

// The Navbar component renders a responsive navigation bar with a logo, menu items, and a mobile toggle, allowing users to navigate to different sections or external links, with a mobile overlay menu when the navbar is open.

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "mailto:john.lamair@nyu.edu",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // section header, navbar fixed at top of screen
    <nav className="fixed mx-auto border border-slate-200 border-l-transparent border-r-transparent top-0 left-0 right-0 z-10 bg-white bg-opacity-100 ">
        <div className="flex container lg:py-4 lg:px-2 flex-wrap items-center justify-between mx-auto px-4 py-2">
            
            {/*Logo*/}
            <Link href={"/"} className="text-2xl md:text-5xl text-black font-semibold">

            </Link>

            {/*NavBar*/}
            <div className="mobile-menu block md:hidden">
                {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} 
                            className="flex items-center px-3 py-2 border rounded border-black text-black">
                        <Bars3Icon className="h-5 w-5"/>
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} 
                            className="flex items-center px-3 py-2 border rounded border-black text-black"
                    >
                        <XMarkIcon className="h-5 w-5" />                       
                    </button>
                )
                }    
            </div>

            <div className="menu hidden md:block md:w-auto" id="navbar"> 
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}> 
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>       
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar
