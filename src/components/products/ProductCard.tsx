
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  wishlistButton?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, wishlistButton = true }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block bg-white rounded-lg overflow-hidden relative border border-gray-200 h-full">
      {wishlistButton && (
        <button 
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center z-10 text-gray-500 hover:text-pet-orange transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Wishlist functionality would go here
            console.log('Added to wishlist:', product.name);
          }}
        >
          <Heart size={18} />
        </button>
      )}
      
      <div className="aspect-square p-4 bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-xl font-bold text-pet-orange mb-3">${product.price.toFixed(2)}</p>
        
        <Button 
          className="w-full bg-pet-orange hover:bg-pet-orange/90 text-white"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
