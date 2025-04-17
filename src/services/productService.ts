
import { supabase } from "@/integrations/supabase/client";
import { SupabaseProduct } from "@/integrations/supabase/types/supabase";
import { Product, PetType, Filter } from "@/types/types";

// Convert Supabase product format to our application format
const mapSupabaseProduct = (product: SupabaseProduct): Product => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.image_url,
    category: product.category,
    petType: product.pet_type as PetType,
    brand: product.brand,
    tags: product.tags,
    popular: product.popular
  };
};

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*');
  
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  
  return data.map(mapSupabaseProduct);
};

export const getProductsByPetType = async (petType: string): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('pet_type', petType);
  
  if (error) {
    console.error('Error fetching products by pet type:', error);
    return [];
  }
  
  return data.map(mapSupabaseProduct);
};

export const getPopularProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('popular', true);
  
  if (error) {
    console.error('Error fetching popular products:', error);
    return [];
  }
  
  return data.map(mapSupabaseProduct);
};

export const getFilteredProducts = async (
  petType?: string,
  categories?: string[],
  priceRange?: { min: number; max: number },
  brands?: string[],
  tags?: string[]
): Promise<Product[]> => {
  let query = supabase
    .from('products')
    .select('*');

  if (petType) {
    query = query.eq('pet_type', petType);
  }
  
  if (categories && categories.length > 0) {
    // Since we can't directly query for "in array" with Supabase, 
    // we'll filter categories with in()
    query = query.in('category', categories);
  }
  
  if (priceRange) {
    query = query.gte('price', priceRange.min).lte('price', priceRange.max);
  }
  
  if (brands && brands.length > 0) {
    query = query.in('brand', brands);
  }
  
  // Note: For tags, we'll need to filter manually after fetching since it's an array
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching filtered products:', error);
    return [];
  }
  
  let results = data.map(mapSupabaseProduct);
  
  // Filter by tags manually if needed
  if (tags && tags.length > 0) {
    results = results.filter(product => 
      product.tags.some(tag => tags.includes(tag))
    );
  }
  
  return results;
};

export const getAllCategories = async (): Promise<string[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('category');
  
  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
  
  return [...new Set(data.map(item => item.category))];
};

export const getAllBrands = async (): Promise<string[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('brand');
  
  if (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
  
  return [...new Set(data.map(item => item.brand))];
};

export const getAllTags = async (): Promise<string[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('tags');
  
  if (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
  
  const allTags = data.flatMap(item => item.tags);
  return [...new Set(allTags)];
};
