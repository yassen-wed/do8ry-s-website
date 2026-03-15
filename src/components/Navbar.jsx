import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/articles', label: 'Articles' },
    { to: '/posts', label: 'Posts' },
    { to: '/about', label: 'About Us' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-xl' : 'bg-navy/95 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-cream/10 flex items-center justify-center">
                            <img
                                src="/logo-nobg.png"
                                alt="do8ry Logo"
                                className="w-9 h-9 md:w-11 md:h-11 object-contain group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('text-gold', 'font-bold', 'text-xl');
                                    e.target.parentElement.textContent = 'D8';
                                }}
                            />
                        </div>
                        <span className="text-cream font-bold text-xl tracking-wide group-hover:text-gold transition-colors duration-300">
                            do8ry
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${isActive
                                        ? 'bg-gold text-dark'
                                        : 'text-cream hover:text-gold hover:bg-white/10'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg text-cream hover:text-gold hover:bg-white/10 transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-navy border-t border-white/10 px-4 py-3 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-lg font-medium transition-all duration-200 ${isActive
                                    ? 'bg-gold text-dark'
                                    : 'text-cream hover:text-gold hover:bg-white/10'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
