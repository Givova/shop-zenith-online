
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, Share2, ShoppingCart, Minus, Plus } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PopularProducts from '../components/products/PopularProducts';
import { useCart } from '@/context/CartContext';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">We couldn't find the product you're looking for.</p>
          <Button asChild>
            <Link to="/shop">Return to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-pet-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-pet-orange">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?pet=${product.petType}`} className="hover:text-pet-orange capitalize">{product.petType}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>
        
        <Button
          variant="ghost"
          className="flex items-center text-gray-600 hover:text-pet-orange mb-6"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={18} className="mr-1" /> Back
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Images */}
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-96 object-contain"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-pet-orange mb-4">${product.price.toFixed(2)}</p>
            
            <div className="border-t border-b py-4 my-6">
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="flex items-center mb-4">
                <span className="font-medium mr-3">Category:</span>
                <Link 
                  to={`/shop?category=${product.category}`} 
                  className="text-pet-orange hover:underline"
                >
                  {product.category}
                </Link>
              </div>
              
              <div className="flex items-center mb-4">
                <span className="font-medium mr-3">Brand:</span>
                <Link 
                  to={`/shop?brand=${product.brand}`} 
                  className="text-gray-700 hover:text-pet-orange"
                >
                  {product.brand}
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center">
                <span className="font-medium mr-3">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <Link 
                      key={tag}
                      to={`/shop?tag=${tag}`}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-pet-orange hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="flex items-center border rounded-md w-full sm:w-auto">
                <button 
                  className="w-10 h-12 flex items-center justify-center text-gray-600 hover:text-pet-orange"
                  onClick={decreaseQuantity}
                >
                  <Minus size={18} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                  className="w-16 h-12 text-center border-x focus:outline-none focus:ring-0 bg-transparent"
                />
                <button 
                  className="w-10 h-12 flex items-center justify-center text-gray-600 hover:text-pet-orange"
                  onClick={increaseQuantity}
                >
                  <Plus size={18} />
                </button>
              </div>
              
              <Button 
                className="flex-1 bg-pet-orange hover:bg-pet-orange/90 text-white flex items-center justify-center gap-2 py-6"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="w-12 h-12 border-gray-300 text-gray-600 hover:text-pet-orange hover:border-pet-orange"
              >
                <Heart size={18} />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="w-12 h-12 border-gray-300 text-gray-600 hover:text-pet-orange hover:border-pet-orange"
              >
                <Share2 size={18} />
              </Button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
              <p className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free shipping for orders over $50
              </p>
              <p className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Delivery within 3-5 business days
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                30-day returns policy
              </p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="description">
            <TabsList className="border-b">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-6">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="text-gray-700 mb-4">
                {product.description}
              </p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, 
                nisl nunc euismod nisi, eu porttitor nisl nunc eu nisi. Sed euismod, urna eu tincidunt consectetur,
                nisl nunc euismod nisi, eu porttitor nisl nunc eu nisi.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="py-6">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Dimensions</h4>
                  <p className="text-gray-700">10 x 15 x 5 cm</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Weight</h4>
                  <p className="text-gray-700">0.5 kg</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Material</h4>
                  <p className="text-gray-700">Premium plastic</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Color</h4>
                  <p className="text-gray-700">Blue, Red, Green</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-6">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <p className="text-gray-600 mb-4">There are no reviews yet.</p>
              <Button className="bg-pet-orange hover:bg-pet-orange/90">Write a Review</Button>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          <PopularProducts />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
