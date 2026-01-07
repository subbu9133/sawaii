import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const galleryImages = [
    "Beetroot Cutlet .png",
    "Chicken .png",
    "Chicken Salt & Pepper .png",
    "Chicken Tikka Kabab  .png",
    "Delhi Ka Dahi Bhalla .png",
    "Eggplant Chaat .png",
    "FISH.png",
    "Kale Chaat .png",
    "Kale Chaat.png",
    "LRGS.png",
    "Malai Chicken Shish Kabab  .png",
    "Prune Paneer Tikka Kabab .png",
    "SAWAII 1.png",
    "SAWAII INSAID.png",
    "SAWAII TABLE .png",
    "SAWAII TABLE SET UP.png",
    "SAWAII.png",
    "TABLE 1 .png",
    "TABLE SETUP.png",
    "THAI.png",
    "Tandoori Chicken .png"
];

// Helper to format filename into a display name
const getDisplayName = (filename: string) => {
    // Remove extension
    let name = filename.replace(/\.(png|jpg|jpeg)$/i, '');
    // Remove trailing spaces or numbers if needed (user asked for correct names, filenames seem descriptive enough minus the trash)
    // Some files have trailing spaces like "Chicken .png"
    name = name.trim();
    return name;
};

const Gallery = () => {
    return (
        <div className="min-h-screen bg-black pt-28 pb-20 relative overflow-hidden">
            <Helmet>
                <title>Gallery | SAWAII</title>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif text-white tracking-tight"
                    >
                        Our Gallery
                    </motion.h1>
                    <div className="w-24 h-px bg-yellow-600/50 mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-900"
                        >
                            <img
                                src={`/sawaii/${image}`}
                                alt={getDisplayName(image)}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-serif text-xl tracking-wide border-l-2 border-yellow-500 pl-3">
                                    {getDisplayName(image)}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
