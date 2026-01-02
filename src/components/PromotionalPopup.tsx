import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import thaliImage from '../assets/Special Thali (A5) - 5.jpg';

const PromotionalPopup = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        // Small delay to ensure smooth entrance after page load
        const timer = setTimeout(() => {
            setHasMounted(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (!hasMounted) return null;

    return (
        <AnimatePresence mode="wait">
            {!isMinimized ? (
                /* Full Modal Backdrop */
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    {/* Modal Content */}
                    <motion.div
                        layoutId="promo-container"
                        className="relative max-w-sm w-full bg-black border border-white/20 rounded-xl overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors z-10 backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>

                        <img
                            src={thaliImage}
                            alt="Special Thali Offer"
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </motion.div>
            ) : (
                /* Minimized Thumbnail in Corner */
                <motion.div
                    key="thumbnail"
                    layoutId="promo-container"
                    initial={{ opacity: 0, scale: 0.5, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 right-6 z-[100] cursor-pointer group"
                    onClick={() => setIsMinimized(false)}
                >
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 border-yellow-500/50 shadow-xl bg-black">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
                        </div>
                        <img
                            src={thaliImage}
                            alt="Special Offer Thumbnail"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromotionalPopup;
