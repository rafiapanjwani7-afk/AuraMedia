import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-[#B0936C]/40 backdrop-blur-xl border-b border-[#B9A175]/40 shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">

                {/* Luxurious Logo */}
                <Link
                    to='/'
                    className="text-2xl font-extrabold tracking-tight text-amber-950 hover:text-amber-900 transition-colors drop-shadow-sm"
                >
                   AuraMedia
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-3 sm:gap-6">
                    <Link
                        to='/'
                        className="px-4 py-2 rounded-full text-sm font-bold text-amber-950 hover:text-amber-900 hover:bg-[#B9A175]/30 transition-all duration-200"
                    >
                        Search
                    </Link>

                    <Link
                        to='/collection'
                        className="px-6 py-2.5 rounded-full text-sm font-bold text-amber-950 bg-gradient-to-r from-[#B9A175] to-[#B0936C] hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        Collection
                    </Link>
                </nav>

            </div>
        </header>
    )
}

Navbar.displayName = 'Navbar'

export default Navbar