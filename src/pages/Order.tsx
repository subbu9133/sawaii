import React from 'react';

const Order = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black pt-24 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Place Your Order</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8"></div>
                    <p className="text-gray-300 text-lg">Delicious food delivered to your doorstep</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-600/20 rounded-xl p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-6">Order Details</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-black border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-black border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-black border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                        <textarea
                            placeholder="Your Order Details"
                            rows={4}
                            className="w-full bg-black border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Order;
