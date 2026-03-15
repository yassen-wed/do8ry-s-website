import { Link } from 'react-router-dom';

const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/articles', label: 'Articles' },
    { to: '/posts', label: 'Posts' },
    { to: '/about', label: 'About Us' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-cream/10 flex items-center justify-center">
                                <img
                                    src="/logo-bg.png"
                                    alt="do8ry Logo"
                                    className="w-14 h-14 object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.classList.add('text-gold', 'font-bold', 'text-xl');
                                        e.target.parentElement.textContent = 'D8';
                                    }}
                                />
                            </div>
                            <span className="text-2xl font-bold text-gold">do8ry</span>
                        </div>
                        <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
                            A community initiative dedicated to empowering people and creating meaningful, lasting change.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="flex flex-col gap-2">
                            {footerLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-cream/70 hover:text-gold transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
                        <a
                            href="https://www.instagram.com/do8ry/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-cream/70 hover:text-gold transition-all duration-200 group"
                        >
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                            <span className="text-sm">@do8ry</span>
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-cream/50 text-xs">
                        © {year} do8ry. All rights reserved.
                    </p>
                    <p className="text-cream/30 text-xs">Built with ❤️ for the community</p>
                </div>
            </div>
        </footer>
    );
}
