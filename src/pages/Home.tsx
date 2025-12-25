import React, { useRef } from 'react';
import { Clock, MapPin, Phone, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

                <div className="relative z-10 text-center px-4">
                    <div className="mb-8 animate-fadeIn">
                        <img
                            src="/sawaii-logo.png"
                            alt="Sawai Restaurant Logo"
                            className="w-64 h-64 object-contain mx-auto mb-8 drop-shadow-2xl"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                        SAWAII
                    </h1>
                    <p className="text-2xl md:text-3xl text-yellow-500 mb-8 font-light tracking-wide">
                        North Indian Restaurant
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Experience the authentic flavors of North India in an atmosphere of elegance and tradition
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/menu" className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-2xl">
                            View Menu
                        </Link>
                        <Link to="/order" className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all transform hover:scale-105">
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>

            <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">About SAWAII</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8"></div>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                            Established with a passion for authentic North Indian cuisine, SAWAII brings you the rich culinary heritage
                            of India's northern regions. Our expert chefs craft each dish with traditional recipes passed down through
                            generations, using only the finest ingredients and aromatic spices.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Star size={40} />, title: 'Expert Chefs', desc: 'Master chefs with decades of experience in authentic North Indian cuisine' },
                            { icon: <Star size={40} />, title: 'Premium Quality', desc: 'Only the finest ingredients and traditional cooking methods' },
                            { icon: <Clock size={40} />, title: 'Fresh Daily', desc: 'Everything prepared fresh daily with authentic spices' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-b from-gray-900 to-black border border-yellow-600/20 rounded-lg p-8 text-center hover:border-yellow-500/50 transition-all transform hover:scale-105">
                                <div className="text-yellow-500 flex justify-center mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-yellow-500 mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Contact Us</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8"></div>
                    </div>

                    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">Location</h3>
                                    <p className="text-gray-300">123 Culinary Street<br />Downtown District<br />City, State 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Clock className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">Hours</h3>
                                    <p className="text-gray-300">
                                        Monday - Thursday: 11:00 AM - 10:00 PM<br />
                                        Friday - Saturday: 11:00 AM - 11:00 PM<br />
                                        Sunday: 12:00 PM - 9:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Phone className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">Phone</h3>
                                    <p className="text-gray-300">(555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Mail className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">Email</h3>
                                    <p className="text-gray-300">info@sawairestaurant.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
