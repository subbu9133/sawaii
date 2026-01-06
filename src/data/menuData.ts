export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    dietary?: 'veg' | 'non-veg' | 'vegan';
    spiceLevel?: 1 | 2 | 3;
    isBestseller?: boolean;
    isNew?: boolean;
    image?: string;
}

export interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
    {
        id: 'sip-gallery',
        title: 'THE SIP GALLERY',
        items: [
            {
                id: 'blu-curacao',
                name: 'Blu Curacao',
                description: 'A striking sapphire-hued beverage with bright citrus undertones and crisp, cooling notes vibrant, refreshing, and visually stunning.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'chatpata-guava',
                name: 'Chatpata Guava',
                description: 'Guava puree blended with chatpata masala and a hint of salt. A vibrant, zesty mocktail that is bold, and irresistibly captivating.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'kala-khatta-mojito',
                name: 'Kala Khatta Mojito',
                description: 'A refreshing twist on the classic mojito, infused with the lively, tangy flavors of traditional Kala Khatta for a uniquely exotic experience.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'mango-piyush',
                name: 'Mango Piyush',
                description: 'A decadently creamy mango yogurt beverage, gently sweetened and garnished with a hint of dry nuts, offering a refreshingly smooth and indulgent finish.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'ishq-e-lemonade',
                name: 'Ishq-e Lemonade',
                description: 'An authentic North Indian shikanji, subtly enhanced with black salt, mint, and mild spices—creating a vibrant, refreshing, and cooling drink.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'oreo-shake',
                name: 'Oreo Shake',
                description: 'A luxuriously creamy blend of rich cream and crushed oreo cookies, finished with velvety chocolate notes and a smooth, indulgent finish.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            }
        ]
    },
    {
        id: 'lets-chaat',
        title: 'LETS CHAAT!',
        items: [
            {
                id: 'kale-chaat',
                name: 'Kale Chaat',
                description: 'Tempura-crisp kale leaves adorned with a tamarind glaze and flavorful sauces, creating an elevated harmony of sweet, tangy, and earthy crispness.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'delhi-ka-dahi-bhalla',
                name: 'Delhi Ka Dahi Bhalla',
                description: 'Silky lentil dumplings rested in chilled whipped yogurt, drizzled with sweet tamarind and spiced coriander. A classic Delhi indulgence elevated with refined elegance.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'avocado-dahi-puri',
                name: 'Avocado Dahi Puri',
                description: 'Lightly puffed puris artfully stuffed with avocado, topped with yogurt and the chef\'s selection of three chutneys, offering a contemporary and indulgent take on a classic delight.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'banarasi-chaat',
                name: 'Banarasi Chaat',
                description: 'A lively assortment of textures influenced by Banaras, showcasing cooked lentils and aromatic spices, fashioned into an elegant delicacy of the temple town.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'dabeli-cones',
                name: 'Dabeli Cones',
                description: 'Dabeli reimagined: a flavorful potato filling embraced by golden-buttered cones, topped with crunchy gram flour noodles and roasted peanuts for an exquisite culinary delight.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'eggplant-chaat',
                name: 'Eggplant Chaat',
                description: 'Crispy and delicious golden eggplant slices, adorned with cool yogurt, zesty tamarind, and a mint reduction, offer a harmonious fusion of crunch, creaminess, and vibrant flavors reminiscent of India\'s royal street fare.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            }
        ]
    },
    {
        id: 'small-plates',
        title: 'SMALL PLATES',
        items: [
            {
                id: 'thecha-paneer',
                name: 'Thecha Paneer',
                description: 'Char-grilled cottage cheese steeped in a fiery Maharashtrian thecha of crushed green chilies, garlic, and coriander smoky, bold, and beautifully balanced.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'beetroot-cutlet',
                name: 'Beetroot Cutlet',
                description: 'Slow-roasted beetroot and vegetable medallions, delicately spiced and seared, paired with a cooling mint-yogurt sauce.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'batata-vada',
                name: 'Batata Vada',
                description: 'A beloved Indian classic featuring delicately spiced potato croquettes encased in a crisp chickpea batter and fried to golden perfection. Comforting, flavorful, and irresistibly crisp.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'crispy-corn-kernel',
                name: 'Crispy Corn Kernel',
                description: 'Crisp corn kernels tossed with fragrant spices and gentle heat, offering a playful balance of crunch, warmth, and aroma.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'samosa',
                name: 'Samosa',
                description: 'Hand-folded pastry filled with spiced potatoes, crushed spices, and fresh herbs, served with a duo of house-crafted chutneys for a timeless gourmet start.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'chicken-salt-pepper',
                name: 'Chicken Salt & Pepper',
                description: 'Crisp, wok-tossed chicken with cracked pepper, garlic, and scallions, delivering a refined Indo-Asian balance of heat and aroma.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'chicken-changezi-cornetto',
                name: 'Chicken Changezi Cornetto',
                description: 'Creamy, slow-cooked Changezi chicken elegantly presented in a buttery cornetto shell, where indulgent Mughlai richness meets contemporary presentation.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'goat-sukkha',
                name: 'Goat Sukkha',
                description: 'A traditional dry preparation of slow-braised goat finished with roasted coconut, black pepper, and stone-ground spices deep, earthy, and fragrant.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'golden-fish',
                name: 'Golden Fish',
                description: 'Lightly marinated swai fillets, crisped to golden perfection and finished with aromatic curry leaves for a clean, comforting bite.',
                price: '',
                dietary: 'non-veg',
                isBestseller: true
            },
            {
                id: 'sunset-shrimp',
                name: 'Sunset Shrimp',
                description: 'Tender shrimp crowned with mango salsa, delivering a bright, luxurious burst of flavor.',
                price: '',
                dietary: 'non-veg',
                isBestseller: true
            }
        ]
    },
    {
        id: 'tandoori-creations',
        title: 'TANDOORI CREATIONS',
        items: [
            {
                id: 'soya-malai-chaap-kabab',
                name: 'Soya Malai Chaap Kabab',
                description: 'Creamy, melt-in-the-mouth soya chaap marinated in rich hung curd and cheese, gently grilled for a delicate, luxurious finish.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'prune-paneer-tikka-kabab',
                name: 'Prune Paneer Tikka Kabab',
                description: 'A gourmet reinterpretation of paneer, delicately stuffed with prune compote and grilled to achieve a refined balance of sweetness and gentle smoke.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'chicken-tikka-kabab',
                name: 'Chicken Tikka Kabab',
                description: 'Tender boneless chicken marinated in Kashmiri chili and yogurt, charred in the tandoor to achieve depth, warmth, and succulence.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'chicken-angara-kabab',
                name: 'Chicken Angara Kabab',
                description: 'A bold, smoky kabab infused with the chef’s signature angara masala, delivering intense flavor and lingering warmth.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'malai-chicken-shish-kabab',
                name: 'Malai Chicken Shish Kabab',
                description: 'Cream- and cheese-marinated chicken, grilled gently for a soft, velvety texture and subtle richness.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'tandoori-chicken',
                name: 'Tandoori Chicken',
                description: 'An iconic Indian preparation, featuring bone-in cuts marinated overnight and roasted in a clay oven for deep aroma, robust flavor, and exceptional tenderness.',
                price: '',
                dietary: 'non-veg',
                isBestseller: true
            },
            {
                id: 'pesto-chicken-kabab',
                name: 'Pesto Chicken Kabab',
                description: 'A cream- and cheese-marinated chicken kabab, delicately grilled and finished with pesto for a smooth, refined bite.',
                price: '',
                dietary: 'non-veg'
            }
        ]
    },
    {
        id: 'artisan-indian-breads',
        title: 'ARTISAN INDIAN BREADS',
        items: [
            {
                id: 'butter-naan',
                name: 'Butter Naan',
                description: 'Soft, cloud-like naan glazed with generous lashings of butter, delivering comforting richness and melt-in-the-mouth texture.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'garlic-naan',
                name: 'Garlic Naan',
                description: 'Hand-stretched tandoori naan enriched with roasted garlic butter and fresh herbs, offering a warm, aromatic finish with every tear.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'kashmiri-naan',
                name: 'Kashmiri Naan',
                description: 'A delightful naan filled with dried fruits and nuts, softly glazed, offering a sophisticated balance of sweetness and indulgent enjoyment.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'chili-garlic-bullet-naan',
                name: 'Chili Garlic (Bullet) Naan',
                description: 'A bold, fiery naan infused with red chilies, fresh garlic, and melted butter crafted for diners who enjoy heat wrapped in artisanal finesse.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'tandoori-roti',
                name: 'Tandoori Roti',
                description: 'A wholesome whole-wheat roti baked in the clay tandoor to achieve rustic char and crisp edges, ideal for pairing with robust curries.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'lacha-paratha',
                name: 'Lacha Paratha',
                description: 'A multi-layered artisanal paratha, skillfully rolled and pan-seared to create a golden, flaky spiral with buttery layers and gentle crispness.',
                price: '',
                dietary: 'veg'
            }
        ]
    },
    {
        id: 'rice-corner',
        title: 'RICE CORNER',
        items: [
            {
                id: 'goat-biryani',
                name: 'Goat Biryani',
                description: 'An elegant expression of Mumbai’s storied biryani tradition, featuring fragrant long-grain basmati rice layered with hand-ground spices, caramelized onions, fresh herbs, and saffron essence.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'chicken-biryani',
                name: 'Chicken Biryani',
                description: 'An elegant expression of Mumbai’s storied biryani tradition, featuring fragrant long-grain basmati rice layered with hand-ground spices, caramelized onions, fresh herbs, and saffron essence.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'vegetable-biryani',
                name: 'Vegetable Biryani',
                description: 'An elegant expression of Mumbai’s storied biryani tradition, featuring fragrant long-grain basmati rice layered with hand-ground spices, caramelized onions, fresh herbs, and saffron essence.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'paneer-biryani',
                name: 'Paneer Biryani',
                description: 'An elegant expression of Mumbai’s storied biryani tradition, featuring fragrant long-grain basmati rice layered with hand-ground spices, caramelized onions, fresh herbs, and saffron essence.',
                price: '',
                dietary: 'veg'
            }
        ]
    },
    {
        id: 'pasta-magic',
        title: 'PASTA MAGIC',
        items: [
            {
                id: 'pink-pasta',
                name: 'Pink Pasta',
                description: 'Blends of traditional Italian pasta with Indian flavors. Choice of Protein: Paneer, Chicken, Shrimp.',
                price: '',
                isBestseller: true
            },
            {
                id: 'alfredo-pasta',
                name: 'Alfredo Pasta',
                description: 'Rich, velvety cream sauce with classic depth. Choice of Protein: Paneer, Chicken, Shrimp.',
                price: ''
            },
            {
                id: 'pesto-pasta',
                name: 'Pesto Pasta',
                description: 'Fresh basil and herb blend with a bright, aromatic finish. Choice of Protein: Paneer, Chicken, Shrimp.',
                price: '',
                isBestseller: true
            }
        ]
    },
    {
        id: 'chefs-creations',
        title: 'CHEF\'S CREATIONS',
        items: [
            {
                id: 'paneer-pasanda',
                name: 'Paneer Pasanda',
                description: 'Silken paneer layered in a nut and crowned with a fragrant cardamom-cashew gravy a classic Mughlai delight.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'lasooni-palak-with-burrata',
                name: 'Lasooni Palak with Burrata',
                description: 'A smooth spinach purée slow-cooked with roasted garlic, oil, and spices, topped with melting burrata cheese for a rich blend of earthy and creamy flavors.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'dal-makhani',
                name: 'Dal Makhani',
                description: '24-hour simmered black lentils enriched with butter and cream silky, smoky, and irresistibly indulgent.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'peeli-double-dal-tadka',
                name: 'Peeli Double Dal Tadka',
                description: 'A signature double-lentil preparation gently simmered and finished with a fragrant ghee-garlic tempering.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'sanjh-savera',
                name: 'Sanjh Savera',
                description: 'Paneer and spinach koftas bathed in a duo of vibrant gravies, celebrating balance, richness, and visual artistry.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'chana-masala',
                name: 'Chana Masala',
                description: 'Slow-simmered chickpeas cooked with tomatoes, onions, ginger, and aromatic spices robust, comforting, and deeply flavorful.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'malai-kofta',
                name: 'Malai Kofta',
                description: 'Golden cottage cheese dumplings nestled in a lush, mildly sweet cream sauce with cardamom.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'kolhapuri-veg',
                name: 'Kolhapuri Veg',
                description: 'A bold Maharashtrian vegetable curry cooked with roasted coconut, red chilies, and traditional Kolhapuri spices fiery, aromatic, and full-bodied.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'malvani-chicken',
                name: 'Malvani Chicken',
                description: 'A coastal Maharashtrian delicacy crafted with roasted coconut, stone-ground chilies, and warm spices. Rich, vibrant, and aromatic, this curry showcases the bold flavors of the Konkan coastline.',
                price: '',
                dietary: 'non-veg',
                isBestseller: true
            },
            {
                id: 'lamb-roghan-josh',
                name: 'Lamb Roghan Josh',
                description: 'A legendary Kashmiri dish of lamb slow-cooked in a rich crimson gravy with ratanjot, fennel, and dried ginger, creating a silky curry that exudes warmth and regal flavor.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'laal-maas',
                name: 'Laal Maas',
                description: 'A vibrant Rajasthani delight of tender lamb in Mathania red chilies, smoked ghee, and desert spices, showcasing the essence of royal hunting cuisine.',
                price: '',
                dietary: 'non-veg'
            },
            {
                id: 'kolhapuri-mutton',
                name: 'Kolhapuri Mutton',
                description: 'A vibrant goat curry slow-cooked in Kolhapur\'s aromatic chili-coconut masala, offering rich heat and lasting flavor.',
                price: '',
                dietary: 'non-veg',
                isBestseller: true
            },
            {
                id: 'goan-shrimp-curry',
                name: 'Goan Shrimp Curry',
                description: 'Juicy shrimp bathed in a coastal coconut curry with kokum and toasted spices, capturing Goa\'s sunny essence in each aromatic bite.',
                price: '',
                dietary: 'non-veg'
            }
        ]
    },
    {
        id: 'the-classic',
        title: 'THE CLASSIC',
        items: [
            {
                id: 'tikka-masala',
                name: 'Tikka Masala',
                description: 'Choice of Protein: Paneer, Chicken, Goat, Lamb, Shrimp.',
                price: ''
            },
            {
                id: 'kadhai',
                name: 'Kadhai',
                description: 'Choice of Protein: Paneer, Chicken, Goat, Lamb, Shrimp.',
                price: ''
            },
            {
                id: 'vindaloo',
                name: 'Vindaloo',
                description: 'Choice of Protein: Paneer, Chicken, Goat, Lamb, Shrimp.',
                price: ''
            },
            {
                id: 'butter-masala',
                name: 'Butter Masala',
                description: 'Choice of Protein: Paneer, Chicken, Goat, Lamb, Shrimp.',
                price: ''
            }
        ]
    },
    {
        id: 'treat-yourself',
        title: 'TREAT YOURSELF',
        items: [
            {
                id: 'akharot-halwa',
                name: 'Akharot Halwa',
                description: 'A luxurious medley of slow-cooked walnuts gently caramelized in ghee and milk, offering deep, toasty richness and a warm, melt-in-the-mouth finish reminiscent of old-world royal kitchens.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'gulab-jamun',
                name: 'Gulab Jamun',
                description: 'Soft, house-made milk dumplings gently fried and soaked in a warm sugar syrup, offering a rich, indulgent, and timeless finish.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'dil-bahar-halwa',
                name: 'Dil Bahar Halwa',
                description: 'Fresh beetroot slow-simmered in milk, ghee, and cane sugar, resulting in a vibrant ruby halwa with an earthy sweetness and aromatic depth a dessert that truly pleases the heart.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'cassata',
                name: 'Cassata',
                description: 'A nostalgic Italian-inspired ice cream delight layered with rich flavors, delicate sponge, nuts, and subtle sweetness, offering a beautifully creamy and elegant finale to the meal.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'orange-kulfi',
                name: 'Orange Kulfi',
                description: 'Silky house-made kulfi infused with zest and fresh-pressed orange juice. Bright, citrusy, and refreshing a refined twist on a classic frozen treat.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'rasmalai-cheesecake',
                name: 'Rasmalai Cheesecake',
                description: 'An exquisite fusion of cheesecake and classic rasmalai, adorned with saffron cream and pistachio crumble. Sophisticated, contemporary, and irresistibly enchanting.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'jamun-tiramisu',
                name: 'Jamun Tiramisu',
                description: 'An Indo-Italian creation featuring soft gulab jamuns nestled between espresso-soaked mascarpone layers. A bold, playful reinterpretation of two iconic classics.',
                price: '',
                dietary: 'veg'
            },
            {
                id: 'apricot-delight',
                name: 'Apricot Delight',
                description: 'Slow-poached apricots layered with cream, offering a delicate balance of sweetness, gentle acidity, and elegant texture.',
                price: '',
                dietary: 'veg',
                isBestseller: true
            },
            {
                id: 'mango-mousse',
                name: 'Mango Mousse',
                description: 'A silken mango mousse crafted from mangoes, delicately folded for an airy texture and a lingering tropical finish.',
                price: '',
                dietary: 'veg'
            }
        ]
    }
];
