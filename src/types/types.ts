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

export type PetType = 'кошка' | 'собака' | 'хомяк' | 'попугай' | 'кролик' | 'черепаха';

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
