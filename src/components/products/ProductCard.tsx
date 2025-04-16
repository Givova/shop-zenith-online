
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all">
      <div className="aspect-square relative overflow-hidden flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2 text-gray-800 group-hover:text-pet-orange transition-colors">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{product.price.toFixed(2)} ₽</span>
          <Button
            size="sm"
            variant="outline"
            className="text-pet-orange border-pet-orange hover:bg-pet-orange/10"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-2" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
