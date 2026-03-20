import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Handle the scroll event to detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Set scrolled to true if the page is scrolled down 100px or more
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 z-20  w-full h-fit bg-transparent text-white flex items-center justify-between px-12 py-3 ${scrolled ? 'bg-orange-600 shadow' : 'bg-transparent'}`}>
                <div className="flex items-center gap-2">
                    <img src="logo.png" alt="Logo" className="h-[50px] object-cover rounded-full shadow-lg bg-transparent" />
                    <span className="font-bold text-sm drop-shadow text-left">Mr. J’s Math and Engineering <br />Tutoring Services</span>
                </div>

                <ul className='flex items-center gap-[40px]'>
                    <a href="#home" className="hover:border-b-2 hover:border-orange-100">Home</a>
                    <a href="#services" className="hover:border-b-2 hover:border-orange-100">Services</a>
                    <a href="#reviews" className="hover:border-b-2 hover:border-orange-100">Reviews</a>
                    <a href="#about" className="hover:border-b-2 hover:border-orange-100">About</a>
                    <a href="#contact" className="hover:border-b-2 hover:border-orange-100">Contact</a>
                </ul>

                <Button className='bg-slate-700 rounded-full shadow hover:bg-slate-800 hover:text-white'>Enroll Now</Button>
            </nav>
        </>
    )
}
