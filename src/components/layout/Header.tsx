import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="hidden md:flex justify-between items-center text-sm text-gray-600 py-1 border-b">
          <div className="flex items-center gap-4">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (920) 303-29-09
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@exauto24.ru
            </span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              214012, г. Смоленск, Ново-Московская улица, 2/8, Смоленск
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pet-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="font-bold text-xl">Зоомагазин</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-pet-orange' : 'text-gray-700 hover:text-pet-orange'}`}
            >
              Главная
            </Link>
            <Link 
              to="/shop" 
              className={`font-medium ${isActive('/shop') ? 'text-pet-orange' : 'text-gray-700 hover:text-pet-orange'}`}
            >
              Магазин
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${isActive('/about') ? 'text-pet-orange' : 'text-gray-700 hover:text-pet-orange'}`}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${isActive('/contact') ? 'text-pet-orange' : 'text-gray-700 hover:text-pet-orange'}`}
            >
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="px-4 py-2 w-60 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-pet-orange focus:border-pet-orange"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 text-gray-500 hover:text-pet-orange">
                <Search size={18} />
              </button>
            </form>
            
            <button className="hidden md:flex text-gray-700 hover:text-pet-orange">
              <User size={22} />
            </button>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={22} className="text-gray-700 hover:text-pet-orange" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-pet-orange text-white text-xs px-1.5 rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Link>
            
            <button 
              className="md:hidden text-gray-700 hover:text-pet-orange"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <form onSubmit={handleSearch} className="flex items-center relative mb-4">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="px-4 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-pet-orange focus:border-pet-orange"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 text-gray-500 hover:text-pet-orange">
                <Search size={18} />
              </button>
            </form>
            
            <nav className="flex flex-col space-y-3 pb-4">
              <Link 
                to="/" 
                className={`font-medium ${isActive('/') ? 'text-pet-orange' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/shop" 
                className={`font-medium ${isActive('/shop') ? 'text-pet-orange' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Магазин
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${isActive('/about') ? 'text-pet-orange' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium ${isActive('/contact') ? 'text-pet-orange' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </Link>
              <Link 
                to="/account" 
                className="font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Мой аккаунт
              </Link>
            </nav>
            
            <div className="border-t pt-3 pb-2">
              <div className="flex flex-col space-y-2 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 (920) 303-29-09
                </span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@exauto24.ru
                </span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  214012, г. Смоленск, Ново-Московская улица, 2/8, Смоленск
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
