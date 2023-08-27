'use client';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import Image from "next/image";
import Link from "next/link";
import '@/app/styles/navbar.css';
import { useEffect, useState } from "react";

const Navbar = () => {

    const [navView, setNavView] = useState(false);

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
    }, []);

    const list = <>
        <li> <Link href={''} onClick={()=>setNavView(false)} className="nav-link" > Home</Link></li>
        <li> <Link href={''} onClick={()=>setNavView(false)} className="nav-link" > Movies</Link></li>
        <li> <Link href={''} onClick={()=>setNavView(false)} className="nav-link" > About</Link></li>
        <li> <Link href={''} onClick={()=>setNavView(false)} className="nav-link" > Contact</Link></li>
        <li> <Link href={''} onClick={()=>setNavView(false)} className="nav-link" > Login</Link></li>
    </>

    return (
        <header className={`${colorChange && 'backdrop-brightness-[.4] '} fixed md:top-0 -top-1 z-30 w-screen `} >
            <nav className={`flex justify-between ${colorChange || 'md:py-5'} py-2 md:px-20 px-5 items-center`} >
                <Image src={colorChange ? '/Movie.png' : '/movie-bg-less.png'} width={150} height={50} alt="head"
                    className={`${colorChange ? 'h-[4rem]' : 'h-[2.5rem]'} object-contain object-left`}
                />
                <ul className="md:flex hidden gap-8" >
                    {list}
                </ul>
                <button onClick={() => setNavView(!navView)} className='md:hidden absolute right-5 z-10 text-2xl'  >
                    {
                        navView ?
                            <AiOutlineClose />
                            :
                            <HiOutlineMenuAlt3 />
                    }
                </button>
            </nav>
            {
                navView &&
                <div className='absolute top-0 h-screen w-screen bg-black' >
                    <ul className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center text-2xl space-y-2' >
                        {list}
                    </ul>
                </div>
            }
        </header>
    );
};

export default Navbar;