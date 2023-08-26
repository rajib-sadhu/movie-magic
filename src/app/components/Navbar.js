'use client'

import Image from "next/image";
import Link from "next/link";
import '@/app/styles/navbar.css';
import { useEffect, useState } from "react";

const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', changeNavbarColor);
    }, [])

    return (
        <header className={`${colorChange && 'backdrop-brightness-[.4] '} fixed top-0 z-30 w-screen `} >
            <nav className={`flex justify-between py-5 mx-20 items-center`} >
                <Image src={colorChange ? '/Movie.png' : '/movie-bg-less.png'} width={150} height={50} alt="head"
                    className={`${colorChange ? 'h-[4rem]' : 'h-[3rem]'} object-contain object-left`}
                />
                <ul className="flex gap-8" >
                    <li> <Link href={''} className="nav-link" > Home</Link></li>
                    <li> <Link href={''} className="nav-link" > Movies</Link></li>
                    <li> <Link href={''} className="nav-link" > About</Link></li>
                    <li> <Link href={''} className="nav-link" > Contact</Link></li>
                </ul>
                <div >
                    <button>Login</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;