
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GlassNavbar from './Navigation/GlassNavbar';

// import GreenScreenImage from './GreenScreenImage';
import TransparentImage from './TransparentImage';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-black text-white relative font-sans selection:bg-yellow-500/30">
            <GlassNavbar />

            <main>
                {children}
            </main>

            <footer className="bg-neutral-900 border-t border-neutral-800 py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4 mix-blend-difference">
                            <TransparentImage
                                src="/sawaii-name.jpg"
                                alt="SAWAII Logo"
                                className="h-24 md:h-36 w-auto object-contain"
                                targetColor="white"
                                tolerance={200}
                            />
                            {/* <span className="text-3xl font-serif font-bold text-white tracking-widest">SAWAII</span> */}
                        </div>
                        {/* <p className="text-neutral-500 mb-4 font-mono text-xs uppercase tracking-widest">North Indian Restaurant</p> */}
                        <p className="text-neutral-600 text-xs font-mono">© 2026 SAWAII. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
