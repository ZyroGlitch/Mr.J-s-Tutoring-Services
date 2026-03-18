import { Button } from '@/components/ui/button'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="w-full h-fit bg-transparent text-white flex items-center justify-between container mx-auto py-4">
                <div className="flex items-center gap-2">
                    <img src="logo.png" alt="Logo" className="h-[50px] object-cover rounded-full shadow-lg bg-transparent" />
                    <span className="font-bold text-sm drop-shadow text-left">Mr. J’s Math and Engineering <br />Tutoring Services</span>
                </div>

                <ul className='flex items-center gap-8'>
                    <a href="#home" className="hover:border-b-2 hover:border-orange-100">Home</a>
                    <a href="#about" className="hover:border-b-2 hover:border-orange-100">Services</a>
                    <a href="#services" className="hover:border-b-2 hover:border-orange-100">About</a>
                    <a href="#contact" className="hover:border-b-2 hover:border-orange-100">Reviews</a>
                    <a href="#contact" className="hover:border-b-2 hover:border-orange-100">Contact</a>
                </ul>

                <Button className='bg-purple-500 rounded-full shadow hover:bg-purple-600 hover:text-white'>Enroll Now</Button>
            </nav>
        </>
    )
}
