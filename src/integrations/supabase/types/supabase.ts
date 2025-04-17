
export type SupabaseProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
  pet_type: string;
  brand: string;
  tags: string[];
  popular: boolean;
}

export type Database = {
  public: {
    Tables: {
      products: {
        Row: SupabaseProduct;
        Insert: SupabaseProduct;
        Update: Partial<SupabaseProduct>;
      };
    };
  };
};
