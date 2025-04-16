
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  petType: PetType;
  brand: string;
  tags: string[];
  popular: boolean;
}

export type PetType = 'cat' | 'dog' | 'hamster' | 'parrot' | 'rabbit' | 'turtle';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Filter {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  brands: string[];
  tags: string[];
}
