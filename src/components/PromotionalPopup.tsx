import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import thaliImage from "../assets/New_promo1.jpeg";

const PromotionalPopup = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {!isMinimized ? (
        /* FULL MODAL */
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          {/* MODAL CONTAINER */}
          <motion.div
            layoutId="promo-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-sm w-full bg-black border border-white/20 rounded-xl shadow-2xl overflow-visible"
          >
            {/* CLOSE BUTTON OUTSIDE IMAGE */}
            <button
              onClick={() => setIsMinimized(true)}
              className="absolute -top-4 -right-4 z-50 bg-white text-black rounded-full p-2 shadow-xl hover:scale-110 transition"
            >
              <X size={18} />
            </button>

            {/* PROMO IMAGE */}
            <img
              src={thaliImage}
              alt="Special Offer"
              className="w-full h-auto object-contain rounded-xl"
            />
          </motion.div>
        </motion.div>
      ) : (
        /* MINIMIZED THUMBNAIL */
        <motion.div
          key="thumbnail"
          layoutId="promo-container"
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-[100] cursor-pointer group"
          onClick={() => setIsMinimized(false)}
        >
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 border-yellow-500/50 shadow-xl bg-black">
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