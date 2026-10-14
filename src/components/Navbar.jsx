import React from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [activeLink, setActiveLink] = React.useState('#home')

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About Us' },
        { href: '#services', label: 'Our Services' },
        { href: '#testimonials', label: 'Testimonials' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm">
            <div className="container mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
                <div className="flex cursor-pointer items-center gap-1">
                    <div className="h-4 w-4 rounded-full bg-blue-600 opacity-75 transition-opacity hover:opacity-100" />
                    <div className="-ml-2 h-4 w-4 rounded-full bg-red-500 opacity-75 transition-opacity hover:opacity-75" />
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:hidden">
                    {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
                </button>

                <div className="hidden items-center gap-10 text-gray-700 md:flex">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full ${activeLink === link.href
                                    ? 'text-blue-600 after:w-full'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button className="hidden rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 md:block">
                    <a href="#news">Get in Touch</a>
                </button>
            </div>

            {isMenuOpen && (
                <div className="border-t border-gray-100 bg-white py-4 md:hidden">
                    <div className='container mx-auto px-4 space-y-3'>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                // href={link.href}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setIsMenuOpen(false);
                                }}
                                className={`block py-2 text-sm font-medium ${activeLink === link.href
                                        ? 'text-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}

                        <button className="w-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 md:block">
                            <a href="#news">Get in Touch</a>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar