"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ items }) {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.getElementById('mobile-menu').classList.toggle('hidden');;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-10 border-b-2 border-b-white/5 bg-slate-900 bg-fixed bg-cover bg-custom-gradient">
            <nav className='max-w-screen-lg py-6 px-10  mx-auto'>
                <div className='hidden sm:flex items-center justify-center'>
                    <div className="flex-shrink">
                        <Link href="#sobremi" className="font-semibold text-xl">MMB</Link>
                    </div>
                    <div className='flex-grow'></div>
                    <div className="flex-shrink space-x-4">
                        {items.map((item, index) => (
                            <Link key={index} href={item.href} className="inline-flex font-medium transition-all duration-300 hover:scale-110 hover:text-cyan-500 focus:text-cyan-200 link-underline">{item.text}</Link>
                        ))}
                    </div>
                </div>
                <div className='sm:hidden flex mx-auto items-center justify-center'>
                    <button onClick={toggleMenu} className="flex-shrink" aria-controls='mobile-menu'>
                        {!menuOpen ? (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                    <div className="flex-grow"></div>
                    <div className="flex-shrink">
                        <Link href="/about" className="font-semibold text-xl">MMB</Link>
                    </div>
                </div>
                <div className="sm:hidden hidden" id="mobile-menu">
                    <div className="space-y-1 pt-6">
                        {items.map((item, index) => (
                            <Link key={index} href={item.href} className="block rounded-md pl-1 py-2 font-medium hover:bg-sky-800 transition-colors duration-200 focus:hover:bg-sky-700">{item.text}</Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header >
    );
}