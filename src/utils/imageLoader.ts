
import { supabase } from "@/integrations/supabase/client";

/**
 * Get public URL for a file in Supabase storage
 * @param path The path to the file in storage
 * @returns The public URL for the file
 */
export const getPublicImageUrl = (path: string): string => {
  // For images that are still using the placeholder path
  if (path.startsWith('/placeholders/')) {
    return path;
  }
  
  // For images stored in Supabase
  if (path.startsWith('product_images/')) {
    const { data } = supabase.storage.from('product_images').getPublicUrl(path.replace('product_images/', ''));
    return data.publicUrl;
  }
  
  return path;
};

/**
 * Upload an image to Supabase storage
 * @param file The file to upload
 * @param path The path to store the file at
 * @returns The path to the uploaded file
 */
export const uploadProductImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
  
  const { data, error } = await supabase.storage
    .from('product_images')
    .upload(fileName, file);
    
  if (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image');
  }
  
  return `product_images/${data.path}`;
};
