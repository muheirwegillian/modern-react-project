import React from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [activeLink, setActiveLink] = React.useState('#home')

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About Us' },
        { href: '#services', label: 'Our Services' },
        { href: '#testimonials', label: 'Testimonials' }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50
         border-b border-gray-100 shadow-sm">
            <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
                {/* Logo */}
                <div className='flex items-center gap-1 cursor-pointer'>
                    <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'>
                    </div>

                    <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-75 hover:opacity-75 transition-opacity'>

                    </div>
                </div>

                {/* desktop navitems*/}

                <div className="hidden md:flex items-center gap-10 text-gray-700">
                    {
                        navLinks.map((link, index) => (
                            <a key={index} href={link.href}
                                onClick={() => 
                                    setActiveLink(link.href)
                                }
                                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:0.5
                                after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
                                 ${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}>
                                {link.label}
                            </a>
                        ))
                    }
                </div>

                {/* get in touch btn */}
                  <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-md
                   hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                    <a href="#news">Get in Touch</a>
                  </button>
                {/* mobile menu */}

            </div>
        </nav>
    )
}

export default Navbar