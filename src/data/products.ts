import { Product } from '../types/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Canin Kitten",
    price: 1899,
    description: "Сухой корм для котят до 12 месяцев",
    image: "/placeholders/Royal Canin Kitten.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Royal Canin",
    tags: ["котята", "сухой корм"],
    popular: true
  },
  {
    id: 2,
    name: "Royal Canin Indoor",
    price: 1799,
    description: "Сухой корм для домашних кошек",
    image: "/placeholders/Royal Canin Indoor.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Royal Canin",
    tags: ["взрослые кошки", "сухой корм"],
    popular: true
  },
  {
    id: 3,
    name: "Royal Canin Sterilized",
    price: 1999,
    description: "Сухой корм для стерилизованных кошек",
    image: "/placeholders/Royal Canin Sterilized.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Royal Canin",
    tags: ["стерилизованные", "сухой корм"],
    popular: true
  },
  {
    id: 4,
    name: "Royal Canin Hair & Skin",
    price: 1899,
    description: "Сухой корм для здоровья кожи и шерсти",
    image: "/placeholders/Royal Canin Hair & Skin.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Royal Canin",
    tags: ["кожа и шерсть", "сухой корм"],
    popular: false
  },
  {
    id: 5,
    name: "Royal Canin Urinary",
    price: 2199,
    description: "Сухой корм для профилактики МКБ",
    image: "/placeholders/Royal Canin Urinary.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Royal Canin",
    tags: ["мочевыделительная система", "сухой корм"],
    popular: false
  },
  {
    id: 6,
    name: "Pro Plan Adult",
    price: 1599,
    description: "Сухой корм для взрослых кошек",
    image: "/placeholders/Pro Plan Adult.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Pro Plan",
    tags: ["взрослые кошки", "сухой корм"],
    popular: true
  },
  {
    id: 7,
    name: "Pro Plan Kitten",
    price: 1699,
    description: "Сухой корм для котят",
    image: "/placeholders/Pro Plan Kitten.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Pro Plan",
    tags: ["котята", "сухой корм"],
    popular: true
  },
  {
    id: 8,
    name: "Pro Plan Sterilized",
    price: 1799,
    description: "Сухой корм для стерилизованных кошек",
    image: "/placeholders/Pro Plan Sterilized.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Pro Plan",
    tags: ["стерилизованные", "сухой корм"],
    popular: true
  },
  {
    id: 9,
    name: "Pro Plan Delicate",
    price: 1899,
    description: "Сухой корм для кошек с чувствительным пищеварением",
    image: "/placeholders/Pro Plan Delicate.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Pro Plan",
    tags: ["чувствительное пищеварение", "сухой корм"],
    popular: false
  },
  {
    id: 10,
    name: "Pro Plan Hairball",
    price: 1699,
    description: "Сухой корм для профилактики образования комков шерсти",
    image: "/placeholders/Pro Plan Hairball.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Pro Plan",
    tags: ["комки шерсти", "сухой корм"],
    popular: false
  },
  {
    id: 11,
    name: "Hills Science Plan Kitten",
    price: 1999,
    description: "Сухой корм для котят",
    image: "/placeholders/Hills Science Plan Kitten.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Hills",
    tags: ["котята", "сухой корм"],
    popular: true
  },
  {
    id: 12,
    name: "Hills Science Plan Adult",
    price: 1899,
    description: "Сухой корм для взрослых кошек",
    image: "/placeholders/Hills Science Plan Adult.jpg",
    category: "Корм",
    petType: "кошка",
    brand: "Hills",
    tags: ["взрослые кошки", "сухой корм"],
    popular: true
  },
  // {
  //   id: 13,
  //   name: "Hills Science Plan Sterilized",
  //   price: 2099,
  //   description: "Сухой корм для стерилизованных кошек",
  //   image: "/placeholders/Hills Science Plan Sterilized.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Hills",
  //   tags: ["стерилизованные", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 14,
  //   name: "Hills Science Plan Urinary",
  //   price: 2299,
  //   description: "Сухой корм для профилактики МКБ",
  //   image: "/placeholders/Hills Science Plan Urinary.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Hills",
  //   tags: ["мочевыделительная система", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 15,
  //   name: "Hills Science Plan Hairball",
  //   price: 1999,
  //   description: "Сухой корм для профилактики образования комков шерсти",
  //   image: "/placeholders/Hills Science Plan Hairball.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Hills",
  //   tags: ["комки шерсти", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 16,
  //   name: "Brit Care Kitten",
  //   price: 1499,
  //   description: "Сухой корм для котят",
  //   image: "/placeholders/Brit Care Kitten.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Brit Care",
  //   tags: ["котята", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 17,
  //   name: "Brit Care Adult",
  //   price: 1399,
  //   description: "Сухой корм для взрослых кошек",
  //   image: "/placeholders/Brit Care Adult.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Brit Care",
  //   tags: ["взрослые кошки", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 18,
  //   name: "Brit Care Sterilized",
  //   price: 1599,
  //   description: "Сухой корм для стерилизованных кошек",
  //   image: "/placeholders/Brit Care Sterilized.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Brit Care",
  //   tags: ["стерилизованные", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 19,
  //   name: "Brit Care Hairball",
  //   price: 1499,
  //   description: "Сухой корм для профилактики образования комков шерсти",
  //   image: "/placeholders/Brit Care Hairball.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Brit Care",
  //   tags: ["комки шерсти", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 20,
  //   name: "Brit Care Indoor",
  //   price: 1399,
  //   description: "Сухой корм для домашних кошек",
  //   image: "/placeholders/Brit Care Indoor.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Brit Care",
  //   tags: ["домашние кошки", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 21,
  //   name: "Acana Wild Prairie",
  //   price: 2499,
  //   description: "Сухой корм с курицей и индейкой",
  //   image: "/placeholders/Acana Wild Prairie.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Acana",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 22,
  //   name: "Acana Pacifica",
  //   price: 2599,
  //   description: "Сухой корм с рыбой",
  //   image: "/placeholders/Acana Pacifica.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Acana",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 23,
  //   name: "Acana Grasslands",
  //   price: 2499,
  //   description: "Сухой корм с ягненком и уткой",
  //   image: "/placeholders/Acana Grasslands.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Acana",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 24,
  //   name: "Orijen Cat & Kitten",
  //   price: 2999,
  //   description: "Сухой корм для кошек и котят",
  //   image: "/placeholders/Orijen Cat & Kitten.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Orijen",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 25,
  //   name: "Orijen Six Fish",
  //   price: 3099,
  //   description: "Сухой корм с шестью видами рыбы",
  //   image: "/placeholders/Orijen Six Fish.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Orijen",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 26,
  //   name: "Orijen Regional Red",
  //   price: 2999,
  //   description: "Сухой корм с мясом ягненка, свинины и говядины",
  //   image: "/placeholders/Orijen Regional Red.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Orijen",
  //   tags: ["премиум", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 27,
  //   name: "Go! Solutions Kitten",
  //   price: 1999,
  //   description: "Сухой корм для котят",
  //   image: "/placeholders/Go! Solutions Kitten.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Go!",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 28,
  //   name: "Go! Solutions Adult",
  //   price: 1899,
  //   description: "Сухой корм для взрослых кошек",
  //   image: "/placeholders/Go! Solutions Adult.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Go!",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 29,
  //   name: "Go! Solutions Fit",
  //   price: 1999,
  //   description: "Сухой корм для поддержания веса",
  //   image: "/placeholders/Go! Solutions Fit.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Go!",
  //   tags: ["премиум", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 30,
  //   name: "Go! Solutions Sensitivities",
  //   price: 2099,
  //   description: "Сухой корм для кошек с чувствительным пищеварением",
  //   image: "/placeholders/Go! Solutions Sensitivities.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Go!",
  //   tags: ["премиум", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 31,
  //   name: "Now Fresh Kitten",
  //   price: 1899,
  //   description: "Сухой корм для котят",
  //   image: "/placeholders/Now Fresh Kitten.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Now Fresh",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 32,
  //   name: "Now Fresh Adult",
  //   price: 1799,
  //   description: "Сухой корм для взрослых кошек",
  //   image: "/placeholders/Now Fresh Adult.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Now Fresh",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 33,
  //   name: "Now Fresh Sterilized",
  //   price: 1899,
  //   description: "Сухой корм для стерилизованных кошек",
  //   image: "/placeholders/Now Fresh Sterilized.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Now Fresh",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 34,
  //   name: "Now Fresh Grain Free",
  //   price: 1999,
  //   description: "Сухой корм без зерна",
  //   image: "/placeholders/Now Fresh Grain Free.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Now Fresh",
  //   tags: ["премиум", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 35,
  //   name: "Grandorf Kitten",
  //   price: 1699,
  //   description: "Сухой корм для котят",
  //   image: "/placeholders/Grandorf Kitten.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Grandorf",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 36,
  //   name: "Grandorf Adult",
  //   price: 1599,
  //   description: "Сухой корм для взрослых кошек",
  //   image: "/placeholders/Grandorf Adult.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Grandorf",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 37,
  //   name: "Grandorf Sterilized",
  //   price: 1699,
  //   description: "Сухой корм для стерилизованных кошек",
  //   image: "/placeholders/Grandorf Sterilized.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Grandorf",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 38,
  //   name: "Grandorf Indoor",
  //   price: 1599,
  //   description: "Сухой корм для домашних кошек",
  //   image: "/placeholders/Grandorf Indoor.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Grandorf",
  //   tags: ["премиум", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 39,
  //   name: "Farmina N&D Kitten",
  //   price: 1999,
  //   description: "Сухой корм для котят",
  //   image: "/placeholders/Farmina N&D Kitten.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Farmina",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 40,
  //   name: "Farmina N&D Adult",
  //   price: 1899,
  //   description: "Сухой корм для взрослых кошек",
  //   image: "/placeholders/Farmina N&D Adult.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Farmina",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 41,
  //   name: "Farmina N&D Sterilized",
  //   price: 1999,
  //   description: "Сухой корм для стерилизованных кошек",
  //   image: "/placeholders/Farmina N&D Sterilized.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Farmina",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 42,
  //   name: "Farmina N&D Ocean",
  //   price: 2099,
  //   description: "Сухой корм с рыбой",
  //   image: "/placeholders/Farmina N&D Ocean.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Farmina",
  //   tags: ["премиум", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 43,
  //   name: "Monge Kitten",
  //   price: 1499,
  //   description: "Сухой корм для котят",
  //   image: "/placeholders/Monge Kitten.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Monge",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 44,
  //   name: "Monge Adult",
  //   price: 1399,
  //   description: "Сухой корм для взрослых кошек",
  //   image: "/placeholders/Monge Adult.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Monge",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 45,
  //   name: "Monge Sterilized",
  //   price: 1499,
  //   description: "Сухой корм для стерилизованных кошек",
  //   image: "/placeholders/Monge Sterilized.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Monge",
  //   tags: ["премиум", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 46,
  //   name: "Monge Hairball",
  //   price: 1499,
  //   description: "Сухой корм для профилактики образования комков шерсти",
  //   image: "/placeholders/Monge Hairball.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Monge",
  //   tags: ["премиум", "сухой корм"],
  //   popular: false
  // },
  // {
  //   id: 47,
  //   name: "Purina One Kitten",
  //   price: 1299,
  //   description: "Сухой корм для котят",
  //   image: "/placeholders/Purina One Kitten.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Purina One",
  //   tags: ["эконом", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 48,
  //   name: "Purina One Adult",
  //   price: 1199,
  //   description: "Сухой корм для взрослых кошек",
  //   image: "/placeholders/Purina One Adult.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Purina One",
  //   tags: ["эконом", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 49,
  //   name: "Purina One Sterilized",
  //   price: 1299,
  //   description: "Сухой корм для стерилизованных кошек",
  //   image: "/placeholders/Purina One Sterilized.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Purina One",
  //   tags: ["эконом", "сухой корм"],
  //   popular: true
  // },
  // {
  //   id: 50,
  //   name: "Purina One Indoor",
  //   price: 1199,
  //   description: "Сухой корм для домашних кошек",
  //   image: "/placeholders/Purina One Indoor.jpg",
  //   category: "Корм",
  //   petType: "кошка",
  //   brand: "Purina One",
  //   tags: ["эконом", "сухой корм"],
  //   popular: false
  // }
];

export const getProductsByPetType = (petType: string) => {
  return products.filter(product => product.petType === petType);
};

export const getPopularProducts = () => {
  return products.filter(product => product.popular);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand: string) => {
  return products.filter(product => product.brand === brand);
};

export const getProductsByPriceRange = (min: number, max: number) => {
  return products.filter(product => product.price >= min && product.price <= max);
};

export const getProductsByTag = (tag: string) => {
  return products.filter(product => product.tags.includes(tag));
};

export const getFilteredProducts = (
  petType?: string,
  categories?: string[],
  priceRange?: { min: number; max: number },
  brands?: string[],
  tags?: string[]
) => {
  let filteredProducts = [...products];

  if (petType) {
    filteredProducts = filteredProducts.filter(product => product.petType === petType);
  }

  if (categories && categories.length > 0) {
    filteredProducts = filteredProducts.filter(product => categories.includes(product.category));
  }

  if (priceRange) {
    filteredProducts = filteredProducts.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
  }

  if (brands && brands.length > 0) {
    filteredProducts = filteredProducts.filter(product => brands.includes(product.brand));
  }

  if (tags && tags.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      product.tags.some(tag => tags.includes(tag))
    );
  }

  return filteredProducts;
};

export const getAllCategories = () => {
  return [...new Set(products.map(product => product.category))];
};

export const getAllBrands = () => {
  return [...new Set(products.map(product => product.brand))];
};

export const getAllTags = () => {
  const allTags = products.flatMap(product => product.tags);
  return [...new Set(allTags)];
};

export const getCategoryCount = (category: string) => {
  return products.filter(product => product.category === category).length;
};

export const getBrandCount = (brand: string) => {
  return products.filter(product => product.brand === brand).length;
};

export const getTagCount = (tag: string) => {
  return products.filter(product => product.tags.includes(tag)).length;
};
