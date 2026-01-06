import { Helmet } from 'react-helmet-async';
import { menuCategories } from '../data/menuData';
import TransparentImage from '../components/TransparentImage';

const Menu = () => {
    return (
        <div className="bg-black min-h-screen pt-24 pb-20 relative overflow-hidden">
            <Helmet>
                <title>Menu | SAWAII</title>
            </Helmet>

            {/* Background Image */}
            <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <TransparentImage
                    src="/sawaii-name.jpg"
                    alt="Sawaii Logo Background"
                    className="w-64 md:w-[32rem] h-auto object-contain opacity-50"
                    tolerance={80} // Adjust tolerance if needed for the specific green shade
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-5">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mt-4 tracking-tight">Menu</h1>
                    <div className="w-24 h-px bg-yellow-600/50 mx-auto mt-8"></div>
                </div>

                <div className="space-y-20">
                    {menuCategories.map((category, idx) => (
                        <div key={idx} className="relative">
                            <h2 className="text-3xl font-serif text-yellow-500 mb-10 text-center uppercase tracking-widest border-b border-yellow-500 pb-4">
                                {category.title}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                                {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="group">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-2xl md:text-3xl text-yellow-500 font-serif tracking-wide whitespace-nowrap">
                                                {item.name}
                                            </h3>

                                            {/* Dotted Line Leader */}
                                            <div className="flex-grow mx-2 border-b border-dotted border-gray-600 relative top-[-4px]"></div>

                                            {item.price && (
                                                <span className="text-xl font-mono text-yellow-500/80 whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-white text-sm leading-relaxed text-left">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
