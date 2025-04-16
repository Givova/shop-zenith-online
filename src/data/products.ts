import { Product } from '../types/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Переноска для питомцев",
    price: 59.99,
    description: "Удобная переноска для питомцев малого и среднего размера",
    image: "/placeholders/carrier.png",
    category: "Аксессуары",
    petType: "кошка",
    brand: "Pet Care",
    tags: ["путешествия", "переноска"],
    popular: false
  },
  {
    id: 2,
    name: "Миска для кошек",
    price: 19.99,
    description: "Миска из нержавеющей стали для кошек",
    image: "/placeholders/cat-bowl.png",
    category: "Кормление",
    petType: "кошка",
    brand: "Pet Care",
    tags: ["кошачья еда"],
    popular: false
  },
  {
    id: 3,
    name: "Премиум миска для кошек",
    price: 29.99,
    description: "Премиальная керамическая миска для кошек",
    image: "/placeholders/cat-bowl-premium.png",
    category: "Кормление",
    petType: "кошка",
    brand: "Premium Pet",
    tags: ["кошачья еда"],
    popular: false
  },
  {
    id: 4,
    name: "Лежанка для кошек",
    price: 49.99,
    description: "Мягкая и уютная лежанка для кошек",
    image: "/placeholders/cat-bed.png",
    category: "Спальные места",
    petType: "кошка",
    brand: "Pet Care",
    tags: ["сон", "лежанка для кошек"],
    popular: true
  },
  {
    id: 5,
    name: "Премиум корм для кошек",
    price: 22.99,
    description: "Высококачественный сухой корм для взрослых кошек",
    image: "/placeholders/cat-food.png",
    category: "Корм",
    petType: "кошка",
    brand: "Premium Pet",
    tags: ["кошачий корм", "сухой корм"],
    popular: true
  },
  {
    id: 6,
    name: "Миска для собак",
    price: 24.99,
    description: "Большая миска из нержавеющей стали для собак",
    image: "/placeholders/dog-bowl.png",
    category: "Кормление",
    petType: "собака",
    brand: "Pet Care",
    tags: ["собачья еда"],
    popular: false
  },
  {
    id: 7,
    name: "Лежанка для собак",
    price: 69.99,
    description: "Большая удобная лежанка для собак",
    image: "/placeholders/dog-bed.png",
    category: "Спальные места",
    petType: "собака",
    brand: "Pet Care",
    tags: ["сон", "лежанка для собак"],
    popular: true
  },
  {
    id: 8,
    name: "Поводок для собак",
    price: 19.99,
    description: "Прочный нейлоновый поводок для собак",
    image: "/placeholders/dog-leash.png",
    category: "Аксессуары",
    petType: "собака",
    brand: "Dog's Friend",
    tags: ["собака", "прогулка"],
    popular: true
  },
  {
    id: 9,
    name: "Премиум корм для собак",
    price: 32.99,
    description: "Премиальный сухой корм для взрослых собак",
    image: "/placeholders/dog-food.png",
    category: "Корм",
    petType: "собака",
    brand: "Premium Pet",
    tags: ["собачий корм", "сухой корм"],
    popular: true
  },
  {
    id: 10,
    name: "Премиум корм для маленьких пород собак",
    price: 29.99,
    description: "Премиальный корм специально для маленьких пород собак",
    image: "/placeholders/dog-food-small.png",
    category: "Корм",
    petType: "собака",
    brand: "Premium Pet",
    tags: ["собачий корм", "маленькие породы"],
    popular: false
  },
  {
    id: 11,
    name: "Клетка для хомяка",
    price: 44.99,
    description: "Просторная многоуровневая клетка для хомяков",
    image: "/placeholders/hamster-cage.png",
    category: "Жилье",
    petType: "хомяк",
    brand: "Pet Care",
    tags: ["хомяк", "клетка"],
    popular: false
  },
  {
    id: 12,
    name: "Клетка для кролика",
    price: 89.99,
    description: "Деревянная клетка для кроликов с внутренней и внешней зонами",
    image: "/placeholders/rabbit-hutch.png",
    category: "Жилье",
    petType: "кролик",
    brand: "Pet Care",
    tags: ["кролик", "клетка"],
    popular: false
  }
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
