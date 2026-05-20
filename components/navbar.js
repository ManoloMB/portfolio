"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ items }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const sectionId = href.replace('//#', '').replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
        if (document.getElementById('mobile-menu')) {
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.getElementById('mobile-menu').classList.toggle('hidden');
    };

    useEffect(() => {
        const sectionIds = items
            .map((item) => item.href.replace('//#', '').replace('/#', ''))
            .filter(Boolean);

        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.4 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [items]);

    return (
        <header className="fixed top-0 left-0 right-0 z-10 border-b-2 border-b-white/5 bg-slate-900/95 backdrop-blur-sm">
            <nav className='max-w-screen-lg py-5 px-10 mx-auto'>
                <div className='hidden sm:flex items-center justify-center'>
                    <div className="flex-shrink">
                        <Link href="/" className="font-bold text-xl tracking-wide text-white hover:text-cyan-400 transition-colors duration-300">MMB</Link>
                    </div>
                    <div className='flex-grow'></div>
                    <div className="flex-shrink flex items-center gap-6">
                        {items.map((item, index) => {
                            const sectionId = item.href.replace('//#', '').replace('/#', '');
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`inline-flex font-medium transition-all duration-300 hover:text-cyan-500 link-underline relative pb-1 cursor-pointer ${
                                        isActive ? 'text-cyan-400' : 'text-white/80'
                                    }`}
                                >
                                    {item.text}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
                                    )}
                                </a>
                            );
                        })}
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
                        <Link href="/" className="font-bold text-xl">MMB</Link>
                    </div>
                </div>
                <div className="sm:hidden hidden" id="mobile-menu">
                    <div className="space-y-1 pt-6">
                        {items.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block rounded-md pl-1 py-2 font-medium hover:bg-sky-800 transition-colors duration-200 cursor-pointer"
                            >
                                {item.text}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
