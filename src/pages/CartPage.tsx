
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  if (totalItems === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Корзина</h1>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center max-w-lg mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={36} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Ваша корзина пуста</h2>
            <p className="text-gray-600 mb-8">Похоже, вы ещё не добавили товаров в корзину.</p>
            <Button className="bg-pet-orange hover:bg-pet-orange/90" asChild>
              <Link to="/shop">Начать покупки</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Ваша корзина</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Header */}
              <div className="hidden md:grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b">
                <div className="col-span-2">
                  <span className="font-medium">Товар</span>
                </div>
                <div className="text-center">
                  <span className="font-medium">Цена</span>
                </div>
                <div className="text-center">
                  <span className="font-medium">Количество</span>
                </div>
                <div className="text-right">
                  <span className="font-medium">Сумма</span>
                </div>
              </div>
              
              {/* Cart Items */}
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 items-center">
                    <div className="col-span-1 md:col-span-2 flex items-center">
                      <div className="bg-gray-100 rounded-lg w-20 h-20 flex-shrink-0 flex items-center justify-center mr-4">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">
                          <Link to={`/product/${item.product.id}`} className="hover:text-pet-orange">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500 md:hidden">
                          {item.product.price.toFixed(2)} ₽
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block text-center">
                      <span>{item.product.price.toFixed(2)} ₽</span>
                    </div>
                    
                    <div className="md:text-center">
                      <div className="flex items-center border rounded-md w-full sm:w-auto sm:inline-flex">
                        <button 
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-pet-orange"
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus size={16} />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
                          min="1"
                          className="w-12 h-10 text-center border-x focus:outline-none focus:ring-0 bg-transparent"
                        />
                        <button 
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-pet-orange"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end">
                      <span className="font-medium md:mr-4">
                        {(item.product.price * item.quantity).toFixed(2)} ₽
                      </span>
                      <button 
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-gray-300"
                  onClick={clearCart}
                >
                  Очистить корзину
                </Button>
                <Button className="bg-pet-orange hover:bg-pet-orange/90" asChild>
                  <Link to="/shop">Продолжить покупки</Link>
                </Button>
              </div>
              
              <Button variant="ghost" className="text-gray-600">
                Обновить корзину
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Итого</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-600">Сумма</span>
                  <span className="font-medium">{totalPrice.toFixed(2)} ₽</span>
                </div>
                
                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-600">Доставка</span>
                  <span className="font-medium">Бесплатно</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">Итого</span>
                  <span className="text-xl font-bold text-pet-orange">{totalPrice.toFixed(2)} ₽</span>
                </div>
              </div>
              
              <Button className="w-full py-6 bg-pet-orange hover:bg-pet-orange/90">
                Оформить заказ
              </Button>
              
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Бесплатная доставка от 50 ₽</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Безопасный платёж</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">30 дней на возврат</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
