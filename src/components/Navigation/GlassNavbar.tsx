import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home as HomeIcon, Image as GalleryIcon } from 'lucide-react';
import TransparentImage from '../TransparentImage';

const GlassNavbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
        if (isOpen && latest > 50) setIsOpen(false); // Optional: close menu on scroll
    });

    const isActive = (path: string) => location.pathname === path;

    const navLinks: { name: string; path: string; external?: boolean }[] = [
        { name: 'HOME', path: '/' },
        { name: 'MENU', path: '/menu' },
        { name: 'CATERING', path: '/catering' },
        { name: 'ORDER ONLINE', path: 'https://order.toasttab.com/online/sawaii-indian-restaurant-615-fm-2281-100', external: true },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate="visible"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg py-1' : 'bg-black/50 backdrop-blur-md py-2'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <TransparentImage
                        src="/sawaii-name.jpg"
                        alt="SAWAII Logo"
                        className="h-16 md:h-24 w-auto object-contain"
                        targetColor="white"
                        tolerance={200}
                    />
                </Link>

                {/* Mobile Menu Button - Now visible on all screens */}
                <div className="flex items-center gap-4">
                    <Link to="/" className="p-2 text-white hover:text-yellow-500 transition-colors">
                        <HomeIcon size={28} />
                    </Link>
                    <Link to="/gallery" className="p-2 text-white hover:text-yellow-500 transition-colors">
                        <GalleryIcon size={28} />
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-white hover:text-yellow-500 transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Menu Overlay - Visible on all screens when open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-24 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl z-50 max-w-lg mx-auto"
                    >
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium text-center text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-lg font-medium text-center transition-colors ${isActive(link.path) ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default GlassNavbar;
