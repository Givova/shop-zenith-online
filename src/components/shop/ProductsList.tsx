
import React from 'react';
import ProductCard from '../products/ProductCard';
import { Product } from '@/types/types';
import { Skeleton } from '@/components/ui/skeleton';

interface ProductsListProps {
  products: Product[];
  loading?: boolean;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
            <div className="bg-gray-200 h-5 w-2/3 mb-2 rounded"></div>
            <div className="bg-gray-200 h-6 w-1/3 mb-4 rounded"></div>
            <div className="bg-gray-200 h-10 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-gray-600">Товаров не найдено по вашему запросу.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
