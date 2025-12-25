import React, { useRef } from 'react';

const Menu = () => {
    const menuRef = useRef<HTMLDivElement>(null);

    const menuItems = [
        {
            category: 'Appetizers',
            items: [
                { name: 'Tandoori Chicken', price: '$18', desc: 'Marinated in yogurt and spices, cooked in tandoor' },
                { name: 'Paneer Tikka', price: '$14', desc: 'Cottage cheese cubes with bell peppers and spices' },
                { name: 'Samosa Platter', price: '$12', desc: 'Crispy pastries filled with spiced potatoes and peas' },
                { name: 'Chicken Malai Kebab', price: '$16', desc: 'Creamy and tender chicken kebabs' }
            ]
        },
        {
            category: 'Main Course',
            items: [
                { name: 'Butter Chicken', price: '$22', desc: 'Tender chicken in rich tomato-butter sauce' },
                { name: 'Rogan Josh', price: '$24', desc: 'Aromatic lamb curry with Kashmiri spices' },
                { name: 'Dal Makhani', price: '$16', desc: 'Slow-cooked black lentils with cream and butter' },
                { name: 'Palak Paneer', price: '$18', desc: 'Cottage cheese in creamy spinach gravy' }
            ]
        },
        {
            category: 'Breads & Rice',
            items: [
                { name: 'Garlic Naan', price: '$5', desc: 'Soft flatbread with garlic and butter' },
                { name: 'Biryani', price: '$20', desc: 'Fragrant basmati rice with meat or vegetables' },
                { name: 'Kulcha', price: '$6', desc: 'Stuffed flatbread with your choice of filling' },
                { name: 'Jeera Rice', price: '$8', desc: 'Basmati rice tempered with cumin' }
            ]
        }
    ];

    return (
        <section ref={menuRef} className="py-20 bg-black pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Our Menu</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8"></div>
                    <p className="text-gray-300 text-lg">Discover the authentic tastes of North India</p>
                </div>

                <div className="space-y-12">
                    {menuItems.map((category, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-yellow-600/20 rounded-xl p-8">
                            <h3 className="text-3xl font-bold text-yellow-500 mb-8 text-center">{category.category}</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="border-b border-yellow-600/10 pb-4 hover:border-yellow-600/30 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                                            <span className="text-yellow-500 font-bold text-lg">{item.price}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
