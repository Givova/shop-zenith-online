
import { Product } from '../types/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Pet Carrier",
    price: 59.99,
    description: "Comfortable pet carrier for small to medium sized pets",
    image: "/placeholders/carrier.png",
    category: "Accessories",
    petType: "cat",
    brand: "Pet Care",
    tags: ["travel", "carrier"],
    popular: false
  },
  {
    id: 2,
    name: "Cat Bowl",
    price: 19.99,
    description: "Stainless steel feeding bowl for cats",
    image: "/placeholders/cat-bowl.png",
    category: "Feeding",
    petType: "cat",
    brand: "Pet Care",
    tags: ["cat food"],
    popular: false
  },
  {
    id: 3,
    name: "Cat Bowl Premium",
    price: 29.99,
    description: "Premium ceramic feeding bowl for cats",
    image: "/placeholders/cat-bowl-premium.png",
    category: "Feeding",
    petType: "cat",
    brand: "Premium Pet",
    tags: ["cat food"],
    popular: false
  },
  {
    id: 4,
    name: "Cat Bed",
    price: 49.99,
    description: "Soft and cozy bed for cats",
    image: "/placeholders/cat-bed.png",
    category: "Bedding",
    petType: "cat",
    brand: "Pet Care",
    tags: ["sleeping", "cat bed"],
    popular: true
  },
  {
    id: 5,
    name: "Premium Cat Food",
    price: 22.99,
    description: "High-quality dry food for adult cats",
    image: "/placeholders/cat-food.png",
    category: "Food",
    petType: "cat",
    brand: "Premium Pet",
    tags: ["cat food", "dry food"],
    popular: true
  },
  {
    id: 6,
    name: "Dog Bowl",
    price: 24.99,
    description: "Large stainless steel feeding bowl for dogs",
    image: "/placeholders/dog-bowl.png",
    category: "Feeding",
    petType: "dog",
    brand: "Pet Care",
    tags: ["dog food"],
    popular: false
  },
  {
    id: 7,
    name: "Dog Bed",
    price: 69.99,
    description: "Large comfortable bed for dogs",
    image: "/placeholders/dog-bed.png",
    category: "Bedding",
    petType: "dog",
    brand: "Pet Care",
    tags: ["sleeping", "dog bed"],
    popular: true
  },
  {
    id: 8,
    name: "Dog Leash",
    price: 19.99,
    description: "Durable nylon leash for dogs",
    image: "/placeholders/dog-leash.png",
    category: "Accessories",
    petType: "dog",
    brand: "Dog's Friend",
    tags: ["dog", "walking"],
    popular: true
  },
  {
    id: 9,
    name: "Premium Dog Food",
    price: 32.99,
    description: "Premium dry food for adult dogs",
    image: "/placeholders/dog-food.png",
    category: "Food",
    petType: "dog",
    brand: "Premium Pet",
    tags: ["dog food", "dry food"],
    popular: true
  },
  {
    id: 10,
    name: "Premium Dog Food Small Breed",
    price: 29.99,
    description: "Premium food specifically for small dog breeds",
    image: "/placeholders/dog-food-small.png",
    category: "Food",
    petType: "dog",
    brand: "Premium Pet",
    tags: ["dog food", "small breed"],
    popular: false
  },
  {
    id: 11,
    name: "Hamster Cage",
    price: 44.99,
    description: "Spacious cage for hamsters with multiple levels",
    image: "/placeholders/hamster-cage.png",
    category: "Housing",
    petType: "hamster",
    brand: "Pet Care",
    tags: ["hamster", "cage"],
    popular: false
  },
  {
    id: 12,
    name: "Rabbit Hutch",
    price: 89.99,
    description: "Wooden hutch for rabbits with indoor and outdoor areas",
    image: "/placeholders/rabbit-hutch.png",
    category: "Housing",
    petType: "rabbit",
    brand: "Pet Care",
    tags: ["rabbit", "hutch"],
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
